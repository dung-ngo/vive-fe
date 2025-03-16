import Image from 'next/image';
import Hashtag from './Hashtag';
import Link from 'next/link';
import { PostCardFragment } from '@/lib/gql/graphql';
import { getHyperLink } from '@/utils/link.util';
import { useRouter } from 'next/router';

export type TListingData = {
  title: string;
  link: string;
  tags: string[];
};

type Props = {
  data: PostCardFragment;
};

const SimpleCard = ({ data }: Props) => {
  const { locale } = useRouter();
  return (
    <Link
      href={getHyperLink(
        `${data.category?.data?.attributes?.slug}/${data.slug}`,
        'news',
        locale,
      )}
    >
      <div className="vive-simple-card">
        <div className="tags">
          {data.tags &&
            data.tags.map((tag: { name: string }, index: number) => (
              <Hashtag key={index} content={tag.name} small />
            ))}
        </div>
        <h3 className="text-subtitle-2">{data.title}</h3>
      </div>
    </Link>
  );
};

export default SimpleCard;
