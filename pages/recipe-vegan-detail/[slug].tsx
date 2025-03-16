import { getRecipeDetailBySlug } from '@/apis/posts';
import Layout from '@/components/layout/Layout';
import { RecipeDetailFragment } from '@/lib/gql/graphql';
import RecipeDetailScreen from '@/screens/postDetail/RecipeDetail';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export async function getStaticProps(context: GetStaticPropsContext) {
  const pageSlug = context.params?.slug ?? '';
  const locale = context.locale as Locale;

  const recipeDetail = await getRecipeDetailBySlug({
    locale: locale,
    slug: pageSlug.toString(),
  });
  if (!recipeDetail) {
    return {
      notFound: true,
    };
  }

  return {
    props: { recipeDetail },
  };
}

type Props = {
  recipeDetail: RecipeDetailFragment;
};

const RecipeVeganDetail = ({ recipeDetail }: Props) => {
  return (
    <>
      <Head>
        <title>{recipeDetail.title}</title>
        <meta property="og:title" content={recipeDetail.title || ''} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${recipeDetail.banner?.data?.attributes?.url}`}
        />
      </Head>
      <Layout simpleHeader>
        <RecipeDetailScreen
          title={recipeDetail.title || ''}
          recipeDetail={recipeDetail}
        />
      </Layout>
    </>
  );
};

export default RecipeVeganDetail;
