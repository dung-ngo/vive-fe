import { TextLink } from '@/components/Typography';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';
import ListingTitle from '../../components/ListingTitle';
import {
  GetListRecipesQuery,
  GetListReviewsQuery,
  MetaPostFragment,
  RecipeCardFragment,
  ReviewCardFragment,
} from '@/lib/gql/graphql';
import ReviewCard from '@/components/cards/ReviewCard';
import RecipeCard from '@/components/cards/RecipeCard';
import useTranslations from '@/hooks/useTranslations';

const VeganFoodScreen = ({
  reviews,
  recipes,
}: {
  reviews: ReviewCardFragment[];
  recipes: RecipeCardFragment[];
}) => {
  const { locale } = useRouter();

  const t = useTranslations();
  return (
    <div className="vive-food-screen">
      <div className="container">
        <section className="food-feature">
          <ListingTitle text="Review" />
          <div className="card-list">
            {reviews &&
              reviews.map(
                (item, index) => item && <ReviewCard key={index} data={item} />,
              )}
          </div>
          <div className="view-more">
            <TextLink
              link={direct('review-restaurant', locale)}
              text={t.seeMore}
              textClassName="text-link-2"
            />
          </div>
        </section>
        <section className="food-listing">
          <ListingTitle text={t.recipes} />
          <div className="card-list">
            {recipes.map(
              (item, index) => item && <RecipeCard key={index} recipe={item} />,
            )}
          </div>
          <div className="view-more">
            <TextLink
              link={direct('recipe-vegan', locale)}
              text={t.seeMore}
              textClassName="text-link-2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default VeganFoodScreen;
