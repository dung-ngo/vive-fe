import client from '@/lib/apolloClient';
import {
  GetListRecipesByEnDocument,
  GetListRecipesByEnQuery,
  GetListRecipesByEnQueryVariables,
  GetListRecipesDocument,
  GetListRecipesQuery,
  GetListRecipesQueryVariables,
  GetListReviewsDocument,
  GetListReviewsQuery,
  GetListReviewsQueryVariables,
  GetReviewsByEnDocument,
  GetReviewsByEnQuery,
  GetReviewsByEnQueryVariables,
} from '@/lib/gql/graphql';

export async function getReviews({
  locale,
  page,
  pageSize,
}: {
  locale: string;
  page: number;
  pageSize: number;
}) {
  let { data, errors } = await client.query<
    GetListReviewsQuery,
    GetListReviewsQueryVariables
  >({
    query: GetListReviewsDocument,
    variables: {
      locale: locale,
      page: page,
      pageSize: pageSize,
      sort: ['createdAt:desc'],
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetVeChungToiDocument data');
  }
  return { data };
}


export async function getReviewsByEn({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  let { data, errors } = await client.query<
  GetReviewsByEnQuery,
  GetReviewsByEnQueryVariables
  >({
    query: GetReviewsByEnDocument,
    variables: {
      page: page,
      pageSize: pageSize,
      sort: ['createdAt:desc'],
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetVeChungToiDocument data');
  }
  return { data };
}

export async function getRecipes({
  locale,
  page,
  pageSize,
}: {
  locale: string;
  page: number;
  pageSize: number;
}) {
  let { data, errors } = await client.query<
    GetListRecipesQuery,
    GetListRecipesQueryVariables
  >({
    query: GetListRecipesDocument,
    variables: {
      locale: locale,
      page,
      pageSize,
      sort: ['createdAt:desc'],
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetVeChungToiDocument data');
  }
  return { data };
}


export async function getRecipesByEn({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  let { data, errors } = await client.query<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >({
    query: GetListRecipesByEnDocument,
    variables: {
      page,
      pageSize,
      sort: ['createdAt:desc'],
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetVeChungToiDocument data');
  }
  return { data };
}
