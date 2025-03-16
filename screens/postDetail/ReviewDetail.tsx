/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '@/components/Breadcrumb';
import MarkdownContent from '@/components/MarkdownContent';
import ShareViaFacebook from './components/ShareViaFacebook';
import { ReviewDetailFragment } from '@/lib/gql/graphql';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  reviewDetail: ReviewDetailFragment;
};

const ReviewDetailScreen = ({ reviewDetail }: Props) => {
  const t = useTranslations();
  const breadcrumb = [
    { text: t.gocBep },
    { text: 'Review' },
    { text: reviewDetail.title || '' },
  ];
  return (
    reviewDetail && (
      <div className="vive-detail-screen">
        <img
          width="100%"
          height={450}
          alt="thumbnail"
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${reviewDetail.banner?.data?.attributes?.url}`}
        />
        <div className="container">
          <Breadcrumb items={breadcrumb} />
          <div className="content-container">
            <h1 className="text-title-1">{reviewDetail.title}</h1>
            <AuthorAndShare
              author={reviewDetail.author || ''}
              minuteRead={reviewDetail.minuteRead}
            />
            <MarkdownContent
              content={
                reviewDetail.content?.replaceAll(
                  'https://api.vive.org.vn',
                  process.env.NEXT_PUBLIC_EDITOR_UPLOAD_URL ||
                    'https://api.vive.org.vn',
                ) || ''
              }
            />
            <AuthorAndShare
              author={reviewDetail.author || ''}
              minuteRead={reviewDetail.minuteRead}
            />
          </div>
        </div>
      </div>
    )
  );
};

const AuthorAndShare = ({
  author,
  minuteRead,
}: {
  author: string;
  minuteRead: number;
}) => {
  const t = useTranslations();
  return (
    <div className="author">
      <p className="text-body-small">
        {t.vietBoi} {author} - {minuteRead} {t.phutDoc}
      </p>
      <div className="share text-body-small">
        {t.chiaSe} <ShareViaFacebook />
      </div>
    </div>
  );
};

export default ReviewDetailScreen;
