import Image from 'next/image';
import Globe from '@/assets/svgs/globe.svg';
import { SectionFragment } from '@/lib/gql/graphql';

const ChampaignItem = ({ data }: { data: SectionFragment }) => {
  return (
    <article className="about-champaign-item">
      {data.photo?.data?.attributes?.url && (
        <Image
          width={64}
          height={64}
          alt=""
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes?.url}`}
        />
      )}

      <h2 className="text-title-2">{data.title}</h2>
      <div className="box-content">
        <h4 className="text-subtitle-2">{data.description}</h4>
      </div>
    </article>
  );
};

export default ChampaignItem;
