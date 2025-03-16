import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetVLabelDocument,
  GetVLabelQuery,
  GetVLabelQueryVariables,
} from '@/lib/gql/graphql';
import VLabelScreen from '@/screens/vLabel/VLabel';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetVLabelQuery,
    GetVLabelQueryVariables
  >({
    query: GetVLabelDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error(JSON.stringify(errors));
  }

  return {
    props: { vLabel: data },
  };
}

export default function VLabel({ vLabel }: { vLabel: GetVLabelQuery }) {
  const attributes = vLabel.vLabel?.data?.attributes;
  if (!attributes) {
    return 'No data!';
  }
  return (
    <>
      <Head>
        <title>{attributes.seo?.metaTitle || 'V-Label'}</title>
        <meta
          property="og:title"
          content={attributes.seo?.metaTitle || 'V-Label'}
        />
        {attributes.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      <Layout simpleHeader noHelperSection className="v-label-layout">
        <VLabelScreen vLabel={vLabel} />
      </Layout>
    </>
  );
}
