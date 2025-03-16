import {
  SinglePagePolicy,
  getChinhSachBaoMat,
  getChinhSachLienKet,
  getDieuKhoanDieuKien,
} from '@/apis/single-page';
import Layout from '@/components/layout/Layout';
import { SinglePageFragment } from '@/lib/gql/graphql';
import PolicyScreen from '@/screens/policy/Policy';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

const slugToApi = {
  'dieu-khoan-dieu-kien': getDieuKhoanDieuKien,
  'term-and-condition': getDieuKhoanDieuKien,
  'chinh-sach-bao-mat': getChinhSachBaoMat,
  'privacy-policy': getChinhSachBaoMat,
  'chinh-sach-lien-ket': getChinhSachLienKet,
  'affiliate-policy': getChinhSachLienKet,
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const pageSlug = context.params?.slug || '';
  const locale = context.locale as Locale;

  const pageData = await slugToApi[pageSlug as keyof typeof slugToApi]({
    locale,
  });
  return {
    props: { pageData },
  };
}

const Privacy = ({ pageData }: { pageData: SinglePagePolicy }) => {
  return (
    <>
      <Head>
        <title>{pageData.Page.title}</title>
        <meta property="og:title" content={pageData.Page.title || ''} />
        {pageData.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${pageData.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      <Layout simpleHeader>
        <PolicyScreen pageData={pageData.Page} />
      </Layout>
    </>
  );
};

export default Privacy;
