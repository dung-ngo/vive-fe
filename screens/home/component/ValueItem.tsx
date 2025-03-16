import { SectionFragment, SectionFragmentDoc } from '@/lib/gql/graphql';
import Image from 'next/image';

const ValueItem = ({ data }: { data: SectionFragment }) => {
  return (
    <article className="home-value-item">
      <div className="value-icon">
        {data.photo?.data?.attributes?.url && (
          <Image
            width={64}
            height={64}
            alt=""
            src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes.url}`}
          />
        )}
      </div>
      <h3 className="text-btn">{data.title}</h3>
      <p className="text-link-2">{data.description}</p>
    </article>
  );
};

export default ValueItem;
