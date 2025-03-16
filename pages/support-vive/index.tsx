import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetSupportViveDocument,
  GetSupportViveQuery,
  GetSupportViveQueryVariables,
} from '@/lib/gql/graphql';
import SupportViveScreen from '@/screens/supportVive/SupportVive';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetSupportViveQuery,
    GetSupportViveQueryVariables
  >({
    query: GetSupportViveDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error(JSON.stringify(errors));
  }

  return {
    props: { supportVive: data },
  };
}

export default function SupportVive({
  supportVive,
}: {
  supportVive: GetSupportViveQuery;
}) {
  const attributes = supportVive.supportVive?.data?.attributes;
  if (!attributes) {
    return 'No data!';
  }
  return (
    <>
      <Head>
        <title>{attributes.seo?.metaTitle || ''}</title>
        <meta property="og:title" content={attributes.seo?.metaTitle || ''} />
        {attributes.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      <Layout simpleHeader noHelperSection className="support-layout">
        <SupportViveScreen supportVive={supportVive} />
      </Layout>
    </>
  );
}
