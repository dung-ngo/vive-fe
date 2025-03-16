import { getReviews, getReviewsByEn } from '@/apis/reviews';
import Layout from '@/components/layout/Layout';
import useTranslations from '@/hooks/useTranslations';
import {
  GetListReviewsQuery,
  MetaPostFragment,
  ReviewCardFragment,
} from '@/lib/gql/graphql';
import ReviewRestaurantScreen from '@/screens/reviewRestaurant/ReviewRestaurant';
import { TBreadcrumbItem } from '@/typescript/types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';
import VeganFoodBg from '@/assets/images/vegan-food-banner-optimize.jpg';

const SlugsByLocale: { [key: string]: string } = {
  vi: 'review-quan-an',
  en: 'review-restaurant',
};

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageSlug = context.params?.slug ?? '';
  const locale = context.locale as Locale;
  if (context.query) {
  }
  const query = context.query;

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

  const reviews =
    locale === 'vi'
      ? await fetchReviewsBySlugVi({ page: page, pageSize: 12 })
      : await fetchReviewsBySlugEn({ page: page, pageSize: 12 });

  return {
    props: {
      info: info[SlugsByLocale[locale] as keyof typeof info],
      reviews: reviews.reviews,
      meta: reviews.meta,
    },
    // revalidate: 60, // 1p
  };
}

type Props = {
  info: {
    title: string;
    breadcrumb: TBreadcrumbItem[];
  };
  reviews: ReviewCardFragment[];
  pagination: MetaPostFragment;
};

export default function PostDetail({ info, reviews, pagination }: Props) {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{t.reviewRestaurantTitle}</title>
        <meta property="og:title" content={t.reviewRestaurantTitle || ''} />
        <meta
          property="og:description"
          content={t.reviewRestaurantDescription || ''}
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
            title: t.reviewRestaurantTitle,
            subTitle: t.reviewRestaurantDescription,
          },
        }}
      >
        <ReviewRestaurantScreen
          title={info.title}
          breadcrumb={info.breadcrumb}
          reviews={reviews}
          pagination={pagination}
        />
      </Layout>
    </>
  );
}

const info = {
  'review-quan-an': {
    title: 'Review quán ăn',
    breadcrumb: [{ text: 'Ẩm thực thuần chay' }, { text: 'Review quán ăn' }],
  },
  'review-restaurant': {
    title: 'Review Restaurant',
    breadcrumb: [{ text: 'Our Kitchen' }, { text: 'Review Restaurant' }],
  },
};
