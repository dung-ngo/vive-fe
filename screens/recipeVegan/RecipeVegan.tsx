import { useRouter } from 'next/router';
import ListingTitle from '../../components/ListingTitle';
import { Pagination } from '@mui/material';
import { MetaPostFragment, RecipeCardFragment } from '@/lib/gql/graphql';
import RecipeCard from '@/components/cards/RecipeCard';
import { usePathname } from 'next/navigation';
import useTranslations from '@/hooks/useTranslations';

type Props = {
  recipes: RecipeCardFragment[];
  pagination: MetaPostFragment;
};

const RecipeVeganScreen = ({ recipes, pagination }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations();
  return (
    <div className="vive-food-screen">
      <div className="container">
        <section className="food-listing">
          <ListingTitle text={t.recipes} />
          <div className="card-list">
            {recipes.map(
              (item, index) => item && <RecipeCard key={index} recipe={item} />,
            )}
          </div>
          <div className="pagination">
            <Pagination
              page={pagination?.pagination?.page}
              count={pagination?.pagination?.pageCount}
              size="large"
              onChange={(_, page) => router.push(`${path}/?page=${page}`)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeVeganScreen;
