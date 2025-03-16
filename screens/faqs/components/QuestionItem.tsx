import CircleCounter from '@/components/CircleCounter';
import { SectionFragment } from '@/lib/gql/graphql';

const QuestionItem = ({ data, idx }: { data: SectionFragment; idx: number }) => {
  return (
    <article className="question-item">
      <CircleCounter counter={idx} />
      <div className="question-content">
        <h3 className="text-subtitle-1">{data.title}</h3>
        <p className="text-body">{data.description}</p>
      </div>
    </article>
  );
};

export default QuestionItem;
