import { getRecipes, getRecipesByEn } from '@/apis/reviews';
import Layout from '@/components/layout/Layout';
import { MetaPostFragment, RecipeCardFragment } from '@/lib/gql/graphql';
import NewsScreen from '@/screens/news/News';
import RecipeVeganScreen from '@/screens/recipeVegan/RecipeVegan';
import { GetServerSidePropsContext, GetStaticPaths } from 'next';
import VeganFoodBg from '@/assets/images/vegan-food-banner-optimize.jpg';
import Head from 'next/head';
import useTranslations from '@/hooks/useTranslations';

const SlugsByLocale = {
  vi: ['cong-thuc-thuan-chay'],
  en: ['recipe-vegan'],
};

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageSlug = context.params?.slug ?? '';
  const locale = context.locale ?? 'vi';

  if (
    !SlugsByLocale[locale as keyof typeof SlugsByLocale].includes(
      pageSlug as string,
    )
  ) {
    return {
      notFound: true,
    };
  }

  const page =
    typeof context.query.page === 'string' && !isNaN(Number(context.query.page))
      ? Number(context.query.page)
      : 1;

  const recipes =
    locale === 'vi'
      ? await fetchRecipesBySlugVi({ page: page, pageSize: 12 })
      : await fetchRecipesBySlugEn({ page: page, pageSize: 12 });
  return {
    props: { recipes: recipes.recipes, pagination: recipes.meta },
    // revalidate: 60, // 1p
  };
}

type Props = {
  recipes: RecipeCardFragment[];
  pagination: MetaPostFragment;
};

const News = ({ recipes, pagination }: Props) => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{t.recipeVeganTitle}</title>
        <meta property="og:title" content={t.recipeVeganTitle || ''} />
        <meta
          property="og:description"
          content={t.recipeVeganDescription || ''}
        />
        <meta property="og:image" content={VeganFoodBg.src} />
      </Head>
      <Layout
        layoutProps={{
          background: {
            type: 'image',
            src: VeganFoodBg.src,
          },
          headerContent: {
            title: t.recipeVeganTitle,
            subTitle: t.recipeVeganDescription,
          },
        }}
      >
        <RecipeVeganScreen recipes={recipes} pagination={pagination} />
      </Layout>
    </>
  );
};

export default News;
