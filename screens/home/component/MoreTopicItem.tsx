import ViewMore from '@/components/ViewMore';
import { SectionFragment } from '@/lib/gql/graphql';
import Image from 'next/image';

const MoreTopicItem = ({ data }: { data: SectionFragment }) => {
  return (
    <article className="home-more-topic-item">
      {data.photo?.data?.attributes?.url && (
        <Image
          width={300}
          height={300}
          alt={data.title}
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes.url}`}
          className="thumbnail"
        />
      )}
      <p>{data.title}</p>
      <p className="desc">{data.description}</p>
      <ViewMore link={data.hyperlink || '#'} />
    </article>
  );
};

export default MoreTopicItem;
