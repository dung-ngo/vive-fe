import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetLienHeDocument,
  GetLienHeQuery,
  GetLienHeQueryVariables,
} from '@/lib/gql/graphql';
import ContactUsScreen from '@/screens/contact/Contact';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetLienHeQuery,
    GetLienHeQueryVariables
  >({
    query: GetLienHeDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetLienHeDocument data');
  }

  return {
    props: {
      lienHe: data,
    },
  };
}

export default function ContactUs({ lienHe }: { lienHe: GetLienHeQuery }) {
  const attributes = lienHe.lienHe?.data?.attributes || {};
  return (
    <>
      <Head>
        <title>{attributes.seo?.metaTitle || 'Liên hệ với chúng tôi'}</title>
        <meta
          property="og:title"
          content={attributes.seo?.metaTitle || 'Liên hệ với chúng tôi'}
        />
        <meta
          property="og:description"
          content={attributes.seo?.metaDescription || ''}
        />
        {attributes.seo?.metaImage?.data?.attributes?.url && (
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${attributes.seo?.metaImage?.data?.attributes?.url}`}
          />
        )}
      </Head>
      <Layout simpleHeader>
        <ContactUsScreen />
      </Layout>
    </>
  );
}
