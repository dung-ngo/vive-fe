import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import client from '@/lib/apolloClient';
import {
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
  if (!canAccess) {
    return NextResponse.redirect(new URL('/notfound', request.url));
  }
}

// "Matching Paths" below
export const config = {
  matcher: '/pocket-book',
};
