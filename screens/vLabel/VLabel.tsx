/* eslint-disable @next/next/no-img-element */
import Bg from '@/assets/images/bg-support-vive.jpeg';
import MarkdownContent from '@/components/MarkdownContent';
import PrimaryButton from '@/components/PrimaryButton';
import { GetVLabelQuery } from '@/lib/gql/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const VLabelScreen = ({ vLabel }: { vLabel: GetVLabelQuery }) => {
  const attributes = vLabel.vLabel?.data?.attributes;
  const router = useRouter();
  return (
    <div className="vive-support-screen">
      <section className="support-hero">
        <div className="container">
          <div className="hero-content-container">
            <h1 className="header-content-title text-title-1">
              {attributes?.contentTitle1}
            </h1>
            <img
              alt="v label"
              src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes?.contentImage1?.data?.attributes?.url}`}
              width="100%"
            />
            <MarkdownContent content={attributes?.content || ''} />
          </div>
        </div>
      </section>
      <section className="vive-brands">
        <div className="container">
          <h2 className="header-content-title text-title-1">
            {attributes?.titleListLogos}
          </h2>
          <div className="box-list-brands">
            {attributes?.listLogos?.map((logo, idx) => {
              return (
                <div
                  className="brand-item"
                  key={idx}
                  onClick={() => router.push(logo?.hyperlink || '#')}
                >
                  <img
                    alt={logo?.brandName || 'brand'}
                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${logo?.logo?.data?.attributes?.url}`}
                    width="100%"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="box-button-link">
        <Link href={attributes?.hyperlink || ''} target="_blank">
          <PrimaryButton>{attributes?.txtButton}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default VLabelScreen;
