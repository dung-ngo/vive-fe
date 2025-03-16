import Link from 'next/link';
import { ReviewCardFragment } from '@/lib/gql/graphql';
import { getHyperLink } from '@/utils/link.util';
import { useRouter } from 'next/router';

const ReviewCard = ({ data }: { data: ReviewCardFragment }) => {
  const { locale } = useRouter();
  return (
    <Link href={getHyperLink(data.slug, 'review', locale)}>
      <div className="vive-listing-card">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.thumbnail?.data?.attributes?.url})`,
          }}
        ></div>
        <div className="content">
          <h3 className="text-subtitle-1">{data.title}</h3>
          <p className="text-body">{data.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
