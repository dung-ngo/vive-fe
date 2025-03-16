import Layout from '@/components/layout/Layout';
import FilmScreen from '@/screens/film/Film';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import {
  GetPhimDocument,
  GetPhimQuery,
  GetPhimQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  let { data, errors } = await client.query<
    GetPhimQuery,
    GetPhimQueryVariables
  >({
    query: GetPhimDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetPhimDocument data');
  }

  return {
    props: { phim: data },
  };
}

const Info = ({ phim }: { phim: GetPhimQuery }) => {
  const attributes = phim.phim?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <>
      <Head>
        <title>{attributes.titlePage}</title>
        <meta property="og:title" content={attributes.titlePage || ''} />
        <meta
          property="og:description"
          content={attributes.descriptionPage || ''}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.thumbnail.data?.attributes?.url}`}
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
        <FilmScreen phim={phim} />
      </Layout>
    </>
  );
};

export default Info;
