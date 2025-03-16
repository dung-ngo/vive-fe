import {
  GetListPostsByCategorySlug,
  GetListPostsByCategorySlugEn,
  getPosts,
  getPostsEn,
} from '@/apis/posts';
import Layout from '@/components/layout/Layout';
import {
  GetListPostsByCategorySlugQuery,
  GetListPostsQuery,
  PostCardFragment,
} from '@/lib/gql/graphql';
import NewsScreen from '@/screens/news/News';
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';
import HeroBannerBg from '@/assets/images/herobanner-tintuc.jpg';
import useTranslations from '@/hooks/useTranslations';

const categoryMap = {
  environment: {
    vi: 'moi-truong',
    en: 'environment',
  },
  animal: {
    vi: 'dong-vat',
    en: 'animal',
  },
  health: {
    vi: 'suc-khoe',
    en: 'health',
  },
};

async function fetchDataVi() {
  const latestNewsVi = await getPosts({ locale: 'vi', page: 1, pageSize: 7 });
  const exceptIds =
    (latestNewsVi.data.posts &&
      latestNewsVi.data.posts.data.map((item) => item.id as string)) ||
    [];
  const [environmentNewsVi, animalNewsVi, healthNewsVi] = await Promise.all([
    GetListPostsByCategorySlug({
      locale: 'vi',
      page: 1,
      pageSize: 6,
      category: categoryMap.environment['vi'],
      exceptIds: exceptIds,
    }),
    GetListPostsByCategorySlug({
      locale: 'vi',
      page: 1,
      pageSize: 6,
      category: categoryMap.animal['vi'],
      exceptIds: exceptIds,
    }),
    GetListPostsByCategorySlug({
      locale: 'vi',
      page: 1,
      pageSize: 6,
      category: categoryMap.health['vi'],
      exceptIds: exceptIds,
    }),
  ]);
  const latestNews =
    (latestNewsVi.data.posts?.data.map(
      (item) => item.attributes,
    ) as PostCardFragment[]) || [];
  const environmentNews =
    (environmentNewsVi.data.posts?.data.map(
      (item) => item.attributes,
    ) as PostCardFragment[]) || [];
  const animalNews =
    (animalNewsVi.data.posts?.data.map(
      (item) => item.attributes,
    ) as PostCardFragment[]) || [];
  const healthNews =
    (healthNewsVi.data.posts?.data.map(
      (item) => item.attributes,
    ) as PostCardFragment[]) || [];
  return { latestNews, environmentNews, animalNews, healthNews };
}

async function fetchDataEn() {
  const latestNewsEn = await getPostsEn({ page: 1, pageSize: 7 });
  const latestNews =
    (latestNewsEn.data.posts?.data
      .map((item) => item.attributes?.localizations?.data[0]?.attributes)
      .filter((item) => !!item) as PostCardFragment[]) || [];
  const exceptIds =
    (latestNewsEn.data.posts &&
      latestNewsEn.data.posts.data.map((item) => item.id as string)) ||
    [];
  const [environmentNewsEn, animalNewsEn, healthNewsEn] = await Promise.all([
    GetListPostsByCategorySlugEn({
      page: 1,
      pageSize: 6,
      category: categoryMap.environment['vi'],
      exceptIds: exceptIds,
    }),
    GetListPostsByCategorySlugEn({
      page: 1,
      pageSize: 6,
      category: categoryMap.animal['vi'],
      exceptIds: exceptIds,
    }),
    GetListPostsByCategorySlugEn({
      page: 1,
      pageSize: 6,
      category: categoryMap.health['vi'],
      exceptIds: exceptIds,
    }),
  ]);
  const environmentNews =
    (environmentNewsEn.data.posts?.data
      .map((item) => item.attributes?.localizations?.data[0]?.attributes)
      .filter((item) => !!item) as PostCardFragment[]) || [];
  const animalNews =
    (animalNewsEn.data.posts?.data
      .map((item) => item.attributes?.localizations?.data[0]?.attributes)
      .filter((item) => !!item) as PostCardFragment[]) || [];
  const healthNews =
    (healthNewsEn.data.posts?.data
      .map((item) => item.attributes?.localizations?.data[0]?.attributes)
      .filter((item) => !!item) as PostCardFragment[]) || [];
  return { latestNews, environmentNews, animalNews, healthNews };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  const { latestNews, environmentNews, animalNews, healthNews } =
    locale === 'vi' ? await fetchDataVi() : await fetchDataEn();

  return {
    props: {
      latestNews: latestNews,
      environmentNews: environmentNews,
      animalNews: animalNews,
      healthNews: healthNews,
    },
  };
}

const News = ({
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
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{t.newsTitle}</title>
        <meta property="og:title" content={t.newsTitle || ''} />
        <meta property="og:description" content={t.newsDescription || ''} />
        <meta property="og:image" content={HeroBannerBg.src} />
      </Head>
      <Layout
        layoutProps={{
          background: {
            type: 'image',
            src: HeroBannerBg.src,
            position: 'top',
          },
          headerContent: {
            title: t.newsTitle,
            subTitle: t.newsDescription,
          },
        }}
      >
        <NewsScreen
          latestNews={latestNews}
          environmentNews={environmentNews}
          animalNews={animalNews}
          healthNews={healthNews}
        />
      </Layout>
    </>
  );
};

export default News;
