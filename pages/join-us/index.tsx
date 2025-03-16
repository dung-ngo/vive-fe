import Layout from '@/components/layout/Layout';
import JoinUsScreen from '@/screens/joinUs/JoinUs';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import {
  GetDoiNguSongThuanChayDocument,
  GetDoiNguSongThuanChayQuery,
  GetDoiNguSongThuanChayQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >({
    query: GetDoiNguSongThuanChayDocument,
    variables: {
      locale: locale,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetDoiNguSongThuanChayDocument data');
  }

  return {
    props: { doiNguSongThuanChay: data },
  };
}

export default function JoinUs({
  doiNguSongThuanChay,
}: {
  doiNguSongThuanChay: GetDoiNguSongThuanChayQuery;
}) {
  const attributes = doiNguSongThuanChay.doiNguSongThuanChay?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <>
      <Head>
        <title>{attributes.pageName}</title>
        <meta property="og:title" content={attributes.pageName || ''} />
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
        <JoinUsScreen doiNguSongThuanChay={doiNguSongThuanChay} />
      </Layout>
    </>
  );
}
