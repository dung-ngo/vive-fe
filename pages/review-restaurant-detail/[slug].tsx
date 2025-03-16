import { getReviewDetailBySlug } from '@/apis/posts';
import Layout from '@/components/layout/Layout';
import { ReviewDetailFragment } from '@/lib/gql/graphql';
import ReviewDetailScreen from '@/screens/postDetail/ReviewDetail';
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
  const reviewDetail = await getReviewDetailBySlug({
    locale: locale,
    slug: pageSlug.toString(),
  });
  if (!reviewDetail) {
    return {
      notFound: true,
    };
  }
  return {
    props: { reviewDetail },
  };
}

type Props = {
  reviewDetail: ReviewDetailFragment;
};

const RecipeVeganDetail = ({ reviewDetail }: Props) => {
  return (
    <>
      <Head>
        <title>{reviewDetail.title}</title>
        <meta property="og:title" content={reviewDetail.title || ''} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${reviewDetail.banner?.data?.attributes?.url}`}
        />
      </Head>
      <Layout simpleHeader>
        <ReviewDetailScreen reviewDetail={reviewDetail} />
      </Layout>
    </>
  );
};

export default RecipeVeganDetail;
