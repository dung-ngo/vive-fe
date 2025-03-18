import {
  GetListPostsByCategorySlug,
  GetListPostsByCategorySlugEn,
} from '@/apis/posts';
import Layout from '@/components/layout/Layout';
import { MetaPostFragment, PostCardFragment } from '@/lib/gql/graphql';
import ListingScreen from '@/screens/listing/Listing';
import { TBreadcrumbItem } from '@/typescript/types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';
import HeroBannerBg from '@/assets/images/herobanner-tintuc.jpg';
import useTranslations from '@/hooks/useTranslations';

async function fetchPostsByCategorySlugVi({
  pageSize,
  page,
  category,
}: {
  pageSize: number;
  page: number;
  category: string;
}) {
  const posts = await GetListPostsByCategorySlug({
    locale: 'vi',
    page,
    pageSize,
    category,
  });
  return {
    data:
      (posts.data.posts?.data.map(
        (item) => item.attributes,
      ) as PostCardFragment[]) || [],
    meta: posts.data.posts?.meta,
  };
}

const categoryMapListing = {
  environment: 'moi-truong',
  animal: 'dong-vat',
  health: 'suc-khoe',
  petitions: 'don-thinh-cau',
};

async function fetchPostsByCategorySlugEn({
  pageSize,
  page,
  category,
}: {
  pageSize: number;
  page: number;
  category: string;
}) {
  const posts = await GetListPostsByCategorySlugEn({
    page,
    pageSize,
    category,
  });

  const mappedPosts = (posts.data.posts?.data || []).map(
    (item) => item.attributes?.localizations?.data?.[0]?.attributes,
  ) as PostCardFragment[];

  const filteredPosts = mappedPosts.filter((attributes) => !!attributes);

  return {
    data: filteredPosts,
    meta: posts.data.posts?.meta,
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageSlugs = (context.params?.slug as string[]) || [];
  const locale = context.locale as Locale;
  const category =
    locale === 'vi'
      ? pageSlugs[1]
      : categoryMapListing[pageSlugs[1] as keyof typeof categoryMapListing];
  const page =
    typeof context.query.page === 'string' && !isNaN(Number(context.query.page))
      ? Number(context.query.page)
      : 1;

  const posts =
    locale === 'vi'
      ? await fetchPostsByCategorySlugVi({
          page: page,
          pageSize: 12,
          category,
        })
      : await fetchPostsByCategorySlugEn({
          page: page,
          pageSize: 12,
          category,
        });
  return {
    props: {
      pageSlugs,
      info: info[pageSlugs.join('/') as keyof typeof info],
      posts: posts,
    },
  };
}

type Props = {
  pageSlugs: string | undefined;
  info: {
    title: string;
    breadcrumb: TBreadcrumbItem[];
  };
  posts: {
    data: PostCardFragment[];
    meta: MetaPostFragment;
  };
};

export default function ListPosts({ pageSlugs, info, posts }: Props) {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{info.title}</title>
        <meta property="og:title" content={info.title || ''} />
        <meta property="og:description" content={t.thuanChayTheory} />
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
            title: t.banCanBiet,
            subTitle: t.thuanChayTheory,
          },
        }}
      >
        <ListingScreen
          title={info.title}
          breadcrumb={info.breadcrumb}
          posts={posts}
        />
      </Layout>
    </>
  );
}

const info = {
  'don-thinh-cau': {
    title: 'Đơn thỉnh cầu',
    breadcrumb: [
      { text: 'Đơn thỉnh cầu', link: 'don-thinh-cau' },
      { text: 'Đơn thỉnh cầu' },
    ],
  },
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
  'review-quan-an': {
    title: 'Review quán ăn',
    breadcrumb: [{ text: 'Ẩm thực thuần chay' }, { text: 'Review quán ăn' }],
  },
  'cong-thuc-thuan-chay': {
    title: 'Công thức nấu ăn',
    breadcrumb: [{ text: 'Ẩm thực thuần chay' }, { text: 'Công thức nấu ăn' }],
  },
  petitions: {
    title: 'Petitionsss',
    breadcrumb: [
      { text: 'Petitionsss', link: 'petitionsss' },
      { text: 'Petitionsss' },
    ],
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
  'review-restaurant': {
    title: 'Review Restaurant',
    breadcrumb: [{ text: 'Our Kitchen' }, { text: 'Review Restaurant' }],
  },
  'recipe-vegan': {
    title: 'Recipe Vegan',
    breadcrumb: [{ text: 'Our Kitchen' }, { text: 'Recipe Vegan' }],
  },
};

const datas = [
  [
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
    {
      title: 'Thực phẩm thuần chay có thể giúp chống trầm cảm',
      imgSrc:
        'http://vive.org.vn/static/6c208b7bee77f2132477de0d9a040a7c/fba04/f58de5caa0d9bb09570bb3e8e66e4edc.webp',
      tags: ['thuần chay', 'sức khoẻ'],
      link: 'http://vive.org.vn/vi/tin-tuc/suc-khoe/thuc-pham-thuan-chay-co-the-giup-chong-tram-cam',
    },
  ],
];
