import { getPostDetailBySlug, getRecipeDetailBySlug } from '@/apis/posts';
import Layout from '@/components/layout/Layout';
import { PostDetailFragment } from '@/lib/gql/graphql';
import PostDetailScreen from '@/screens/postDetail/PostDetail';
import { TBreadcrumbItem } from '@/typescript/types';
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slugs = (context.params?.slug as string) || '';
  const locale = context.locale as Locale;
  const postDetail = await getPostDetailBySlug({
    locale: locale,
    slug: slugs[2],
  });
  if (!postDetail) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      info: info[`${slugs[0]}/${slugs[1]}` as keyof typeof info],
      postDetail,
    },
  };
}

type Props = {
  info: {
    title: string;
    breadcrumb: TBreadcrumbItem[];
  };
  pageSlugs: string;
  postDetail: PostDetailFragment;
};

export default function Listing({ info, pageSlugs, postDetail }: Props) {
  return (
    <>
      <Head>
        <title>{postDetail.title}</title>
        <meta property="og:title" content={postDetail.title || ''} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${postDetail.banner?.data?.attributes?.url}`}
        />
      </Head>
      <Layout simpleHeader>
        <PostDetailScreen
          breadcrumb={[...info.breadcrumb, { text: postDetail.title || '' }]}
          postDetail={postDetail}
        />
      </Layout>
    </>
  );
}

const info = {
  'tin-tuc/suc-khoe': {
    title: 'Tin tức - Sức khoẻ',
    breadcrumb: [{ text: 'Tin tức', link: 'tin-tuc' }, { text: 'Sức khoẻ' }],
  },
  'tin-tuc/dong-vat': {
    title: 'Tin tức - Động vật',
    breadcrumb: [{ text: 'Tin tức', link: 'tin-tuc' }, { text: 'Động vật' }],
  },
  'tin-tuc/moi-truong': {
    title: 'Tin tức - Môi trường',
    breadcrumb: [{ text: 'Tin tức', link: 'tin-tuc' }, { text: 'Môi trường' }],
  },
  'news/health': {
    title: 'News - Health',
    breadcrumb: [{ text: 'News', link: 'news' }, { text: 'Health' }],
  },
  'news/animals': {
    title: 'News - Animals',
    breadcrumb: [{ text: 'News', link: 'news' }, { text: 'Animals' }],
  },
  'news/environment': {
    title: 'News - Environment',
    breadcrumb: [{ text: 'News', link: 'news' }, { text: 'Environment' }],
  },
};
