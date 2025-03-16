import { SearchPostFragment } from '@/lib/gql/graphql';
import { getHyperLink } from '@/utils/link.util';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  data: {
    imgSrc: string;
    title: string;
    link: string;
  };
};

const SearchSuggestCard = ({ data }: { data: SearchPostFragment }) => {
  const { locale } = useRouter();
  return (
    <Link
      href={getHyperLink(
        `${data.category?.data?.attributes?.slug}/${data.slug}`,
        'news',
        locale,
      )}
    >
      <div className="vive-card-search-suggest">
        <Image
          width={50}
          height={50}
          alt={data.title || ''}
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.thumbnail?.data?.attributes?.url}`}
        />
        <div className="text-body-small truncate-1">{data.title}</div>
      </div>
    </Link>
  );
};

export default SearchSuggestCard;
