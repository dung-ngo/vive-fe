import client from '@/lib/apolloClient';
import {
  GetChinhSachBaoMatDocument,
  GetChinhSachBaoMatQuery,
  GetChinhSachBaoMatQueryVariables,
  GetChinhSachLienKetDocument,
  GetChinhSachLienKetQuery,
  GetChinhSachLienKetQueryVariables,
  GetDieuKhoanDieuKienDocument,
  GetDieuKhoanDieuKienQuery,
  GetDieuKhoanDieuKienQueryVariables,
  SeoFragment,
  SinglePageFragment,
} from '@/lib/gql/graphql';
import { Locale } from 'next/router';

export type SinglePagePolicy = {
  Page: SinglePageFragment;
  seo: SeoFragment;
};

export async function getDieuKhoanDieuKien({ locale }: { locale: Locale }) {
  let { data, errors } = await client.query<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >({
    query: GetDieuKhoanDieuKienDocument,
    variables: {
      locale,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getDieuKhoanDieuKien data');
  }
  return data.dieuKhoanDieuKien?.data?.attributes as SinglePagePolicy;
}

export async function getChinhSachLienKet({ locale }: { locale: Locale }) {
  let { data, errors } = await client.query<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >({
    query: GetChinhSachLienKetDocument,
    variables: {
      locale,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getChinhSachLienKet data');
  }
  return data.chinhSachLienKet?.data?.attributes as SinglePagePolicy;
}
export async function getChinhSachBaoMat({ locale }: { locale: Locale }) {
  let { data, errors } = await client.query<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >({
    query: GetChinhSachBaoMatDocument,
    variables: {
      locale,
    },
  });
  if (errors) {
    throw new Error('Cannot fetch getChinhSachBaoMat data');
  }
  return data.chinhSachBaoMat?.data?.attributes as SinglePagePolicy;
}
