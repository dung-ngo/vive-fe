/* eslint-disable @next/next/no-img-element */
import Wave from '@/components/svgAsComponents/Wave';
import EventCard from '@/screens/about/components/EventCard';
import SectionTitle from '@/components/SectionTitle';
import ChampaignItem from '@/screens/about/components/ChampaignItem';
import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from '@/assets/svgs/arrow-right.svg';
import { GetAnChoTuongLaiQuery, GetVolunteerQuery } from '@/lib/gql/graphql';
import CircleImage from '@/components/CircleImage';
import PrimaryButton from '@/components/PrimaryButton';
import Faq from 'react-faq-component';

const VolunteerScreen = ({ volunteer }: { volunteer: GetVolunteerQuery }) => {
  const router = useRouter();
  const attributes = volunteer.volunteer?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-volunteer-screen">
      {attributes.sectionListHelpUs && (
        <section className="about-champaign">
          <div className="container">
            <h1 className="header-content-title text-title-1">
              {attributes.titleHelpUs}
            </h1>
            {attributes.sectionListHelpUs && (
              <div className="champaign-list">
                {attributes.sectionListHelpUs.map(
                  (data, index) =>
                    data && <ChampaignItem key={index} data={data} />,
                )}
              </div>
            )}
          </div>
        </section>
      )}
      <section className="vive-brands">
        <div className="container">
          <div className="box-list-brands">
            {attributes?.listVolunteerImages?.map((logo, idx) => {
              return (
                <div
                  className="brand-item"
                  key={idx}
                  onClick={() => router.push(logo?.hyperlink || '#')}
                >
                  <img
                    alt={logo?.image.data?.attributes?.caption || 'brand'}
                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${logo?.image?.data?.attributes?.url}`}
                    width="100%"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {attributes.sectionListHelpUs && (
        <section className="about-champaign volunteer-perks bg-green">
          <div className="container">
            <h1 className="header-content-title text-title-1">
              {attributes.titleVolunteerPerks}
            </h1>
            {attributes.sectionVolunteerPerks && (
              <div className="champaign-list">
                {attributes.sectionVolunteerPerks.map(
                  (data, index) =>
                    data && <ChampaignItem key={index} data={data} />,
                )}
              </div>
            )}
          </div>
        </section>
      )}
      <section className="apply-volunteer">
        <div className="container">
          <h1 className="header-content-title text-title-1">
            {attributes.titleApplyToVolunteer}
          </h1>
          <p className="apply-description">
            {attributes.descriptionApplyToVolunteer}
          </p>
          <div className="box-apply-button">
            <a target="_blank" href={attributes.linkApplyToVolunteer || '#'}>
              <PrimaryButton>
                {attributes.textButtonApplyToVolunteer}
              </PrimaryButton>
            </a>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <h1 className="header-content-title text-title-1">
            {attributes.titleFaq}
          </h1>
          <div className="box-faq">
            <Faq
              data={{
                rows: attributes.listFaqs?.map((item) => ({
                  title: item?.question,
                  content: item?.answer,
                })),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerScreen;
