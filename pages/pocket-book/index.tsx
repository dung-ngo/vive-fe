import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetPocketBookDocument,
  GetPocketBookQuery,
  GetPocketBookQueryVariables,
} from '@/lib/gql/graphql';
import PocketBookScreen from '@/screens/pocketBook/PocketBook';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetPocketBookQuery,
    GetPocketBookQueryVariables
  >({
    query: GetPocketBookDocument,
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
      pocketBook: data,
    },
  };
}

export default function PocketBook({
  pocketBook,
}: {
  pocketBook: GetPocketBookQuery;
}) {
  const attributes = pocketBook.pocketBook?.data?.attributes || ({} as any);

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
        <PocketBookScreen pocketBook={attributes} />
      </Layout>
    </>
  );
}
