import client from '@/lib/apolloClient';
import {
  GetListPostsByCategorySlugDocument,
  GetListPostsByCategorySlugEnDocument,
  GetListPostsByCategorySlugEnQuery,
  GetListPostsByCategorySlugEnQueryVariables,
  GetListPostsByCategorySlugQuery,
  GetListPostsByCategorySlugQueryVariables,
  GetListPostsDocument,
  GetListPostsEnDocument,
  GetListPostsEnQuery,
  GetListPostsEnQueryVariables,
  GetListPostsQuery,
  GetListPostsQueryVariables,
  GetListRecipesQuery,
  GetPostDetailBySlugDocument,
  GetPostDetailBySlugQuery,
  GetPostDetailBySlugQueryVariables,
  GetRecipeDetailBySlugDocument,
  GetRecipeDetailBySlugQuery,
  GetRecipeDetailBySlugQueryVariables,
  GetReviewDetailBySlugDocument,
  GetReviewDetailBySlugQuery,
  GetReviewDetailBySlugQueryVariables,
} from '@/lib/gql/graphql';
import { Locale } from 'next/router';

export async function getPosts({
  locale,
  page,
  pageSize,
  exceptIds = [],
}: {
  locale: string;
  page: number;
  pageSize: number;
  exceptIds?: string[];
}) {
  let { data, errors } = await client.query<
    GetListPostsQuery,
    GetListPostsQueryVariables
  >({
    query: GetListPostsDocument,
    variables: {
      locale: locale,
      page,
      pageSize,
      sort: ['createdAt:desc'],
      exceptIds: exceptIds,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getPosts data');
  }
  return { data };
}

export async function getPostsEn({
  page,
  pageSize,
  exceptIds = [],
}: {
  page: number;
  pageSize: number;
  exceptIds?: string[];
}) {
  let { data, errors } = await client.query<
    GetListPostsEnQuery,
    GetListPostsEnQueryVariables
  >({
    query: GetListPostsEnDocument,
    variables: {
      page,
      pageSize,
      sort: ['createdAt:desc'],
      exceptIds: exceptIds,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getPosts data');
  }
  return { data };
}

export async function GetListPostsByCategorySlug({
  locale,
  page,
  pageSize,
  category,
  exceptIds = [],
}: {
  locale: string;
  page: number;
  pageSize: number;
  category: string;
  exceptIds?: string[];
}) {
  let { data, errors } = await client.query<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >({
    query: GetListPostsByCategorySlugDocument,
    variables: {
      locale: locale,
      page,
      pageSize,
      sort: ['createdAt:desc'],
      category,
      exceptIds,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetListPostsByCategorySlug data');
  }
  return { data };
}

export async function getRecipeDetailBySlug({
  slug,
  locale,
}: {
  locale: Locale;
  slug: string;
}) {
  let { data, errors } = await client.query<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >({
    query: GetRecipeDetailBySlugDocument,
    variables: {
      slug,
      locale,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getRecipeDetailBySlug data');
  }
  return data.recipes?.data.map((item) => item.attributes)[0];
}

export async function getPostDetailBySlug({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  let { data, errors } = await client.query<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >({
    query: GetPostDetailBySlugDocument,
    variables: {
      locale,
      slug,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getPostDetailBySlug data');
  }
  return data.posts?.data.map((item) => item.attributes)[0];
}

export async function getReviewDetailBySlug({
  slug,
  locale,
}: {
  locale: Locale;
  slug: string;
}) {
  let { data, errors } = await client.query<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >({
    query: GetReviewDetailBySlugDocument,
    variables: {
      locale,
      slug,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getReviewDetailBySlug data');
  }
  return data.reviews?.data.map((item) => item.attributes)[0];
}

export async function GetListPostsByCategorySlugEn({
  page,
  pageSize,
  category,
  exceptIds = [],
}: {
  page: number;
  pageSize: number;
  category: string;
  exceptIds?: string[];
}) {
  let { data, errors } = await client.query<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >({
    query: GetListPostsByCategorySlugEnDocument,
    variables: {
      page,
      pageSize,
      sort: ['createdAt:desc'],
      category,
      exceptIds,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch GetListPostsByCategorySlugEn data');
  }
  return { data };
}
