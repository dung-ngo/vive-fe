import Link from 'next/link';
import Hashtag from './Hashtag';
import Image from 'next/image';
import Clock from '@/assets/svgs/clock.svg';
import { PostCardFragment, ReviewCardFragment } from '@/lib/gql/graphql';
import { getHyperLink } from '@/utils/link.util';
import { useRouter } from 'next/router';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  data: PostCardFragment;
  hashtagHidden?: boolean;
  timeHidden?: boolean;
  descriptionHidden?: boolean;
};

const ListingCard = ({
  data,
  hashtagHidden,
  timeHidden,
  descriptionHidden,
}: Props) => {
  const { locale } = useRouter();
  const t = useTranslations();
  return (
    <Link
      href={getHyperLink(
        `${data.category?.data?.attributes?.slug}/${data.slug}`,
        'news',
        locale,
      )}
    >
      <div className="vive-listing-card">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOAD_URL}${data.thumbnail?.data?.attributes?.url})`,
          }}
        >
          {!hashtagHidden &&
            data.tags &&
            data.tags.map((tag: { name: string }, index: number) => (
              <Hashtag key={index} content={tag.name} />
            ))}
        </div>
        <div className="content">
          <h3 className="text-subtitle-1">{data.title}</h3>
          {data.shortDescription && !descriptionHidden ? (
            <p className="text-body">{data.shortDescription}</p>
          ) : null}
          <div className="icon-list">
            {data.minuteRead && !timeHidden ? (
              <div className="time-icon">
                <Image height={24} width={24} alt="Reading time" src={Clock} />
                <div className="text-link-2">
                  {data.minuteRead} {t.minutes}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
