import Layout from '@/components/layout/Layout';
import client from '@/lib/apolloClient';
import {
  GetThuThachThuanChayDocument,
  GetThuThachThuanChayQuery,
  GetThuThachThuanChayQueryVariables,
  ListTextFragment,
} from '@/lib/gql/graphql';
import ChallengeScreen from '@/screens/challenge/Challenge';
import ChallengeRegister from '@/screens/challenge/components/ChallengeRegister';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { Locale, useRouter } from 'next/router';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale as Locale;

  let { data, errors } = await client.query<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >({
    query: GetThuThachThuanChayDocument,
    variables: {
      locale: locale,
    },
  });

  if (errors) {
    throw new Error('Cannot fetch GetThuThachThuanChayDocument data');
  }

  return {
    props: {
      thuThachThuanChay: data,
    },
  };
}

export default function Challenge({
  thuThachThuanChay,
}: {
  thuThachThuanChay: GetThuThachThuanChayQuery;
}) {
  const attributes = thuThachThuanChay.thuThachThuanChay?.data?.attributes;
  if (!attributes) {
    return 'No data';
  }
  return (
    <>
      <Head>
        <title>{attributes.seo?.metaTitle}</title>
        <meta property="og:title" content={attributes.seo?.metaTitle} />
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
        MainSection={
          <ChallengeRegister
            titleVeganChallenge={attributes.titleVeganChallenge || ''}
            challengeContent={attributes.challengeContent as ListTextFragment[]}
            veganParticipant={attributes.veganParticipant || ''}
          />
        }
      >
        <ChallengeScreen thuThachThuanChay={thuThachThuanChay} />
      </Layout>
    </>
  );
}
