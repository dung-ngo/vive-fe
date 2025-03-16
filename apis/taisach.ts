import client from '@/lib/apolloClient';
import {
  DownloadPocketBookDocument,
  DownloadPocketBookMutation,
  DownloadPocketBookMutationVariables,
} from '@/lib/gql/graphql';

export const downloadPocketBook = async ({
  email,
  link,
  date,
}: {
  email: string;
  link: string;
  date: string;
}) => {
  let { data, errors } = await client.mutate<
    DownloadPocketBookMutation,
    DownloadPocketBookMutationVariables
  >({
    mutation: DownloadPocketBookDocument,
    variables: {
      data: {
        date,
        email,
        link,
      },
    },
  });
  return { data, errors };
};
