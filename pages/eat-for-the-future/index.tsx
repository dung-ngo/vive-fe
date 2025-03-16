import Layout from '@/components/layout/Layout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import {
  GetAnChoTuongLaiDocument,
  GetAnChoTuongLaiQuery,
  GetAnChoTuongLaiQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import EatForFutureScreen from '@/screens/about/EatForFuture';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  let { data, errors } = await client.query<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >({
    query: GetAnChoTuongLaiDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetAnChoTuongLaiDocument data');
  }

  return {
    props: { anChoTuongLai: data },
    // revalidate: 60, // 1p
  };
}

export default function AboutUs({
  anChoTuongLai,
}: {
  anChoTuongLai: GetAnChoTuongLaiQuery;
}) {
  const attributes = anChoTuongLai.anChoTuongLai?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <>
      <Head>
        <title>{attributes.pageName}</title>
        <meta property="og:title" content={attributes.pageName} />
        <meta
          property="og:description"
          content={attributes.seo?.metaDescription}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
        />
      </Head>
      <Layout
        layoutProps={{
          background: {
            type: 'image',
            src:
              `${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.thumbnail.data?.attributes?.url}` ||
              '',
          },
          headerContent: {
            title: attributes.titlePage || '',
            subTitle: attributes.descriptionPage || '',
          },
        }}
      >
        <EatForFutureScreen anChoTuongLai={anChoTuongLai} />
      </Layout>
    </>
  );
}
