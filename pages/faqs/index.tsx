import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetNhungCauHoiThuongGapDocument,
  GetNhungCauHoiThuongGapQuery,
  GetNhungCauHoiThuongGapQueryVariables,
} from '@/lib/gql/graphql';
import FAQsScreen from '@/screens/faqs/FAQs';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >({
    query: GetNhungCauHoiThuongGapDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetNhungCauHoiThuongGapDocument data');
  }

  return {
    props: { nhungCauHoiThuongGap: data },
  };
}

export default function FAQs({
  nhungCauHoiThuongGap,
}: {
  nhungCauHoiThuongGap: GetNhungCauHoiThuongGapQuery;
}) {
  const attributes =
    nhungCauHoiThuongGap.nhungCauHoiThuongGap?.data?.attributes;
  if (!attributes) {
    return 'No data!';
  }
  return (
    <>
      <Head>
        <title>{attributes.titleFaqs}</title>
        <meta property="og:title" content={attributes.titleFaqs || ''} />
        <meta
          property="og:description"
          content={attributes.seo?.metaDescription}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
        />
      </Head>
      <Layout simpleHeader={true} className="faq-layout">
        <FAQsScreen nhungCauHoiThuongGap={nhungCauHoiThuongGap} />
      </Layout>
    </>
  );
}
