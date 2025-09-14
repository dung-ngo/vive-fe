import client from '@/lib/apolloClient';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  GetPetitionDocument,
  GetPetitionQuery,
  GetPetitionQueryVariables,
  GetPetitionSlugDocument,
  GetPetitionSlugQuery,
  GetPetitionSlugQueryVariables,
  GetPocketBookDocument,
  GetPocketBookQuery,
  GetPocketBookQueryVariables,
} from './lib/gql/graphql';

export async function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || 'vi';
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const queryParams = Object.fromEntries(searchParams.entries());
  let canAccess = false;

  if (request.nextUrl.pathname === '/pocket-book') {
    if (queryParams?.viveToken) {
      let { data, errors } = await client.query<
        GetPocketBookQuery,
        GetPocketBookQueryVariables
      >({
        query: GetPocketBookDocument,
        variables: {
          locale: locale,
        },
      });
      if (!errors && data.pocketBook?.data?.attributes?.qrCode) {
        const qrCode = new URL(data.pocketBook.data.attributes.qrCode);
        const viveToken = qrCode.searchParams.get('viveToken');
        if (viveToken === queryParams?.viveToken) {
          canAccess = true;
        }
      }
    }
  } else if (/\/(don-thinh-cau|petition)\/.+/.test(request.nextUrl.pathname)) {
    const pathname = url.pathname;
    const pathArgs = pathname.split('/');
    const slug = pathArgs.pop();
    const { data, errors } = await client.query<
      GetPetitionSlugQuery,
      GetPetitionSlugQueryVariables
    >({
      query: GetPetitionSlugDocument,
      variables: {
        locale: 'vi',
      },
    });

    const { data: dataEn, errors: errorEn } = await client.query<
      GetPetitionSlugQuery,
      GetPetitionSlugQueryVariables
    >({
      query: GetPetitionSlugDocument,
      variables: {
        locale: 'en',
      },
    });
    const wrongSlug =
      slug !== data.petition?.data?.attributes?.slug &&
      slug !== dataEn.petition?.data?.attributes?.slug;
    if (errors || errorEn || wrongSlug) {
      canAccess = false;
    } else {
      canAccess = true;
    }
  }

  if (!canAccess) {
    return NextResponse.redirect(new URL('/notfound', request.url));
  }
}

// "Matching Paths" below
export const config = {
  matcher: ['/pocket-book', '/don-thinh-cau/:path*', '/petition/:path*'],
};
