import { GetNhungCauHoiThuongGapQuery, GetThuThachThuanChayQuery } from '@/lib/gql/graphql';
import QuestionItem from './components/QuestionItem';

const FAQsScreen = ({ nhungCauHoiThuongGap }: { nhungCauHoiThuongGap: GetNhungCauHoiThuongGapQuery }) => {
  const attributes = nhungCauHoiThuongGap.nhungCauHoiThuongGap?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <div className="vive-faqs-screen">
      <div className="container">
        <h1 className="text-title-1 primary">{attributes.titleFaqs}</h1>
        <h1 className="text-title-1">{attributes.title7VeganChallenge}</h1>
        <section className="faqs-list">
          {attributes.sectionListFaqs &&
            attributes.sectionListFaqs.map(
              (data, index) => data && <QuestionItem key={index} data={data} idx={index + 1} />,
            )}
        </section>
      </div>
    </div>
  );
};

export default FAQsScreen;
