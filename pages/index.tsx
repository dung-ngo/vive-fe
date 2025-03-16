import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
  GetVeganChallengeHomeDocument,
  GetVeganChallengeHomeQuery,
  GetVeganChallengeHomeQueryVariables,
} from '@/lib/gql/graphql';
import HomeScreen from '@/screens/home/Home';
import HomeCountdown from '@/screens/home/component/HomeCountdown';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale || 'vi';
  const [home, veganChallenge] = await Promise.all([
    await client.query<GetHomePageQuery, GetHomePageQueryVariables>({
      query: GetHomePageDocument,
      variables: {
        locale: locale,
      },
    }),
    await client.query<
      GetVeganChallengeHomeQuery,
      GetVeganChallengeHomeQueryVariables
    >({
      query: GetVeganChallengeHomeDocument,
      variables: {
        locale: locale,
      },
    }),
  ]);
  if (home.errors || veganChallenge.errors) {
    throw new Error('Cannot fetch home page data');
  }
  return {
    props: {
      homePage: home.data,
      veganChallenge: veganChallenge.data,
    },
  };
}

export default function Page({
  homePage,
  veganChallenge,
}: {
  homePage: GetHomePageQuery;
  veganChallenge: GetVeganChallengeHomeQuery;
}) {
  const homeAttributes = homePage.homePage?.data?.attributes;
  const veganChallengeAttributes =
    veganChallenge.thuThachThuanChay?.data?.attributes;
  if (!homeAttributes || !veganChallengeAttributes) {
    return 'No data!';
  }
  return (
    <>
      <Head>
        <title>Vì một thế giới nhân đạo hơn</title>
      </Head>
      <Layout
        layoutProps={{
          background: {
            type: 'video',
            src:
              `${process.env.NEXT_PUBLIC_UPLOAD_URL}${homeAttributes.thumbnail.data?.attributes?.url}` ||
              '',
          },
        }}
        MainSection={
          <HomeCountdown
            titleVeganChallenge={
              veganChallengeAttributes.titleVeganChallenge || ''
            }
            veganParticipant={veganChallengeAttributes.veganParticipant || ''}
          />
        }
      >
        <HomeScreen homePage={homePage} />
      </Layout>
    </>
  );
}
