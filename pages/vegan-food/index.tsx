import {
  getRecipes,
  getRecipesByEn,
  getReviews,
  getReviewsByEn,
} from '@/apis/reviews';
import Layout from '@/components/layout/Layout';
import {
  GetListRecipesQuery,
  RecipeCardFragment,
  ReviewCardFragment,
} from '@/lib/gql/graphql';
import VeganFoodScreen from '@/screens/veganFood/VeganFood';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import VeganFoodBg from '@/assets/images/vegan-food-banner-optimize.jpg';
import useTranslations from '@/hooks/useTranslations';
import { Locale } from 'next/router';

async function fetchReviewsBySlugVi({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) {
  const reviews = await getReviews({
    locale: 'vi',
    page,
    pageSize,
  });
  return {
    reviews:
      (reviews.data.reviews?.data.map(
        (item) => item.attributes,
      ) as ReviewCardFragment[]) || [],
    meta: reviews.data.reviews?.meta,
  };
}

async function fetchReviewsBySlugEn({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) {
  const reviews = await getReviewsByEn({
    page,
    pageSize,
  });

  const mappedReviews = (reviews.data.reviews?.data || []).map(
    (item) => item.attributes?.localizations?.data?.[0]?.attributes,
  ) as ReviewCardFragment[];

  const filteredReviews = mappedReviews.filter((attributes) => !!attributes);

  return {
    reviews: filteredReviews,
    meta: reviews.data.reviews?.meta,
  };
}

async function fetchRecipesBySlugVi({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) {
  const recipes = await getRecipes({ locale: 'vi', page, pageSize });
  return {
    recipes:
      (recipes.data.recipes?.data.map(
        (item) => item.attributes,
      ) as RecipeCardFragment[]) || [],
    meta: recipes.data.recipes?.meta,
  };
}

async function fetchRecipesBySlugEn({
  pageSize,
  page,
}: {
  pageSize: number;
  page: number;
}) {
  const recipes = await getRecipesByEn({ page, pageSize });

  const mappedRecipes = (recipes.data.recipes?.data || []).map(
    (item) => item.attributes?.localizations?.data?.[0]?.attributes,
  ) as RecipeCardFragment[];

  const filteredRecipes = mappedRecipes.filter((attributes) => !!attributes);

  return {
    recipes: filteredRecipes,
    meta: recipes.data.recipes?.meta,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  const responses =
    locale === 'vi'
      ? await Promise.all([
          fetchReviewsBySlugVi({ page: 1, pageSize: 2 }),
          fetchRecipesBySlugVi({ page: 1, pageSize: 3 }),
        ])
      : await Promise.all([
          fetchReviewsBySlugEn({ page: 1, pageSize: 2 }),
          fetchRecipesBySlugEn({ page: 1, pageSize: 3 }),
        ]);

  return {
    props: {
      reviews: (responses[0].reviews as ReviewCardFragment[]) || [],
      recipes: (responses[1].recipes as RecipeCardFragment[]) || [],
    },
  };
}

const Cooking = ({
  reviews,
  recipes,
}: {
  reviews: ReviewCardFragment[];
  recipes: RecipeCardFragment[];
}) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t.gocBep}</title>
        <meta property="og:title" content={t.gocBep} />
        <meta property="og:description" content={t.thuanChayTheory} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${VeganFoodBg.src}`}
        />
      </Head>
      <Layout
        layoutProps={{
          background: {
            type: 'image',
            src: VeganFoodBg.src,
          },
          headerContent: {
            title: t.gocBep,
            subTitle: t.thuanChayTheory,
          },
        }}
      >
        <VeganFoodScreen reviews={reviews} recipes={recipes} />
      </Layout>
    </>
  );
};

export default Cooking;
