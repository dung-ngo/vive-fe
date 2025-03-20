import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetVeChungToiDocument,
  GetVeChungToiQuery,
  GetVeChungToiQueryVariables,
} from '@/lib/gql/graphql';
import PetitionScreen from '@/screens/petitions/Petitions';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetVeChungToiQuery,
    GetVeChungToiQueryVariables
  >({
    query: GetVeChungToiDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetVeChungToiDocument data');
  }

  return {
    props: { veChungToi: data },
    // revalidate: 60, // 1p
  };
}

export default function Petitions({
  veChungToi,
}: {
  veChungToi: GetVeChungToiQuery;
}) {
  const attributes = veChungToi.veChungToi?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
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
      <Layout
        layoutProps={{
          background: {
            type: 'image',
            src:
              `${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.thumbnail.data?.attributes?.url}` ||
              '',
          },
        }}
      >
        <PetitionScreen />
      </Layout>
    </>
  );
}
