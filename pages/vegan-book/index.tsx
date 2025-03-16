import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetCamNangBoTuiDocument,
  GetCamNangBoTuiQuery,
  GetCamNangBoTuiQueryResult,
  GetCamNangBoTuiQueryVariables,
} from '@/lib/gql/graphql';
import VeganBookScreen from '@/screens/veganBook/VeganBook';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >({
    query: GetCamNangBoTuiDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    console.log(errors);
    throw errors.toString();
  }

  return {
    props: {
      camNangBoTui: data,
    },
  };
}

export default function VeganBook({
  camNangBoTui,
}: {
  camNangBoTui: GetCamNangBoTuiQuery;
}) {
  const attributes = camNangBoTui.camNangBoTui?.data?.attributes || {};

  return (
    <>
      <Head>
        <title>{attributes.seo?.metaTitle || 'Vive'}</title>
        <meta
          property="og:title"
          content={attributes.seo?.metaTitle || 'Vive'}
        />
        <meta
          property="og:description"
          content={attributes.seo?.metaDescription || 'Sống thuần chay'}
        />
        {attributes.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      <Layout simpleHeader>
        <VeganBookScreen />
      </Layout>
    </>
  );
}
