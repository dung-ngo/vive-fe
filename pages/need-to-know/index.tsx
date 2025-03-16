import Layout from '@/components/layout/Layout';
import VeganInfoScreen from '@/screens/veganInfo/VeganInfo';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import {
  GetBanCanBietDocument,
  GetBanCanBietQuery,
  GetBanCanBietQueryVariables,
} from '@/lib/gql/graphql';
import client from '@/lib/apolloClient';
import { Locale } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;
  let { data, errors } = await client.query<
    GetBanCanBietQuery,
    GetBanCanBietQueryVariables
  >({
    query: GetBanCanBietDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetThuThachThuanChayDocument data');
  }

  return {
    props: { banCanBiet: data },
  };
}

const Info = ({ banCanBiet }: { banCanBiet: GetBanCanBietQuery }) => {
  const attributes = banCanBiet.banCanBiet?.data?.attributes;
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
        <VeganInfoScreen banCanBiet={banCanBiet} />
      </Layout>
    </>
  );
};

export default Info;
