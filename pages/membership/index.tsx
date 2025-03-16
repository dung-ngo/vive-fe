import Layout from '@/components/layout/Layout';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import {
  GetMembershipDocument,
  GetMembershipQuery,
  GetMembershipQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import { Locale } from 'next/router';
import MembershipScreen from '@/screens/supportVive/Membership';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  let { data, errors } = await client.query<
    GetMembershipQuery,
    GetMembershipQueryVariables
  >({
    query: GetMembershipDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetMembershipDocument data');
  }

  return {
    props: { membership: data },
    // revalidate: 60, // 1p
  };
}

export default function Membership({
  membership,
}: {
  membership: GetMembershipQuery;
}) {
  const attributes = membership.membership?.data?.attributes;
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
        <MembershipScreen membership={membership} />
      </Layout>
    </>
  );
}
