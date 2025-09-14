import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetPetitionDocument,
  GetPetitionQuery,
  GetPetitionQueryVariables,
} from '@/lib/gql/graphql';
import PetitionScreen from '@/screens/petitions/Petitions';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  const slug = context.params?.slug;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  let { data, errors } = await client.query<
    GetPetitionQuery,
    GetPetitionQueryVariables
  >({
    query: GetPetitionDocument,
    variables: {
      locale: 'vi',
    },
  });

  let { data: dataEn, errors: errorEn } = await client.query<
    GetPetitionQuery,
    GetPetitionQueryVariables
  >({
    query: GetPetitionDocument,
    variables: {
      locale: 'en',
    },
  });

  if (errors || errorEn) {
    throw new Error('Cannot fetch GetPetitionDocument data');
  }

  return {
    props: { petition: locale === 'vi' ? data : dataEn },
  };
}

export default function Petitions({
  petition,
}: {
  petition: GetPetitionQuery;
}) {
  const attributes = petition.petition?.data?.attributes;
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
          content={attributes.seo?.metaDescription || 'Vive'}
        />
        {attributes.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      {/* <Layout
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
      </Layout> */}
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
        <PetitionScreen petition={petition} />
      </Layout>
    </>
  );
}
