import Wave from '@/components/svgAsComponents/Wave';
import NewsCatgoryItem from './components/NewsCatgoryItem';
import WayToJoinItem from './components/WayToJoinItem';
import HealthCoachItem from './components/HealthCoachItem';
import ConsultantItem from './components/ConsultantItem';
import FeedbackCarousel from './components/FeedbackCarousel';
import FAQsItem from './components/FAQsItem';
import Image from 'next/image';
import { GetThuThachThuanChayQuery, PersonFragment } from '@/lib/gql/graphql';

const ChallengeScreen = ({
  thuThachThuanChay,
}: {
  thuThachThuanChay: GetThuThachThuanChayQuery;
}) => {
  const attributes = thuThachThuanChay.thuThachThuanChay?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-challenge-screen">
      <section className="challenge-news-categories">
        <div className="container">
          <div className="challenge-newscate-list">
            {attributes.sectionListBenefitsFromVegan &&
              attributes.sectionListBenefitsFromVegan.map(
                (benefit, index) =>
                  benefit && <NewsCatgoryItem key={index} data={benefit} />,
              )}
          </div>
        </div>
      </section>
      <section className="challenge-way-to-join">
        <div className="container">
          <h2 className="text-title-2">
            {attributes.titleWaysToJoinChallenge}
          </h2>
          <div className="challenge-join-list">
            {attributes.sectionListWaysToJoinChallenge &&
              attributes.sectionListWaysToJoinChallenge.map(
                (data, index) =>
                  data && (
                    <WayToJoinItem key={index} idx={index + 1} data={data} />
                  ),
              )}
          </div>
        </div>
      </section>
      <section className="challenge-health-coach">
        <Wave />
        <div className="container">
          <h2 className="text-title-2">
            {attributes.titleNutritionHealthCoaches}
          </h2>
          <div className="heath-coach-list">
            {attributes.sectionListNHCoaches &&
              attributes.sectionListNHCoaches[0] && (
                <HealthCoachItem
                  personInfo={attributes.sectionListNHCoaches[0]}
                />
              )}

            <div>
              {attributes.sectionListNHCoaches &&
                attributes.sectionListNHCoaches
                  .slice(1)
                  .map(
                    (data, index) =>
                      data && (
                        <HealthCoachItem
                          personInfo={data}
                          key={index}
                          smallAvatar
                        />
                      ),
                  )}
            </div>
          </div>
        </div>
      </section>
      <section className="challenge-consultants">
        <div className="container">
          <h2 className="text-title-2">{attributes.titleOurConsultants}</h2>
          <div className="consultants-list">
            {attributes.sectionListConsultants &&
              attributes.sectionListConsultants.map(
                (data, index) =>
                  data && <ConsultantItem personInfo={data} key={index} />,
              )}
          </div>
        </div>
        {attributes.sectionListReviews && (
          <FeedbackCarousel
            listReviews={attributes.sectionListReviews as PersonFragment[]}
          />
        )}
      </section>
      <section className="challenge-faqs">
        <div className="container">
          <h2 className="text-title-2">{attributes.titleListQuestions}</h2>
          <div className="faqs-list">
            {attributes.sectionListQuestions &&
              attributes.sectionListQuestions.map(
                (data, index) =>
                  data && <FAQsItem data={data} key={index} idx={index + 1} />,
              )}
          </div>
          <div className="faqs-extend">
            <h2 className="text-title-2">{attributes.titlePartners}</h2>
            <div className="partner-list">
              {attributes.sectionListPartners &&
                attributes.sectionListPartners.map(
                  (data, idx) =>
                    data && (
                      <Image
                        key={idx}
                        className="partner-item"
                        width={120}
                        height={100}
                        alt={data.name || ''}
                        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.logo?.data?.attributes?.url}`}
                      />
                    ),
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengeScreen;
