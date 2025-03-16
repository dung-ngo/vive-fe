import ListingTitle from '@/components/ListingTitle';
import { TextLink } from '@/components/Typography';
import ListingCard from '@/components/cards/ListingCard';
import SimpleCard from '@/components/cards/SimpleCard';
import useTranslations from '@/hooks/useTranslations';
import { PostCardFragment } from '@/lib/gql/graphql';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';

const NewsScreen = ({
  latestNews,
  environmentNews,
  animalNews,
  healthNews,
}: {
  latestNews: PostCardFragment[];
  environmentNews: PostCardFragment[];
  animalNews: PostCardFragment[];
  healthNews: PostCardFragment[];
}) => {
  const { locale } = useRouter();

  const t = useTranslations();
  return (
    <div className="vive-news-screen">
      <div className="container">
        <section className="news-feature">
          <ListingTitle text={t.latestNews} />
          <div className="feature-list">
            <div className="feature-card">
              {latestNews[0] && <ListingCard data={latestNews[0]} />}
            </div>
            <div className="simple-card-list">
              {latestNews
                .slice(1, 4)
                .map(
                  (item, index) =>
                    item && <SimpleCard key={index} data={item} />,
                )}
            </div>
          </div>
          <div className="card-list">
            {latestNews
              .slice(4, 7)
              .map(
                (item, index) =>
                  item && (
                    <ListingCard key={index} data={item} descriptionHidden />
                  ),
              )}
          </div>
        </section>
        <section className="news-environment">
          <ListingTitle text={t.environment} />
          <div className="card-list">
            {environmentNews.map(
              (item, index) =>
                item && (
                  <ListingCard key={index} data={item} descriptionHidden />
                ),
            )}
          </div>
          <div className="view-more">
            <TextLink
              link={direct('news+environment', locale)}
              text={t.seeMore}
              textClassName="text-link-2"
            />
          </div>
        </section>
        <section className="news-animals">
          <ListingTitle text={t.animal} />
          <div className="card-list">
            {animalNews.map(
              (item, index) =>
                item && (
                  <ListingCard key={index} data={item} descriptionHidden />
                ),
            )}
          </div>
          <div className="view-more">
            <TextLink
              link={direct('news+animals', locale)}
              text={t.seeMore}
              textClassName="text-link-2"
            />
          </div>
        </section>
        <section className="news-health">
          <ListingTitle text={t.health} />
          <div className="card-list">
            {healthNews.map(
              (item, index) =>
                item && (
                  <ListingCard key={index} data={item} descriptionHidden />
                ),
            )}
          </div>
          <div className="view-more">
            <TextLink
              link={direct('news+health', locale)}
              text={t.seeMore}
              textClassName="text-link-2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsScreen;
