import Img1 from '@/assets/images/section-home-1.webp';
import Img2 from '@/assets/images/section-home-2.webp';
import Image from 'next/image';
import {
  TextLink,
  TextWithBanner,
  TextWithNoBanner,
} from '@/components/Typography';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';
import ValueItem from './component/ValueItem';
import PrimaryButton from '@/components/PrimaryButton';
import MoreTopicItem from './component/MoreTopicItem';
import SectionTitle from '@/components/SectionTitle';
import WaveBackground from '@/components/WaveBackground';
import { GetHomePageQuery } from '@/lib/gql/graphql';
import Link from 'next/link';
import useTranslations from '@/hooks/useTranslations';

const HomeScreen = ({ homePage }: { homePage: GetHomePageQuery }) => {
  const t = useTranslations();
  const { locale } = useRouter();
  const attributes = homePage.homePage?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-home-page">
      <section className="home-why-you-need-vegan">
        <div className="container">
          {attributes.sectionWhyNeedVegan?.photo?.data?.attributes?.url && (
            <Image
              width={420}
              height={662}
              alt=""
              src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.sectionWhyNeedVegan?.photo?.data?.attributes?.url}`}
            />
          )}
          <article>
            <TextWithBanner
              text={
                attributes.sectionWhyNeedVegan?.title.split('|')[0]?.trim() ||
                ''
              }
            />
            <div className="tab-left">
              <TextWithNoBanner
                text={
                  attributes.sectionWhyNeedVegan?.title.split('|')[1]?.trim() ||
                  ''
                }
              />
              <p>{attributes.sectionWhyNeedVegan?.description}</p>
            </div>
            <div className="align-right">
              <TextLink link={direct('vegan-info', locale)} text={t.seeMore} />
            </div>
          </article>
        </div>
      </section>
      <section className="home-what-we-do">
        <div className="container">
          <article>
            <TextWithNoBanner
              text={
                attributes.sectionWhatWeDone?.title.split('|')[0]?.trim() || ''
              }
            />
            <div className="tab-left">
              <TextWithBanner
                text={
                  attributes.sectionWhatWeDone?.title.split('|')[1]?.trim() ||
                  ''
                }
              />
              <p>{attributes.sectionWhatWeDone?.description}</p>
            </div>
          </article>
          <Image width={420} height={420} alt="" src={Img2} />
        </div>
      </section>
      <section className="home-evaluate-vegan">
        <div className="container">
          <div className="align-center">
            <TextWithBanner
              text={attributes.titleValuesOfVegan?.split('|')[0]?.trim() || ''}
            />
            <TextWithNoBanner
              text={attributes.titleValuesOfVegan?.split('|')[1]?.trim() || ''}
            />
          </div>
          <div className="grid-values">
            {attributes.sectionListValuesOfVegan &&
              attributes.sectionListValuesOfVegan.map(
                (value, index) =>
                  value && <ValueItem data={value} key={index} />,
              )}
          </div>
          <div className="align-center">
            <Link href={attributes.hyperlinkSeeMoreValuesOfVegan || '#'}>
              <PrimaryButton>{t.seeMore}</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-more-topics">
        <div className="container">
          <SectionTitle title={attributes.titleMoreTopics || ''} />
          <div className="topic-list">
            {attributes.sectionListMoreTopics &&
              attributes.sectionListMoreTopics.map(
                (topic, index) =>
                  topic && <MoreTopicItem key={index} data={topic} />,
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
