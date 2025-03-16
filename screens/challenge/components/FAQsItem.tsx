import Image from 'next/image';
import ViewMore from '../../../components/ViewMore';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';
import CircleCounter from '@/components/CircleCounter';
import { SectionFragment } from '@/lib/gql/graphql';

type Props = {
  data: {
    imgSrc: string;
    counter: number;
    title: string;
    content: string;
    questionNote: string;
  };
};

const FAQsItem = ({ data, idx }: { data: SectionFragment; idx: number }) => {
  return (
    <div className="challenge-faqs-item">
      <Image
        width={360}
        height={360}
        alt={data.title}
        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes?.url}`}
        className="faqs-image"
      />
      <div className="faqs-content">
        <CircleCounter counter={idx} />
        <h3 className="text-btn">{data.title}</h3>
        <p className="text-body">{data.description}</p>
        <div className="faqs-content-footer">
          <p className="text-link-2">Câu hỏi {idx}</p>
          <ViewMore link={data.hyperlink} />
        </div>
      </div>
    </div>
  );
};

export default FAQsItem;
