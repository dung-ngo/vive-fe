import client from '@/lib/apolloClient';
import {
  SubscribeChallengeDocument,
  SubscribeChallengeMutation,
  SubscribeChallengeMutationVariables,
  SubscribeContactDocument,
  SubscribeContactMutation,
  SubscribeContactMutationVariables,
  SubscribeEBookDocument,
  SubscribeEBookMutation,
  SubscribeEBookMutationVariables,
  SubscribeListSubscribersDocument,
  SubscribeListSubscribersMutation,
  SubscribeListSubscribersMutationVariables,
} from '@/lib/gql/graphql';

export const subscribeListSubscribers = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  let { data, errors } = await client.mutate<
    SubscribeListSubscribersMutation,
    SubscribeListSubscribersMutationVariables
  >({
    mutation: SubscribeListSubscribersDocument,
    variables: {
      email,
      name,
    },
  });
  return { data, errors };
};

export const subscribeChallenge = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  let { data, errors } = await client.mutate<
    SubscribeChallengeMutation,
    SubscribeChallengeMutationVariables
  >({
    mutation: SubscribeChallengeDocument,
    variables: {
      email,
      name,
    },
  });
  return { data, errors };
};

export const subscribeEBook = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  let { data, errors } = await client.mutate<
    SubscribeEBookMutation,
    SubscribeEBookMutationVariables
  >({
    mutation: SubscribeEBookDocument,
    variables: {
      email,
      name,
    },
  });
  return { data, errors };
};

export const subscribeContact = async ({
  email,
  name,
  age,
  message,
}: {
  email: string;
  name: string;
  age: string;
  message: string;
}) => {
  let { data, errors } = await client.mutate<
    SubscribeContactMutation,
    SubscribeContactMutationVariables
  >({
    mutation: SubscribeContactDocument,
    variables: {
      email,
      name,
      age,
      message,
    },
  });
  return { data, errors };
};
