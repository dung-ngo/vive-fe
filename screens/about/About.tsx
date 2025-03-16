import Wave from '@/components/svgAsComponents/Wave';
import EventCard from './components/EventCard';
import SectionTitle from '@/components/SectionTitle';
import ChampaignItem from './components/ChampaignItem';
import { TextWithBanner, TextWithNoBanner } from '@/components/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from '@/assets/svgs/arrow-right.svg';
import { GetVeChungToiQuery } from '@/lib/gql/graphql';
import CircleImage from '@/components/CircleImage';

const AboutScreen = ({ veChungToi }: { veChungToi: GetVeChungToiQuery }) => {
  const { locale } = useRouter();
  const attributes = veChungToi.veChungToi?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-about-screen">
      {attributes.sectionAboutUs && (
        <section className="about-us">
          <div className="container">
            <div className="about-us-content">
              <CircleImage
                width={400}
                height={400}
                alt={attributes.sectionAboutUs.title}
                src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.sectionAboutUs.photo?.data?.attributes?.url}`}
              />
              <article>
                <TextWithBanner
                  text={attributes.sectionAboutUs.title.split('|')[0] || ''}
                />
                <div className="tab-left">
                  <TextWithNoBanner
                    text={attributes.sectionAboutUs.title.split('|')[1] || ''}
                  />
                  <p className="text-body">
                    {attributes.sectionAboutUs.description}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {attributes.sectionImpactOfVegan && (
        <section className="about-champaign">
          <Wave />
          <div className="container">
            <div className="champaign-intro">
              <article>
                <TextWithBanner text={attributes.sectionImpactOfVegan.title} />
                <p className="text-body tab-left">
                  {attributes.sectionImpactOfVegan.description}
                </p>
                <Link href={attributes.sectionImpactOfVegan.hyperlink || '#'}>
                  <div className="text-btn">
                    Tham gia chiến dịch{' '}
                    <Image width={24} height={24} alt="" src={Arrow} />
                  </div>
                </Link>
              </article>
              <CircleImage
                width={400}
                height={400}
                alt=""
                src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.sectionImpactOfVegan.photo?.data?.attributes?.url}`}
              />
            </div>
            {attributes.sectionListImpacts && (
              <div className="champaign-list">
                {attributes.sectionListImpacts.map(
                  (data, index) =>
                    data && <ChampaignItem key={index} data={data} />,
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="about-our-activities">
        <div className="container">
          <SectionTitle title={attributes.titleOurActivities || ''} />
          <div className="activities">
            {attributes.sectionListActivities &&
              attributes.sectionListActivities.map(
                (act, index) => act && <EventCard key={index} data={act} />,
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutScreen;
