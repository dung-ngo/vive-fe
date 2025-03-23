'use client';

import { useState } from 'react';
import useTranslations from '@/hooks/useTranslations';
import YouTube from 'react-youtube';
import ProgressBar from '@/components/ProgressBar';
import Image from 'next/image';

const PetitionScreen = () => {
  const videoId = 'bS9eXS6VucU'; // dummy for now
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const t = useTranslations();
  const resetForm = () => {
    setName('');
    setEmail('');
  };

  // useEffect(() => {
  //   const modifyButtonText = () => {
  //     const iframe = document.getElementById(
  //       'google-form',
  //     ) as HTMLIFrameElement;
  //     console.log('iframe ', iframe);
  //     console.log('node ', iframe.contentDocument);
  //     if (!iframe) return;

  //     const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
  //     if (!innerDoc) return;

  //     const submitButton = innerDoc.querySelector(
  //       'input[type=submit]',
  //     ) as HTMLInputElement;
  //     if (submitButton) {
  //       submitButton.value = 'Send Response'; // Modify button text
  //     }
  //   };

  //   // Delay to ensure iframe content loads
  //   setTimeout(modifyButtonText, 2000);

  //   return () => clearTimeout(); // Cleanup (optional)
  // }, []);

  const downloadBook = () => {
    const a = document.createElement('a');
    a.href = '/Vive-Booklet-v2.pdf';
    a.download = 'Vive-Booklet.pdf';
    a.click();
  };

  return (
    <div className="vive-petition-screen">
      <div className="container">
        <section className="petition-form-container">
          <div className="petition-content-container">
            <h1>Help Stop Vietnam's Cruel Pig Slaughter Festival</h1>
            <div className="petition-content-1">
              <p style={{ marginBottom: '2rem' }}>
                The Nem Thuong Pig Slaughter Festival in Vietnam is one of the
                worst "festivals" in the world. For the event—which takes place
                every Lunar New Year—pigs are tied up and paraded through the
                streets of Nem Thuong village surrounded by noisy crowds and
                frightening, loud music. Their throats are then slit while
                they're still fully conscious so that villagers can dip money in
                their blood for "good luck."
              </p>
              <p>
                Pigs are social, playful, protective animals who bond with each
                other, make nests, and relax in the sun. They are known to
                dream, recognize their own names, learn "tricks" like sitting
                for a treat, lead social lives of a complexity previously
                observed only in primates, and have been seen showing empathy
                for other pigs who are unhappy or distressed. All pigs deserve
                long, happy lives, free from suffering and exploitation.
              </p>
            </div>
            <div className="petition-video">
              <YouTube className="youtube-video" videoId={videoId} />
            </div>
            <div className="petition-content-2">
              <h2>Take Action for Pigs</h2>
              <p>
                Torturing and killing animals have never brought anything good
                into the world, and culture and tradition are no excuse for
                cruelty. Please take a moment to send a message to officials in
                Vietnam and ask that they put an end to this cruel festival
                immediately.
              </p>
            </div>
          </div>
          <div className="petition-gg-form">
            <div className="signature-count px-8">
              <p className="text-body">
                <span>15,000 người đã ký đơn thỉnh cầu.</span> Hãy cùng chúng
                tôi đạt được 20,000 người ký
              </p>
              <div className="my-5">
                <ProgressBar />
              </div>
            </div>
            <div className="gg-iframe">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfUwQE2RKx_WBiGMwTEepQ-a4XiEVq0zq9wPlT6IiTvBMUGdg/viewform?embedded=true"
                width="100%"
                height="100%"
                id="google-form"
              >
                Loading…
              </iframe>
            </div>
            <div className="featured-comment mt-10">
              <h2>Featured comments</h2>
              <div className="flex gap-3 mb-5">
                <Image
                  width={50}
                  height={50}
                  src="/icons/person.png"
                  alt="Commenter's Profile Picture"
                  className="w-12 h-12 rounded-full"
                />
                <div className="bg-gray-200 p-3 rounded-3xl">
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
                <div className="bg-gray-200 p-3 rounded-3xl">
                  <span className="font-bold text-base">Trần Thị B</span>
                  <p className="text-sm">
                    Tôi đã ký đơn thỉnh cầu và chia sẻ với bạn bè của mình. Hy
                    vọng chúng ta có thể tạo ra sự thay đổi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetitionScreen;
