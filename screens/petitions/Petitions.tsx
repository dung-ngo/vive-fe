'use client';

import { useState, useEffect } from 'react';
import useTranslations from '@/hooks/useTranslations';
import YouTube from 'react-youtube';
import ProgressBar from '@/components/ProgressBar';
import Image from 'next/image';

const PetitionScreen = () => {
  const videoId = 'bS9eXS6VucU'; // dummy for now
  const targetNumber = 500;
  const t = useTranslations();
  const [signatureCount, setSignatureCount] = useState<number>(0);
  const progressPercentage = (signatureCount * 100) / targetNumber;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/google-sheets');
        const data = await res.json();
        console.log('data: ', data);
        setSignatureCount((prev) => prev + data?.length || prev);
      } catch (error) {
        console.error('Calling API error:', error);
      }
    })();
  }, []);

  console.log('countData: ', {
    signatureCount,
    percentage: progressPercentage + '%',
  });

  return (
    <div className="vive-petition-screen">
      <div className="container">
        <section className="petition-form-container">
          <div className="petition-gg-form">
            <div className="signature-count text-center">
              <p className="text-body">
                <div className="my-5">
                  <ProgressBar percentage={progressPercentage} />
                </div>
                <span className="font-bold">
                  {signatureCount} {t.petition.targetContent1}
                </span>{' '}
                {t.petition.targetContent2} {targetNumber}{' '}
                {t.petition.targetContent3}
              </p>
            </div>
            <div className="gg-iframe">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfUwQE2RKx_WBiGMwTEepQ-a4XiEVq0zq9wPlT6IiTvBMUGdg/viewform?embedded=true"
                width="640"
                height="100%"
                id="google-form"
                frameBorder={0}
              >
                Loading…
              </iframe>
            </div>
            <div className="featured-comment">
              <h2>{t.petition.featuredComment}</h2>
              <div className="flex gap-3 mb-5">
                <Image
                  width={50}
                  height={50}
                  src="/icons/person.png"
                  alt="Commenter's Profile Picture"
                  className="w-12 h-12 rounded-full"
                />
                <div className="comment-box bg-gray-200">
                  <span className="font-bold text-base">Nguyễn Văn A</span>
                  <p className="text-sm">
                    Tôi hoàn toàn ủng hộ việc chấm dứt lễ hội giết mổ lợn tàn
                    bạo này. Chúng ta phải đối xử với động vật một cách nhân
                    đạo.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Image
                  width={50}
                  height={50}
                  src="/icons/person.png"
                  alt="Commenter's Profile Picture"
                  className="w-12 h-12 rounded-full"
                />
                <div className="comment-box bg-gray-200">
                  <span className="font-bold text-base">Trần Thị B</span>
                  <p className="text-sm">
                    Tôi đã ký đơn thỉnh cầu và chia sẻ với bạn bè của mình. Hy
                    vọng chúng ta có thể tạo ra sự thay đổi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="petition-content-container">
            <h1>{t.petition.title}</h1>
            <div className="petition-content-1">
              <p className="mb-8">{t.petition.content1}</p>
              <p className="mb-8">{t.petition.content2}</p>
              <p className="mb-8">{t.petition.content3}</p>
            </div>
            <div className="petition-video">
              <YouTube className="youtube-video" videoId={videoId} />
            </div>
            <div className="petition-content-2">
              <h2>{t.petition.subTitle}</h2>
              <p className="mb-8">
                {t.petition.subContent1}{' '}
                <span className="font-bold">{t.petition.subContent2}</span>{' '}
              </p>
              <p>{t.petition.subContent3}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetitionScreen;
