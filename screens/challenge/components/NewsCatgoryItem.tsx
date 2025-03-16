import { TextWithBanner } from '@/components/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DirectKeys, direct } from '@/utils/link.util';
import ViewMore from '@/components/ViewMore';
import { SectionFragment } from '@/lib/gql/graphql';

const NewsCatgoryItem = ({ data }: { data: SectionFragment }) => {
  return (
    <article className="challenge-news-category-item">
      <Image
        width={300}
        height={300}
        alt={data.title}
        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.photo?.data?.attributes?.url}`}
        className="news-category-image"
      />
      <TextWithBanner text={data.title} textClassName="text-subtitle-1" />
      <p className="text-link-2">{data.description}</p>
      <ViewMore link={data.hyperlink || '#'} />
    </article>
  );
};

export default NewsCatgoryItem;
