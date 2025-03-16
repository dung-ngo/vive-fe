import { SectionFragment } from '@/lib/gql/graphql';

const WayToJoinItem = ({ data, idx }: { data: SectionFragment; idx: number }) => {
  return (
    <article className="challenge-join-item">
      <div
        className="step-image"
        style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes?.url})` }}
      >
        {idx}
      </div>
      <p className="text-subtitle-1">{data.title}</p>
    </article>
  );
};

export default WayToJoinItem;
