import Layout from '@/components/layout/Layout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import {
  GetDonationDocument,
  GetDonationQuery,
  GetDonationQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import { Locale } from 'next/router';
import DonationScreen from '@/screens/supportVive/Donation';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  let { data, errors } = await client.query<
    GetDonationQuery,
    GetDonationQueryVariables
  >({
    query: GetDonationDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetDonationDocument data');
  }

  return {
    props: { donation: data },
    // revalidate: 60, // 1p
  };
}

export default function Donation({ donation }: { donation: GetDonationQuery }) {
  const attributes = donation.donation?.data?.attributes;
  console.log('donation ', donation);
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
        <DonationScreen donation={donation} />
      </Layout>
    </>
  );
}
