'use client';

import { useState, useEffect } from 'react';
import useTranslations from '@/hooks/useTranslations';
import YouTube from 'react-youtube';
import ProgressBar from '@/components/ProgressBar';
import Image from 'next/image';
import { GetPetitionQuery } from '@/lib/gql/graphql';

const PetitionScreen = ({ petition }: { petition: GetPetitionQuery }) => {
  // const videoId = 'bS9eXS6VucU';
  const attributes = petition.petition?.data?.attributes;
  const t = useTranslations();
  const [signatureCount, setSignatureCount] = useState<number>(0);
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const progressPercentage = (signatureCount * 100) / targetNumber;

  useEffect(() => {
    (async () => {
      if (!attributes?.sheetId) {
        console.log('Not found sheetId');
        return;
      }
      try {
        const res = await fetch(
          `/api/google-sheets?sheetId=${attributes.sheetId}`,
        );
        const data = await res.json();
        console.log('data: ', data);
        setSignatureCount((prev) => prev + data?.length || prev);
      } catch (error) {
        console.error('Calling API error:', error);
      }
    })();
    const targetNumber = targetNumberHandler(petition);
    setTargetNumber(targetNumber);
  }, []);

  const targetNumberHandler = (petition: GetPetitionQuery) => {
    const targetNumber = petition.petition?.data?.attributes?.targetNumber;
    if (targetNumber) {
      return targetNumber;
    } else {
      const maxTarget = 3000;
      const step = 500;

      if (signatureCount < 500) return 500;

      const adjustedCount =
        signatureCount % step === 0 ? signatureCount + 1 : signatureCount;
      const target = Math.ceil(adjustedCount / step) * step;

      return Math.min(target, maxTarget);
    }
  };

  return (
    <div className="vive-petition-screen">
      <div className="container">
        <section className="petition-form-container">
          <div className="petition-gg-form">
            <div className="signature-count text-center">
              <div className="text-body">
                <div className="my-5">
                  <ProgressBar percentage={progressPercentage} />
                </div>
                <span className="font-bold">
                  {signatureCount} {t.petition.targetContent1}
                </span>{' '}
                {t.petition.targetContent2} {targetNumber}{' '}
                {t.petition.targetContent3}
              </div>
            </div>
            <div className="gg-iframe">
              <iframe
                src={`https://docs.google.com/forms/d/e/${attributes?.formId}/viewform?embedded=true`}
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
              {attributes?.listComments?.map((comment, index) => (
                <div key={index} className="flex gap-3 mb-5">
                  {comment && comment.userImage && (
                    <Image
                      width={50}
                      height={50}
                      src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${comment?.userImage.data?.attributes?.url}`}
                      alt={comment?.userName || 'comment'}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div className="comment-box bg-gray-200">
                    <span className="font-bold text-base">
                      {comment?.userName}
                    </span>
                    <p className="text-sm">{comment?.userComment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="petition-content-container">
            <h1>{attributes?.titleCampaign1}</h1>
            <div className="petition-content-1">
              <p className="mb-8">{attributes?.descriptionCampaign1}</p>
            </div>
            <div className="petition-video">
              <YouTube
                className="youtube-video"
                videoId={attributes?.videoId || ''}
              />
            </div>
            <div className="petition-content-2">
              <h2>{attributes?.titleCampaign2}</h2>
              <div className="mb-8">
                {attributes?.descriptionCampaign2
                  ?.split('|')
                  .map((part: string, index: number) =>
                    index === 1 ? <strong key={index}>{part}</strong> : part,
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetitionScreen;
