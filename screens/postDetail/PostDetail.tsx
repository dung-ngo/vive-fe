/* eslint-disable @next/next/no-img-element */
import Breadcrumb from '@/components/Breadcrumb';
import MarkdownContent from '@/components/MarkdownContent';
import { TBreadcrumbItem } from '@/typescript/types';
import ShareViaFacebook from './components/ShareViaFacebook';
import { PostDetailFragment } from '@/lib/gql/graphql';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  breadcrumb: TBreadcrumbItem[];
  postDetail: PostDetailFragment;
};

const PostDetailScreen = ({ breadcrumb, postDetail }: Props) => {
  return (
    postDetail && (
      <div className="vive-detail-screen">
        <img
          width="100%"
          height={450}
          alt="thumbnail"
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${postDetail.banner?.data?.attributes?.url}`}
        />
        <div className="container">
          <Breadcrumb items={breadcrumb} />
          <div className="content-container">
            <h1 className="text-title-1">{postDetail.title}</h1>
            <AuthorAndShare
              author={postDetail.author || ''}
              minuteRead={postDetail.minuteRead}
            />
            <MarkdownContent
              content={
                postDetail.content?.replaceAll(
                  'https://api.vive.org.vn',
                  process.env.NEXT_PUBLIC_EDITOR_UPLOAD_URL ||
                    'https://api.vive.org.vn',
                ) || ''
              }
            />
            <AuthorAndShare
              author={postDetail.author || ''}
              minuteRead={postDetail.minuteRead}
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

export default PostDetailScreen;
