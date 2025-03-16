import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AnChoTuongLai = {
  __typename?: 'AnChoTuongLai';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  listLogos?: Maybe<Array<Maybe<ComponentSectionLogo>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AnChoTuongLaiRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionAboutUs?: Maybe<ComponentSectionSection>;
  sectionImpactOfVegan?: Maybe<ComponentSectionSection>;
  sectionListActivities?: Maybe<Array<Maybe<ComponentSectionActivity>>>;
  sectionListImpacts?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titleListLogos?: Maybe<Scalars['String']['output']>;
  titleOurActivities?: Maybe<Scalars['String']['output']>;
  titlePage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AnChoTuongLaiListLogosArgs = {
  filters?: InputMaybe<ComponentSectionLogoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnChoTuongLaiSectionListActivitiesArgs = {
  filters?: InputMaybe<ComponentSectionActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnChoTuongLaiSectionListImpactsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnChoTuongLaiEntity = {
  __typename?: 'AnChoTuongLaiEntity';
  attributes?: Maybe<AnChoTuongLai>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AnChoTuongLaiEntityResponse = {
  __typename?: 'AnChoTuongLaiEntityResponse';
  data?: Maybe<AnChoTuongLaiEntity>;
};

export type AnChoTuongLaiInput = {
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  listLogos?: InputMaybe<Array<InputMaybe<ComponentSectionLogoInput>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionAboutUs?: InputMaybe<ComponentSectionSectionInput>;
  sectionImpactOfVegan?: InputMaybe<ComponentSectionSectionInput>;
  sectionListActivities?: InputMaybe<
    Array<InputMaybe<ComponentSectionActivityInput>>
  >;
  sectionListImpacts?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titleListLogos?: InputMaybe<Scalars['String']['input']>;
  titleOurActivities?: InputMaybe<Scalars['String']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
};

export type AnChoTuongLaiRelationResponseCollection = {
  __typename?: 'AnChoTuongLaiRelationResponseCollection';
  data: Array<AnChoTuongLaiEntity>;
};

export type BanCanBiet = {
  __typename?: 'BanCanBiet';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  descriptionWhatIsVegan?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BanCanBietRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionReasons?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titlePage?: Maybe<Scalars['String']['output']>;
  titleWhatIsVegan?: Maybe<Scalars['String']['output']>;
  titleWhyVegan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BanCanBietSectionReasonsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BanCanBietEntity = {
  __typename?: 'BanCanBietEntity';
  attributes?: Maybe<BanCanBiet>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BanCanBietEntityResponse = {
  __typename?: 'BanCanBietEntityResponse';
  data?: Maybe<BanCanBietEntity>;
};

export type BanCanBietInput = {
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  descriptionWhatIsVegan?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionReasons?: InputMaybe<Array<InputMaybe<ComponentSectionSectionInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
  titleWhatIsVegan?: InputMaybe<Scalars['String']['input']>;
  titleWhyVegan?: InputMaybe<Scalars['String']['input']>;
};

export type BanCanBietRelationResponseCollection = {
  __typename?: 'BanCanBietRelationResponseCollection';
  data: Array<BanCanBietEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CamNangBoTui = {
  __typename?: 'CamNangBoTui';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CamNangBoTuiRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CamNangBoTuiEntity = {
  __typename?: 'CamNangBoTuiEntity';
  attributes?: Maybe<CamNangBoTui>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CamNangBoTuiEntityResponse = {
  __typename?: 'CamNangBoTuiEntityResponse';
  data?: Maybe<CamNangBoTuiEntity>;
};

export type CamNangBoTuiInput = {
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type CamNangBoTuiRelationResponseCollection = {
  __typename?: 'CamNangBoTuiRelationResponseCollection';
  data: Array<CamNangBoTuiEntity>;
};

export type Category = {
  __typename?: 'Category';
  banner: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  banner?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ChinhSachBaoMat = {
  __typename?: 'ChinhSachBaoMat';
  Page?: Maybe<ComponentSectionSinglePage>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ChinhSachBaoMatRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChinhSachBaoMatEntity = {
  __typename?: 'ChinhSachBaoMatEntity';
  attributes?: Maybe<ChinhSachBaoMat>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChinhSachBaoMatEntityResponse = {
  __typename?: 'ChinhSachBaoMatEntityResponse';
  data?: Maybe<ChinhSachBaoMatEntity>;
};

export type ChinhSachBaoMatInput = {
  Page?: InputMaybe<ComponentSectionSinglePageInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type ChinhSachBaoMatRelationResponseCollection = {
  __typename?: 'ChinhSachBaoMatRelationResponseCollection';
  data: Array<ChinhSachBaoMatEntity>;
};

export type ChinhSachLienKet = {
  __typename?: 'ChinhSachLienKet';
  Page?: Maybe<ComponentSectionSinglePage>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ChinhSachLienKetRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChinhSachLienKetEntity = {
  __typename?: 'ChinhSachLienKetEntity';
  attributes?: Maybe<ChinhSachLienKet>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChinhSachLienKetEntityResponse = {
  __typename?: 'ChinhSachLienKetEntityResponse';
  data?: Maybe<ChinhSachLienKetEntity>;
};

export type ChinhSachLienKetInput = {
  Page?: InputMaybe<ComponentSectionSinglePageInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type ChinhSachLienKetRelationResponseCollection = {
  __typename?: 'ChinhSachLienKetRelationResponseCollection';
  data: Array<ChinhSachLienKetEntity>;
};

export type ComponentSectionActivity = {
  __typename?: 'ComponentSectionActivity';
  date?: Maybe<Scalars['DateTime']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  thumbnail: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionActivityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionActivityFiltersInput>>>;
  date?: InputMaybe<DateTimeFilterInput>;
  hyperlink?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionActivityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionActivityFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionActivityInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionFaq = {
  __typename?: 'ComponentSectionFaq';
  answer: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type ComponentSectionFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionFaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionFaqFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionFaqInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionImage = {
  __typename?: 'ComponentSectionImage';
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
};

export type ComponentSectionImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionImageFiltersInput>>>;
  hyperlink?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionImageFiltersInput>>>;
};

export type ComponentSectionImageInput = {
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionListText = {
  __typename?: 'ComponentSectionListText';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionListTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionListTextFiltersInput>>>;
  not?: InputMaybe<ComponentSectionListTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionListTextFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionListTextInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionLogo = {
  __typename?: 'ComponentSectionLogo';
  brandName?: Maybe<Scalars['String']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo: UploadFileEntityResponse;
};

export type ComponentSectionLogoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionLogoFiltersInput>>>;
  brandName?: InputMaybe<StringFilterInput>;
  hyperlink?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionLogoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionLogoFiltersInput>>>;
};

export type ComponentSectionLogoInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionPartner = {
  __typename?: 'ComponentSectionPartner';
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo: UploadFileEntityResponse;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionPartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionPartnerFiltersInput>>>;
  hyperlink?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionPartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionPartnerFiltersInput>>>;
};

export type ComponentSectionPartnerInput = {
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionPerson = {
  __typename?: 'ComponentSectionPerson';
  avatar: UploadFileEntityResponse;
  id: Scalars['ID']['output'];
  introduction?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ComponentSectionPersonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionPersonFiltersInput>>>;
  introduction?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionPersonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionPersonFiltersInput>>>;
};

export type ComponentSectionPersonInput = {
  avatar?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionSection = {
  __typename?: 'ComponentSectionSection';
  description?: Maybe<Scalars['String']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  photo?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String']['output'];
};

export type ComponentSectionSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionSectionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  hyperlink?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionSectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionSinglePage = {
  __typename?: 'ComponentSectionSinglePage';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionSinglePageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DieuKhoanDieuKien = {
  __typename?: 'DieuKhoanDieuKien';
  Page?: Maybe<ComponentSectionSinglePage>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<DieuKhoanDieuKienRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DieuKhoanDieuKienEntity = {
  __typename?: 'DieuKhoanDieuKienEntity';
  attributes?: Maybe<DieuKhoanDieuKien>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DieuKhoanDieuKienEntityResponse = {
  __typename?: 'DieuKhoanDieuKienEntityResponse';
  data?: Maybe<DieuKhoanDieuKienEntity>;
};

export type DieuKhoanDieuKienInput = {
  Page?: InputMaybe<ComponentSectionSinglePageInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type DieuKhoanDieuKienRelationResponseCollection = {
  __typename?: 'DieuKhoanDieuKienRelationResponseCollection';
  data: Array<DieuKhoanDieuKienEntity>;
};

export type DoiNguSongThuanChay = {
  __typename?: 'DoiNguSongThuanChay';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionJoinVive?: Maybe<Scalars['String']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  descriptionSupportVive?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<DoiNguSongThuanChayRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionListMembers?: Maybe<Array<Maybe<ComponentSectionPerson>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titleJoinVive?: Maybe<Scalars['String']['output']>;
  titlePage?: Maybe<Scalars['String']['output']>;
  titleSupportVive?: Maybe<Scalars['String']['output']>;
  titleTeamVive?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DoiNguSongThuanChaySectionListMembersArgs = {
  filters?: InputMaybe<ComponentSectionPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DoiNguSongThuanChayEntity = {
  __typename?: 'DoiNguSongThuanChayEntity';
  attributes?: Maybe<DoiNguSongThuanChay>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DoiNguSongThuanChayEntityResponse = {
  __typename?: 'DoiNguSongThuanChayEntityResponse';
  data?: Maybe<DoiNguSongThuanChayEntity>;
};

export type DoiNguSongThuanChayInput = {
  descriptionJoinVive?: InputMaybe<Scalars['String']['input']>;
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  descriptionSupportVive?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionListMembers?: InputMaybe<
    Array<InputMaybe<ComponentSectionPersonInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titleJoinVive?: InputMaybe<Scalars['String']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
  titleSupportVive?: InputMaybe<Scalars['String']['input']>;
  titleTeamVive?: InputMaybe<Scalars['String']['input']>;
};

export type DoiNguSongThuanChayRelationResponseCollection = {
  __typename?: 'DoiNguSongThuanChayRelationResponseCollection';
  data: Array<DoiNguSongThuanChayEntity>;
};

export type Donation = {
  __typename?: 'Donation';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<DonationRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionAboutUs?: Maybe<ComponentSectionSection>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titlePage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DonationEntity = {
  __typename?: 'DonationEntity';
  attributes?: Maybe<Donation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DonationEntityResponse = {
  __typename?: 'DonationEntityResponse';
  data?: Maybe<DonationEntity>;
};

export type DonationInput = {
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionAboutUs?: InputMaybe<ComponentSectionSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
};

export type DonationRelationResponseCollection = {
  __typename?: 'DonationRelationResponseCollection';
  data: Array<DonationEntity>;
};

export type DownloadBookInput = {
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GeneralLayout = {
  __typename?: 'GeneralLayout';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  helperBackground: UploadFileEntityResponse;
  helperContactDescription?: Maybe<Scalars['String']['output']>;
  helperContactTitle?: Maybe<Scalars['String']['output']>;
  helperRegisterDescription?: Maybe<Scalars['String']['output']>;
  helperRegisterTitle?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<GeneralLayoutRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GeneralLayoutEntity = {
  __typename?: 'GeneralLayoutEntity';
  attributes?: Maybe<GeneralLayout>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GeneralLayoutEntityResponse = {
  __typename?: 'GeneralLayoutEntityResponse';
  data?: Maybe<GeneralLayoutEntity>;
};

export type GeneralLayoutInput = {
  helperBackground?: InputMaybe<Scalars['ID']['input']>;
  helperContactDescription?: InputMaybe<Scalars['String']['input']>;
  helperContactTitle?: InputMaybe<Scalars['String']['input']>;
  helperRegisterDescription?: InputMaybe<Scalars['String']['input']>;
  helperRegisterTitle?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralLayoutRelationResponseCollection = {
  __typename?: 'GeneralLayoutRelationResponseCollection';
  data: Array<GeneralLayoutEntity>;
};

export type GenericMorph =
  | AnChoTuongLai
  | BanCanBiet
  | CamNangBoTui
  | Category
  | ChinhSachBaoMat
  | ChinhSachLienKet
  | ComponentSectionActivity
  | ComponentSectionFaq
  | ComponentSectionImage
  | ComponentSectionListText
  | ComponentSectionLogo
  | ComponentSectionPartner
  | ComponentSectionPerson
  | ComponentSectionSection
  | ComponentSectionSinglePage
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | DieuKhoanDieuKien
  | DoiNguSongThuanChay
  | Donation
  | GeneralLayout
  | HomePage
  | I18NLocale
  | LienHe
  | Membership
  | NhungCauHoiThuongGap
  | Phim
  | PocketBook
  | Post
  | Recipe
  | Review
  | SupportVive
  | ThuThachThuanChay
  | TrackingList
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | VLabel
  | VeChungToi
  | Volunteer;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hyperlinkSeeMoreValuesOfVegan?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  sectionListMoreTopics?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  sectionListValuesOfVegan?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  sectionWhatWeDone?: Maybe<ComponentSectionSection>;
  sectionWhyNeedVegan?: Maybe<ComponentSectionSection>;
  seo?: Maybe<ComponentSharedSeo>;
  thumbnail: UploadFileEntityResponse;
  titleMoreTopics?: Maybe<Scalars['String']['output']>;
  titleValuesOfVegan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageSectionListMoreTopicsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageSectionListValuesOfVeganArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  hyperlinkSeeMoreValuesOfVegan?: InputMaybe<Scalars['String']['input']>;
  sectionListMoreTopics?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  sectionListValuesOfVegan?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  sectionWhatWeDone?: InputMaybe<ComponentSectionSectionInput>;
  sectionWhyNeedVegan?: InputMaybe<ComponentSectionSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titleMoreTopics?: InputMaybe<Scalars['String']['input']>;
  titleValuesOfVegan?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LienHe = {
  __typename?: 'LienHe';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LienHeRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LienHeEntity = {
  __typename?: 'LienHeEntity';
  attributes?: Maybe<LienHe>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LienHeEntityResponse = {
  __typename?: 'LienHeEntityResponse';
  data?: Maybe<LienHeEntity>;
};

export type LienHeInput = {
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type LienHeRelationResponseCollection = {
  __typename?: 'LienHeRelationResponseCollection';
  data: Array<LienHeEntity>;
};

export type Membership = {
  __typename?: 'Membership';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  link1?: Maybe<Scalars['String']['output']>;
  link2?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MembershipRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionAboutUs?: Maybe<ComponentSectionSection>;
  sectionImpactOfVegan?: Maybe<ComponentSectionSection>;
  sectionListImpacts?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  textDescription2?: Maybe<Scalars['String']['output']>;
  textLink1?: Maybe<Scalars['String']['output']>;
  textLink2?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titlePage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MembershipSectionListImpactsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MembershipEntity = {
  __typename?: 'MembershipEntity';
  attributes?: Maybe<Membership>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MembershipEntityResponse = {
  __typename?: 'MembershipEntityResponse';
  data?: Maybe<MembershipEntity>;
};

export type MembershipInput = {
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  link1?: InputMaybe<Scalars['String']['input']>;
  link2?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionAboutUs?: InputMaybe<ComponentSectionSectionInput>;
  sectionImpactOfVegan?: InputMaybe<ComponentSectionSectionInput>;
  sectionListImpacts?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  textDescription2?: InputMaybe<Scalars['String']['input']>;
  textLink1?: InputMaybe<Scalars['String']['input']>;
  textLink2?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipRelationResponseCollection = {
  __typename?: 'MembershipRelationResponseCollection';
  data: Array<MembershipEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAnChoTuongLaiLocalization?: Maybe<AnChoTuongLaiEntityResponse>;
  createBanCanBietLocalization?: Maybe<BanCanBietEntityResponse>;
  createCamNangBoTuiLocalization?: Maybe<CamNangBoTuiEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createChinhSachBaoMatLocalization?: Maybe<ChinhSachBaoMatEntityResponse>;
  createChinhSachLienKetLocalization?: Maybe<ChinhSachLienKetEntityResponse>;
  createDieuKhoanDieuKienLocalization?: Maybe<DieuKhoanDieuKienEntityResponse>;
  createDoiNguSongThuanChayLocalization?: Maybe<DoiNguSongThuanChayEntityResponse>;
  createDonationLocalization?: Maybe<DonationEntityResponse>;
  createGeneralLayoutLocalization?: Maybe<GeneralLayoutEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createLienHeLocalization?: Maybe<LienHeEntityResponse>;
  createMembershipLocalization?: Maybe<MembershipEntityResponse>;
  createNhungCauHoiThuongGapLocalization?: Maybe<NhungCauHoiThuongGapEntityResponse>;
  createPhimLocalization?: Maybe<PhimEntityResponse>;
  createPocketBookLocalization?: Maybe<PocketBookEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostLocalization?: Maybe<PostEntityResponse>;
  createRecipe?: Maybe<RecipeEntityResponse>;
  createRecipeLocalization?: Maybe<RecipeEntityResponse>;
  createReview?: Maybe<ReviewEntityResponse>;
  createReviewLocalization?: Maybe<ReviewEntityResponse>;
  createSupportViveLocalization?: Maybe<SupportViveEntityResponse>;
  createThuThachThuanChayLocalization?: Maybe<ThuThachThuanChayEntityResponse>;
  createTrackingList?: Maybe<TrackingListEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVLabelLocalization?: Maybe<VLabelEntityResponse>;
  createVeChungToiLocalization?: Maybe<VeChungToiEntityResponse>;
  createVolunteerLocalization?: Maybe<VolunteerEntityResponse>;
  deleteAnChoTuongLai?: Maybe<AnChoTuongLaiEntityResponse>;
  deleteBanCanBiet?: Maybe<BanCanBietEntityResponse>;
  deleteCamNangBoTui?: Maybe<CamNangBoTuiEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteChinhSachBaoMat?: Maybe<ChinhSachBaoMatEntityResponse>;
  deleteChinhSachLienKet?: Maybe<ChinhSachLienKetEntityResponse>;
  deleteDieuKhoanDieuKien?: Maybe<DieuKhoanDieuKienEntityResponse>;
  deleteDoiNguSongThuanChay?: Maybe<DoiNguSongThuanChayEntityResponse>;
  deleteDonation?: Maybe<DonationEntityResponse>;
  deleteGeneralLayout?: Maybe<GeneralLayoutEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteLienHe?: Maybe<LienHeEntityResponse>;
  deleteMembership?: Maybe<MembershipEntityResponse>;
  deleteNhungCauHoiThuongGap?: Maybe<NhungCauHoiThuongGapEntityResponse>;
  deletePhim?: Maybe<PhimEntityResponse>;
  deletePocketBook?: Maybe<PocketBookEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteRecipe?: Maybe<RecipeEntityResponse>;
  deleteReview?: Maybe<ReviewEntityResponse>;
  deleteSupportVive?: Maybe<SupportViveEntityResponse>;
  deleteThuThachThuanChay?: Maybe<ThuThachThuanChayEntityResponse>;
  deleteTrackingList?: Maybe<TrackingListEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVLabel?: Maybe<VLabelEntityResponse>;
  deleteVeChungToi?: Maybe<VeChungToiEntityResponse>;
  deleteVolunteer?: Maybe<VolunteerEntityResponse>;
  downloadPocketBook?: Maybe<TrackingInfo>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  subscribeChallenge?: Maybe<Contact>;
  subscribeContact?: Maybe<Contact>;
  subscribeEBook?: Maybe<Contact>;
  subscribeListSubscribers?: Maybe<Contact>;
  updateAnChoTuongLai?: Maybe<AnChoTuongLaiEntityResponse>;
  updateBanCanBiet?: Maybe<BanCanBietEntityResponse>;
  updateCamNangBoTui?: Maybe<CamNangBoTuiEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateChinhSachBaoMat?: Maybe<ChinhSachBaoMatEntityResponse>;
  updateChinhSachLienKet?: Maybe<ChinhSachLienKetEntityResponse>;
  updateDieuKhoanDieuKien?: Maybe<DieuKhoanDieuKienEntityResponse>;
  updateDoiNguSongThuanChay?: Maybe<DoiNguSongThuanChayEntityResponse>;
  updateDonation?: Maybe<DonationEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneralLayout?: Maybe<GeneralLayoutEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateLienHe?: Maybe<LienHeEntityResponse>;
  updateMembership?: Maybe<MembershipEntityResponse>;
  updateNhungCauHoiThuongGap?: Maybe<NhungCauHoiThuongGapEntityResponse>;
  updatePhim?: Maybe<PhimEntityResponse>;
  updatePocketBook?: Maybe<PocketBookEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateRecipe?: Maybe<RecipeEntityResponse>;
  updateReview?: Maybe<ReviewEntityResponse>;
  updateSupportVive?: Maybe<SupportViveEntityResponse>;
  updateThuThachThuanChay?: Maybe<ThuThachThuanChayEntityResponse>;
  updateTrackingList?: Maybe<TrackingListEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVLabel?: Maybe<VLabelEntityResponse>;
  updateVeChungToi?: Maybe<VeChungToiEntityResponse>;
  updateVolunteer?: Maybe<VolunteerEntityResponse>;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateAnChoTuongLaiLocalizationArgs = {
  data?: InputMaybe<AnChoTuongLaiInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateBanCanBietLocalizationArgs = {
  data?: InputMaybe<BanCanBietInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateCamNangBoTuiLocalizationArgs = {
  data?: InputMaybe<CamNangBoTuiInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateChinhSachBaoMatLocalizationArgs = {
  data?: InputMaybe<ChinhSachBaoMatInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateChinhSachLienKetLocalizationArgs = {
  data?: InputMaybe<ChinhSachLienKetInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateDieuKhoanDieuKienLocalizationArgs = {
  data?: InputMaybe<DieuKhoanDieuKienInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateDoiNguSongThuanChayLocalizationArgs = {
  data?: InputMaybe<DoiNguSongThuanChayInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateDonationLocalizationArgs = {
  data?: InputMaybe<DonationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateGeneralLayoutLocalizationArgs = {
  data?: InputMaybe<GeneralLayoutInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLienHeLocalizationArgs = {
  data?: InputMaybe<LienHeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateMembershipLocalizationArgs = {
  data?: InputMaybe<MembershipInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateNhungCauHoiThuongGapLocalizationArgs = {
  data?: InputMaybe<NhungCauHoiThuongGapInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePhimLocalizationArgs = {
  data?: InputMaybe<PhimInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePocketBookLocalizationArgs = {
  data?: InputMaybe<PocketBookInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePostLocalizationArgs = {
  data?: InputMaybe<PostInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateRecipeArgs = {
  data: RecipeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateRecipeLocalizationArgs = {
  data?: InputMaybe<RecipeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateReviewArgs = {
  data: ReviewInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateReviewLocalizationArgs = {
  data?: InputMaybe<ReviewInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSupportViveLocalizationArgs = {
  data?: InputMaybe<SupportViveInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateThuThachThuanChayLocalizationArgs = {
  data?: InputMaybe<ThuThachThuanChayInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateTrackingListArgs = {
  data: TrackingListInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateVLabelLocalizationArgs = {
  data?: InputMaybe<VLabelInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateVeChungToiLocalizationArgs = {
  data?: InputMaybe<VeChungToiInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateVolunteerLocalizationArgs = {
  data?: InputMaybe<VolunteerInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteAnChoTuongLaiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteBanCanBietArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteCamNangBoTuiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteChinhSachBaoMatArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteChinhSachLienKetArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteDieuKhoanDieuKienArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteDoiNguSongThuanChayArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteDonationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteGeneralLayoutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteLienHeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteMembershipArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteNhungCauHoiThuongGapArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePhimArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePocketBookArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteRecipeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSupportViveArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteThuThachThuanChayArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteTrackingListArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteVLabelArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteVeChungToiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteVolunteerArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDownloadPocketBookArgs = {
  data?: InputMaybe<DownloadBookInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationSubscribeChallengeArgs = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSubscribeContactArgs = {
  age: Scalars['String']['input'];
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationSubscribeEBookArgs = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSubscribeListSubscribersArgs = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateAnChoTuongLaiArgs = {
  data: AnChoTuongLaiInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateBanCanBietArgs = {
  data: BanCanBietInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateCamNangBoTuiArgs = {
  data: CamNangBoTuiInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateChinhSachBaoMatArgs = {
  data: ChinhSachBaoMatInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateChinhSachLienKetArgs = {
  data: ChinhSachLienKetInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateDieuKhoanDieuKienArgs = {
  data: DieuKhoanDieuKienInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateDoiNguSongThuanChayArgs = {
  data: DoiNguSongThuanChayInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateDonationArgs = {
  data: DonationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateGeneralLayoutArgs = {
  data: GeneralLayoutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateLienHeArgs = {
  data: LienHeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateMembershipArgs = {
  data: MembershipInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateNhungCauHoiThuongGapArgs = {
  data: NhungCauHoiThuongGapInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePhimArgs = {
  data: PhimInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePocketBookArgs = {
  data: PocketBookInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateRecipeArgs = {
  data: RecipeInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSupportViveArgs = {
  data: SupportViveInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateThuThachThuanChayArgs = {
  data: ThuThachThuanChayInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateTrackingListArgs = {
  data: TrackingListInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateVLabelArgs = {
  data: VLabelInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateVeChungToiArgs = {
  data: VeChungToiInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateVolunteerArgs = {
  data: VolunteerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type NhungCauHoiThuongGap = {
  __typename?: 'NhungCauHoiThuongGap';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<NhungCauHoiThuongGapRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionListFaqs?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  title7VeganChallenge?: Maybe<Scalars['String']['output']>;
  titleFaqs?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NhungCauHoiThuongGapSectionListFaqsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NhungCauHoiThuongGapEntity = {
  __typename?: 'NhungCauHoiThuongGapEntity';
  attributes?: Maybe<NhungCauHoiThuongGap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NhungCauHoiThuongGapEntityResponse = {
  __typename?: 'NhungCauHoiThuongGapEntityResponse';
  data?: Maybe<NhungCauHoiThuongGapEntity>;
};

export type NhungCauHoiThuongGapInput = {
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionListFaqs?: InputMaybe<Array<InputMaybe<ComponentSectionSectionInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title7VeganChallenge?: InputMaybe<Scalars['String']['input']>;
  titleFaqs?: InputMaybe<Scalars['String']['input']>;
};

export type NhungCauHoiThuongGapRelationResponseCollection = {
  __typename?: 'NhungCauHoiThuongGapRelationResponseCollection';
  data: Array<NhungCauHoiThuongGapEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Phim = {
  __typename?: 'Phim';
  canCanhButtonText?: Maybe<Scalars['String']['output']>;
  canCanhLink?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  descriptionWhatIsVegan?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PhimRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionReasons?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titlePage?: Maybe<Scalars['String']['output']>;
  titleWhatIsVegan?: Maybe<Scalars['String']['output']>;
  titleWhyVegan?: Maybe<Scalars['String']['output']>;
  exploreMoreLink?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PhimSectionReasonsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PhimEntity = {
  __typename?: 'PhimEntity';
  attributes?: Maybe<Phim>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PhimEntityResponse = {
  __typename?: 'PhimEntityResponse';
  data?: Maybe<PhimEntity>;
};

export type PhimInput = {
  canCanhButtonText?: InputMaybe<Scalars['String']['input']>;
  canCanhLink?: InputMaybe<Scalars['String']['input']>;
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  descriptionWhatIsVegan?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionReasons?: InputMaybe<Array<InputMaybe<ComponentSectionSectionInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
  titleWhatIsVegan?: InputMaybe<Scalars['String']['input']>;
  titleWhyVegan?: InputMaybe<Scalars['String']['input']>;
  exploreMoreLink?: InputMaybe<Scalars['String']['input']>;
};

export type PhimRelationResponseCollection = {
  __typename?: 'PhimRelationResponseCollection';
  data: Array<PhimEntity>;
};

export type PocketBook = {
  __typename?: 'PocketBook';
  book?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PocketBookRelationResponseCollection>;
  qrCode?: Maybe<Scalars['String']['output']>;
  sectionBookImage?: Maybe<UploadFileEntityResponse>;
  sectionBookTitle?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PocketBookEntity = {
  __typename?: 'PocketBookEntity';
  attributes?: Maybe<PocketBook>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PocketBookEntityResponse = {
  __typename?: 'PocketBookEntityResponse';
  data?: Maybe<PocketBookEntity>;
};

export type PocketBookInput = {
  book?: InputMaybe<Scalars['ID']['input']>;
  qrCode?: InputMaybe<Scalars['String']['input']>;
  sectionBookImage?: InputMaybe<Scalars['ID']['input']>;
  sectionBookTitle?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type PocketBookRelationResponseCollection = {
  __typename?: 'PocketBookRelationResponseCollection';
  data: Array<PocketBookEntity>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Scalars['String']['output']>;
  banner: UploadFileEntityResponse;
  category?: Maybe<CategoryEntityResponse>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PostRelationResponseCollection>;
  minuteRead: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<Array<Maybe<ComponentSharedSeo>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  thumbnail: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostSeoArgs = {
  filters?: InputMaybe<ComponentSharedSeoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostFiltersInput>;
  minuteRead?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  minuteRead?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<Array<InputMaybe<ComponentSharedSeoInput>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  anChoTuongLai?: Maybe<AnChoTuongLaiEntityResponse>;
  banCanBiet?: Maybe<BanCanBietEntityResponse>;
  camNangBoTui?: Maybe<CamNangBoTuiEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  chinhSachBaoMat?: Maybe<ChinhSachBaoMatEntityResponse>;
  chinhSachLienKet?: Maybe<ChinhSachLienKetEntityResponse>;
  dieuKhoanDieuKien?: Maybe<DieuKhoanDieuKienEntityResponse>;
  doiNguSongThuanChay?: Maybe<DoiNguSongThuanChayEntityResponse>;
  donation?: Maybe<DonationEntityResponse>;
  generalLayout?: Maybe<GeneralLayoutEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  lienHe?: Maybe<LienHeEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  membership?: Maybe<MembershipEntityResponse>;
  nhungCauHoiThuongGap?: Maybe<NhungCauHoiThuongGapEntityResponse>;
  phim?: Maybe<PhimEntityResponse>;
  pocketBook?: Maybe<PocketBookEntityResponse>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  recipe?: Maybe<RecipeEntityResponse>;
  recipes?: Maybe<RecipeEntityResponseCollection>;
  review?: Maybe<ReviewEntityResponse>;
  reviews?: Maybe<ReviewEntityResponseCollection>;
  supportVive?: Maybe<SupportViveEntityResponse>;
  thuThachThuanChay?: Maybe<ThuThachThuanChayEntityResponse>;
  trackingList?: Maybe<TrackingListEntityResponse>;
  trackingLists?: Maybe<TrackingListEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vLabel?: Maybe<VLabelEntityResponse>;
  veChungToi?: Maybe<VeChungToiEntityResponse>;
  volunteer?: Maybe<VolunteerEntityResponse>;
};

export type QueryAnChoTuongLaiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryBanCanBietArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryCamNangBoTuiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryChinhSachBaoMatArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryChinhSachLienKetArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryDieuKhoanDieuKienArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryDoiNguSongThuanChayArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryDonationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryGeneralLayoutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLienHeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryMembershipArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryNhungCauHoiThuongGapArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPhimArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPocketBookArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryRecipeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryRecipesArgs = {
  filters?: InputMaybe<RecipeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySupportViveArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryThuThachThuanChayArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryTrackingListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTrackingListsArgs = {
  filters?: InputMaybe<TrackingListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryVLabelArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryVeChungToiArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryVolunteerArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  author?: Maybe<Scalars['String']['output']>;
  banner: UploadFileEntityResponse;
  content?: Maybe<Scalars['String']['output']>;
  cookingTime: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<RecipeRelationResponseCollection>;
  portionSize?: Maybe<Scalars['String']['output']>;
  prepareTime?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  referenceInformation?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  thumbnail: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RecipeLocalizationsArgs = {
  filters?: InputMaybe<RecipeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecipeEntity = {
  __typename?: 'RecipeEntity';
  attributes?: Maybe<Recipe>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RecipeEntityResponse = {
  __typename?: 'RecipeEntityResponse';
  data?: Maybe<RecipeEntity>;
};

export type RecipeEntityResponseCollection = {
  __typename?: 'RecipeEntityResponseCollection';
  data: Array<RecipeEntity>;
  meta: ResponseCollectionMeta;
};

export type RecipeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  cookingTime?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<RecipeFiltersInput>;
  not?: InputMaybe<RecipeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  portionSize?: InputMaybe<StringFilterInput>;
  prepareTime?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  referenceInformation?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RecipeInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  cookingTime?: InputMaybe<Scalars['Int']['input']>;
  portionSize?: InputMaybe<Scalars['String']['input']>;
  prepareTime?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  referenceInformation?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeRelationResponseCollection = {
  __typename?: 'RecipeRelationResponseCollection';
  data: Array<RecipeEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Review = {
  __typename?: 'Review';
  author?: Maybe<Scalars['String']['output']>;
  banner: UploadFileEntityResponse;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ReviewRelationResponseCollection>;
  minuteRead: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  thumbnail: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewLocalizationsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewEntity = {
  __typename?: 'ReviewEntity';
  attributes?: Maybe<Review>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ReviewEntityResponse = {
  __typename?: 'ReviewEntityResponse';
  data?: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  __typename?: 'ReviewEntityResponseCollection';
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewFiltersInput>;
  minuteRead?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  minuteRead?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewRelationResponseCollection = {
  __typename?: 'ReviewRelationResponseCollection';
  data: Array<ReviewEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SupportVive = {
  __typename?: 'SupportVive';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SupportViveRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  txtButton?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SupportViveEntity = {
  __typename?: 'SupportViveEntity';
  attributes?: Maybe<SupportVive>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SupportViveEntityResponse = {
  __typename?: 'SupportViveEntityResponse';
  data?: Maybe<SupportViveEntity>;
};

export type SupportViveInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  txtButton?: InputMaybe<Scalars['String']['input']>;
};

export type SupportViveRelationResponseCollection = {
  __typename?: 'SupportViveRelationResponseCollection';
  data: Array<SupportViveEntity>;
};

export type ThuThachThuanChay = {
  __typename?: 'ThuThachThuanChay';
  challengeContent?: Maybe<Array<Maybe<ComponentSectionListText>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ThuThachThuanChayRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionListBenefitsFromVegan?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  sectionListConsultants?: Maybe<Array<Maybe<ComponentSectionPerson>>>;
  sectionListNHCoaches?: Maybe<Array<Maybe<ComponentSectionPerson>>>;
  sectionListPartners?: Maybe<Array<Maybe<ComponentSectionPartner>>>;
  sectionListQuestions?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  sectionListReviews?: Maybe<Array<Maybe<ComponentSectionPerson>>>;
  sectionListWaysToJoinChallenge?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  titleListQuestions?: Maybe<Scalars['String']['output']>;
  titleNutritionHealthCoaches?: Maybe<Scalars['String']['output']>;
  titleOurConsultants?: Maybe<Scalars['String']['output']>;
  titlePartners?: Maybe<Scalars['String']['output']>;
  titleVeganChallenge?: Maybe<Scalars['String']['output']>;
  titleWaysToJoinChallenge?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  veganParticipant?: Maybe<Scalars['String']['output']>;
};

export type ThuThachThuanChayChallengeContentArgs = {
  filters?: InputMaybe<ComponentSectionListTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListBenefitsFromVeganArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListConsultantsArgs = {
  filters?: InputMaybe<ComponentSectionPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListNhCoachesArgs = {
  filters?: InputMaybe<ComponentSectionPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListPartnersArgs = {
  filters?: InputMaybe<ComponentSectionPartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListQuestionsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListReviewsArgs = {
  filters?: InputMaybe<ComponentSectionPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChaySectionListWaysToJoinChallengeArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThuThachThuanChayEntity = {
  __typename?: 'ThuThachThuanChayEntity';
  attributes?: Maybe<ThuThachThuanChay>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ThuThachThuanChayEntityResponse = {
  __typename?: 'ThuThachThuanChayEntityResponse';
  data?: Maybe<ThuThachThuanChayEntity>;
};

export type ThuThachThuanChayInput = {
  challengeContent?: InputMaybe<
    Array<InputMaybe<ComponentSectionListTextInput>>
  >;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionListBenefitsFromVegan?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  sectionListConsultants?: InputMaybe<
    Array<InputMaybe<ComponentSectionPersonInput>>
  >;
  sectionListNHCoaches?: InputMaybe<
    Array<InputMaybe<ComponentSectionPersonInput>>
  >;
  sectionListPartners?: InputMaybe<
    Array<InputMaybe<ComponentSectionPartnerInput>>
  >;
  sectionListQuestions?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  sectionListReviews?: InputMaybe<
    Array<InputMaybe<ComponentSectionPersonInput>>
  >;
  sectionListWaysToJoinChallenge?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  titleListQuestions?: InputMaybe<Scalars['String']['input']>;
  titleNutritionHealthCoaches?: InputMaybe<Scalars['String']['input']>;
  titleOurConsultants?: InputMaybe<Scalars['String']['input']>;
  titlePartners?: InputMaybe<Scalars['String']['input']>;
  titleVeganChallenge?: InputMaybe<Scalars['String']['input']>;
  titleWaysToJoinChallenge?: InputMaybe<Scalars['String']['input']>;
  veganParticipant?: InputMaybe<Scalars['String']['input']>;
};

export type ThuThachThuanChayRelationResponseCollection = {
  __typename?: 'ThuThachThuanChayRelationResponseCollection';
  data: Array<ThuThachThuanChayEntity>;
};

export type TrackingInfo = {
  __typename?: 'TrackingInfo';
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type TrackingList = {
  __typename?: 'TrackingList';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TrackingListEntity = {
  __typename?: 'TrackingListEntity';
  attributes?: Maybe<TrackingList>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TrackingListEntityResponse = {
  __typename?: 'TrackingListEntityResponse';
  data?: Maybe<TrackingListEntity>;
};

export type TrackingListEntityResponseCollection = {
  __typename?: 'TrackingListEntityResponseCollection';
  data: Array<TrackingListEntity>;
  meta: ResponseCollectionMeta;
};

export type TrackingListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TrackingListFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TrackingListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TrackingListFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TrackingListInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VLabel = {
  __typename?: 'VLabel';
  content?: Maybe<Scalars['String']['output']>;
  contentImage1?: Maybe<UploadFileEntityResponse>;
  contentTitle1?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hyperlink?: Maybe<Scalars['String']['output']>;
  listLogos?: Maybe<Array<Maybe<ComponentSectionLogo>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VLabelRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  titleListLogos?: Maybe<Scalars['String']['output']>;
  txtButton?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VLabelListLogosArgs = {
  filters?: InputMaybe<ComponentSectionLogoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VLabelEntity = {
  __typename?: 'VLabelEntity';
  attributes?: Maybe<VLabel>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VLabelEntityResponse = {
  __typename?: 'VLabelEntityResponse';
  data?: Maybe<VLabelEntity>;
};

export type VLabelInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentImage1?: InputMaybe<Scalars['ID']['input']>;
  contentTitle1?: InputMaybe<Scalars['String']['input']>;
  hyperlink?: InputMaybe<Scalars['String']['input']>;
  listLogos?: InputMaybe<Array<InputMaybe<ComponentSectionLogoInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  titleListLogos?: InputMaybe<Scalars['String']['input']>;
  txtButton?: InputMaybe<Scalars['String']['input']>;
};

export type VLabelRelationResponseCollection = {
  __typename?: 'VLabelRelationResponseCollection';
  data: Array<VLabelEntity>;
};

export type VeChungToi = {
  __typename?: 'VeChungToi';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VeChungToiRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionAboutUs?: Maybe<ComponentSectionSection>;
  sectionImpactOfVegan?: Maybe<ComponentSectionSection>;
  sectionListActivities?: Maybe<Array<Maybe<ComponentSectionActivity>>>;
  sectionListImpacts?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titleOurActivities?: Maybe<Scalars['String']['output']>;
  titlePage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VeChungToiSectionListActivitiesArgs = {
  filters?: InputMaybe<ComponentSectionActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VeChungToiSectionListImpactsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VeChungToiEntity = {
  __typename?: 'VeChungToiEntity';
  attributes?: Maybe<VeChungToi>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VeChungToiEntityResponse = {
  __typename?: 'VeChungToiEntityResponse';
  data?: Maybe<VeChungToiEntity>;
};

export type VeChungToiInput = {
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionAboutUs?: InputMaybe<ComponentSectionSectionInput>;
  sectionImpactOfVegan?: InputMaybe<ComponentSectionSectionInput>;
  sectionListActivities?: InputMaybe<
    Array<InputMaybe<ComponentSectionActivityInput>>
  >;
  sectionListImpacts?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titleOurActivities?: InputMaybe<Scalars['String']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
};

export type VeChungToiRelationResponseCollection = {
  __typename?: 'VeChungToiRelationResponseCollection';
  data: Array<VeChungToiEntity>;
};

export type Volunteer = {
  __typename?: 'Volunteer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionApplyToVolunteer?: Maybe<Scalars['String']['output']>;
  descriptionPage?: Maybe<Scalars['String']['output']>;
  linkApplyToVolunteer?: Maybe<Scalars['String']['output']>;
  listFaqs?: Maybe<Array<Maybe<ComponentSectionFaq>>>;
  listVolunteerImages?: Maybe<Array<Maybe<ComponentSectionImage>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VolunteerRelationResponseCollection>;
  pageName: Scalars['String']['output'];
  sectionListHelpUs?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  sectionVolunteerPerks?: Maybe<Array<Maybe<ComponentSectionSection>>>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  textButtonApplyToVolunteer?: Maybe<Scalars['String']['output']>;
  thumbnail: UploadFileEntityResponse;
  titleApplyToVolunteer?: Maybe<Scalars['String']['output']>;
  titleFaq?: Maybe<Scalars['String']['output']>;
  titleHelpUs?: Maybe<Scalars['String']['output']>;
  titlePage?: Maybe<Scalars['String']['output']>;
  titleVolunteerPerks?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VolunteerListFaqsArgs = {
  filters?: InputMaybe<ComponentSectionFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VolunteerListVolunteerImagesArgs = {
  filters?: InputMaybe<ComponentSectionImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VolunteerSectionListHelpUsArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VolunteerSectionVolunteerPerksArgs = {
  filters?: InputMaybe<ComponentSectionSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VolunteerEntity = {
  __typename?: 'VolunteerEntity';
  attributes?: Maybe<Volunteer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VolunteerEntityResponse = {
  __typename?: 'VolunteerEntityResponse';
  data?: Maybe<VolunteerEntity>;
};

export type VolunteerInput = {
  descriptionApplyToVolunteer?: InputMaybe<Scalars['String']['input']>;
  descriptionPage?: InputMaybe<Scalars['String']['input']>;
  linkApplyToVolunteer?: InputMaybe<Scalars['String']['input']>;
  listFaqs?: InputMaybe<Array<InputMaybe<ComponentSectionFaqInput>>>;
  listVolunteerImages?: InputMaybe<
    Array<InputMaybe<ComponentSectionImageInput>>
  >;
  pageName?: InputMaybe<Scalars['String']['input']>;
  sectionListHelpUs?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  sectionVolunteerPerks?: InputMaybe<
    Array<InputMaybe<ComponentSectionSectionInput>>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  textButtonApplyToVolunteer?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  titleApplyToVolunteer?: InputMaybe<Scalars['String']['input']>;
  titleFaq?: InputMaybe<Scalars['String']['input']>;
  titleHelpUs?: InputMaybe<Scalars['String']['input']>;
  titlePage?: InputMaybe<Scalars['String']['input']>;
  titleVolunteerPerks?: InputMaybe<Scalars['String']['input']>;
};

export type VolunteerRelationResponseCollection = {
  __typename?: 'VolunteerRelationResponseCollection';
  data: Array<VolunteerEntity>;
};

export type GetAnChoTuongLaiQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetAnChoTuongLaiQuery = {
  __typename?: 'Query';
  anChoTuongLai?: {
    __typename?: 'AnChoTuongLaiEntityResponse';
    data?: {
      __typename?: 'AnChoTuongLaiEntity';
      attributes?: {
        __typename?: 'AnChoTuongLai';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleOurActivities?: string | null;
        titleListLogos?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionAboutUs?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionImpactOfVegan?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionListImpacts?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListActivities?: Array<{
          __typename?: 'ComponentSectionActivity';
          title?: string | null;
          date?: any | null;
          hyperlink?: string | null;
          thumbnail: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        listLogos?: Array<{
          __typename?: 'ComponentSectionLogo';
          brandName?: string | null;
          hyperlink?: string | null;
          logo: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetBanCanBietQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetBanCanBietQuery = {
  __typename?: 'Query';
  banCanBiet?: {
    __typename?: 'BanCanBietEntityResponse';
    data?: {
      __typename?: 'BanCanBietEntity';
      attributes?: {
        __typename?: 'BanCanBiet';
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleWhatIsVegan?: string | null;
        descriptionWhatIsVegan?: string | null;
        titleWhyVegan?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionReasons?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetDoiNguSongThuanChayQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetDoiNguSongThuanChayQuery = {
  __typename?: 'Query';
  doiNguSongThuanChay?: {
    __typename?: 'DoiNguSongThuanChayEntityResponse';
    data?: {
      __typename?: 'DoiNguSongThuanChayEntity';
      attributes?: {
        __typename?: 'DoiNguSongThuanChay';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleJoinVive?: string | null;
        descriptionJoinVive?: string | null;
        titleSupportVive?: string | null;
        descriptionSupportVive?: string | null;
        titleTeamVive?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionListMembers?: Array<{
          __typename?: 'ComponentSectionPerson';
          name: string;
          introduction?: string | null;
          avatar: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type FileFragment = {
  __typename?: 'UploadFileEntityResponse';
  data?: {
    __typename?: 'UploadFileEntity';
    attributes?: {
      __typename?: 'UploadFile';
      url: string;
      name: string;
      caption?: string | null;
    } | null;
  } | null;
};

export type PhotoUrlFragment = {
  __typename?: 'UploadFileEntityResponse';
  data?: {
    __typename?: 'UploadFileEntity';
    attributes?: {
      __typename?: 'UploadFile';
      url: string;
      caption?: string | null;
    } | null;
  } | null;
};

export type SectionFragment = {
  __typename?: 'ComponentSectionSection';
  title: string;
  description?: string | null;
  hyperlink?: string | null;
  photo?: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  } | null;
};

export type PersonFragment = {
  __typename?: 'ComponentSectionPerson';
  name: string;
  introduction?: string | null;
  avatar: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type PartnerFragment = {
  __typename?: 'ComponentSectionPartner';
  hyperlink?: string | null;
  name?: string | null;
  logo: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type ActivityFragment = {
  __typename?: 'ComponentSectionActivity';
  title?: string | null;
  date?: any | null;
  hyperlink?: string | null;
  thumbnail: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type SeoFragment = {
  __typename?: 'ComponentSharedSeo';
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: { __typename?: 'UploadFile'; url: string } | null;
    } | null;
  } | null;
};

export type ReviewCardFragment = {
  __typename?: 'Review';
  title?: string | null;
  shortDescription?: string | null;
  slug?: string | null;
  tags?: any | null;
  thumbnail: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: { __typename?: 'UploadFile'; url: string } | null;
    } | null;
  };
};

export type RecipeCardFragment = {
  __typename?: 'Recipe';
  title?: string | null;
  slug?: string | null;
  prepareTime?: number | null;
  cookingTime: number;
  thumbnail: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: { __typename?: 'UploadFile'; url: string } | null;
    } | null;
  };
};

export type PostCardFragment = {
  __typename?: 'Post';
  title?: string | null;
  shortDescription?: string | null;
  slug?: string | null;
  minuteRead: number;
  tags?: any | null;
  thumbnail: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: { __typename?: 'UploadFile'; url: string } | null;
    } | null;
  };
  category?: {
    __typename?: 'CategoryEntityResponse';
    data?: {
      __typename?: 'CategoryEntity';
      attributes?: { __typename?: 'Category'; slug?: string | null } | null;
    } | null;
  } | null;
};

export type RecipeDetailFragment = {
  __typename?: 'Recipe';
  slug?: string | null;
  title?: string | null;
  content?: string | null;
  prepareTime?: number | null;
  cookingTime: number;
  portionSize?: string | null;
  author?: string | null;
  referenceInformation?: string | null;
  banner: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type PostDetailFragment = {
  __typename?: 'Post';
  slug?: string | null;
  title?: string | null;
  content?: string | null;
  minuteRead: number;
  author?: string | null;
  banner: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type ReviewDetailFragment = {
  __typename?: 'Review';
  slug?: string | null;
  title?: string | null;
  content?: string | null;
  minuteRead: number;
  author?: string | null;
  banner: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type SinglePageFragment = {
  __typename?: 'ComponentSectionSinglePage';
  title?: string | null;
  content?: string | null;
};

export type SearchPostFragment = {
  __typename?: 'Post';
  slug?: string | null;
  title?: string | null;
  thumbnail: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: { __typename?: 'UploadFile'; url: string } | null;
    } | null;
  };
  category?: {
    __typename?: 'CategoryEntityResponse';
    data?: {
      __typename?: 'CategoryEntity';
      attributes?: { __typename?: 'Category'; slug?: string | null } | null;
    } | null;
  } | null;
};

export type MetaPostFragment = {
  __typename?: 'ResponseCollectionMeta';
  pagination: {
    __typename?: 'Pagination';
    total: number;
    pageSize: number;
    pageCount: number;
    page: number;
  };
};

export type ListTextFragment = {
  __typename?: 'ComponentSectionListText';
  title?: string | null;
};

export type LogoDetailFragment = {
  __typename?: 'ComponentSectionLogo';
  brandName?: string | null;
  hyperlink?: string | null;
  logo: {
    __typename?: 'UploadFileEntityResponse';
    data?: {
      __typename?: 'UploadFileEntity';
      attributes?: {
        __typename?: 'UploadFile';
        url: string;
        caption?: string | null;
      } | null;
    } | null;
  };
};

export type GetGeneralLayoutQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetGeneralLayoutQuery = {
  __typename?: 'Query';
  generalLayout?: {
    __typename?: 'GeneralLayoutEntityResponse';
    data?: {
      __typename?: 'GeneralLayoutEntity';
      attributes?: {
        __typename?: 'GeneralLayout';
        helperRegisterTitle?: string | null;
        helperRegisterDescription?: string | null;
        helperContactTitle?: string | null;
        helperContactDescription?: string | null;
        helperBackground: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
      } | null;
    } | null;
  } | null;
};

export type GetDonationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetDonationQuery = {
  __typename?: 'Query';
  donation?: {
    __typename?: 'DonationEntityResponse';
    data?: {
      __typename?: 'DonationEntity';
      attributes?: {
        __typename?: 'Donation';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionAboutUs?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetHomePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetHomePageQuery = {
  __typename?: 'Query';
  homePage?: {
    __typename?: 'HomePageEntityResponse';
    data?: {
      __typename?: 'HomePageEntity';
      attributes?: {
        __typename?: 'HomePage';
        titleValuesOfVegan?: string | null;
        hyperlinkSeeMoreValuesOfVegan?: string | null;
        titleMoreTopics?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionWhyNeedVegan?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionWhatWeDone?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionListValuesOfVegan?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListMoreTopics?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetListReviewsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
}>;

export type GetListReviewsQuery = {
  __typename?: 'Query';
  reviews?: {
    __typename?: 'ReviewEntityResponseCollection';
    data: Array<{
      __typename?: 'ReviewEntity';
      attributes?: {
        __typename?: 'Review';
        title?: string | null;
        shortDescription?: string | null;
        slug?: string | null;
        tags?: any | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetListRecipesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
}>;

export type GetListRecipesQuery = {
  __typename?: 'Query';
  recipes?: {
    __typename?: 'RecipeEntityResponseCollection';
    data: Array<{
      __typename?: 'RecipeEntity';
      attributes?: {
        __typename?: 'Recipe';
        title?: string | null;
        slug?: string | null;
        prepareTime?: number | null;
        cookingTime: number;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetListPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  exceptIds?: InputMaybe<
    | Array<InputMaybe<Scalars['ID']['input']>>
    | InputMaybe<Scalars['ID']['input']>
  >;
}>;

export type GetListPostsQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Post';
        title?: string | null;
        shortDescription?: string | null;
        slug?: string | null;
        minuteRead: number;
        tags?: any | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
        category?: {
          __typename?: 'CategoryEntityResponse';
          data?: {
            __typename?: 'CategoryEntity';
            attributes?: {
              __typename?: 'Category';
              slug?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetListPostsEnQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  exceptIds?: InputMaybe<
    | Array<InputMaybe<Scalars['ID']['input']>>
    | InputMaybe<Scalars['ID']['input']>
  >;
}>;

export type GetListPostsEnQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Post';
        localizations?: {
          __typename?: 'PostRelationResponseCollection';
          data: Array<{
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Post';
              title?: string | null;
              shortDescription?: string | null;
              slug?: string | null;
              minuteRead: number;
              tags?: any | null;
              thumbnail: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                  } | null;
                } | null;
              };
              category?: {
                __typename?: 'CategoryEntityResponse';
                data?: {
                  __typename?: 'CategoryEntity';
                  attributes?: {
                    __typename?: 'Category';
                    slug?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetListPostsByCategorySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  exceptIds?: InputMaybe<
    | Array<InputMaybe<Scalars['ID']['input']>>
    | InputMaybe<Scalars['ID']['input']>
  >;
}>;

export type GetListPostsByCategorySlugQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Post';
        title?: string | null;
        shortDescription?: string | null;
        slug?: string | null;
        minuteRead: number;
        tags?: any | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
        category?: {
          __typename?: 'CategoryEntityResponse';
          data?: {
            __typename?: 'CategoryEntity';
            attributes?: {
              __typename?: 'Category';
              slug?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetSearchPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  word: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetSearchPostsQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      attributes?: {
        __typename?: 'Post';
        slug?: string | null;
        title?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        };
        category?: {
          __typename?: 'CategoryEntityResponse';
          data?: {
            __typename?: 'CategoryEntity';
            attributes?: {
              __typename?: 'Category';
              slug?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetListPostsByCategorySlugEnQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  exceptIds?: InputMaybe<
    | Array<InputMaybe<Scalars['ID']['input']>>
    | InputMaybe<Scalars['ID']['input']>
  >;
}>;

export type GetListPostsByCategorySlugEnQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Post';
        localizations?: {
          __typename?: 'PostRelationResponseCollection';
          data: Array<{
            __typename?: 'PostEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Post';
              title?: string | null;
              shortDescription?: string | null;
              slug?: string | null;
              minuteRead: number;
              tags?: any | null;
              thumbnail: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                  } | null;
                } | null;
              };
              category?: {
                __typename?: 'CategoryEntityResponse';
                data?: {
                  __typename?: 'CategoryEntity';
                  attributes?: {
                    __typename?: 'Category';
                    slug?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetReviewsByEnQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
}>;

export type GetReviewsByEnQuery = {
  __typename?: 'Query';
  reviews?: {
    __typename?: 'ReviewEntityResponseCollection';
    data: Array<{
      __typename?: 'ReviewEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Review';
        localizations?: {
          __typename?: 'ReviewRelationResponseCollection';
          data: Array<{
            __typename?: 'ReviewEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Review';
              title?: string | null;
              shortDescription?: string | null;
              slug?: string | null;
              tags?: any | null;
              thumbnail: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                  } | null;
                } | null;
              };
            } | null;
          }>;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetListRecipesByEnQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
}>;

export type GetListRecipesByEnQuery = {
  __typename?: 'Query';
  recipes?: {
    __typename?: 'RecipeEntityResponseCollection';
    data: Array<{
      __typename?: 'RecipeEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Recipe';
        localizations?: {
          __typename?: 'RecipeRelationResponseCollection';
          data: Array<{
            __typename?: 'RecipeEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Recipe';
              title?: string | null;
              slug?: string | null;
              prepareTime?: number | null;
              cookingTime: number;
              thumbnail: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                  } | null;
                } | null;
              };
            } | null;
          }>;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageSize: number;
        pageCount: number;
        page: number;
      };
    };
  } | null;
};

export type GetMembershipQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetMembershipQuery = {
  __typename?: 'Query';
  membership?: {
    __typename?: 'MembershipEntityResponse';
    data?: {
      __typename?: 'MembershipEntity';
      attributes?: {
        __typename?: 'Membership';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        textLink1?: string | null;
        link1?: string | null;
        textDescription2?: string | null;
        textLink2?: string | null;
        link2?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionAboutUs?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionImpactOfVegan?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionListImpacts?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetNhungCauHoiThuongGapQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetNhungCauHoiThuongGapQuery = {
  __typename?: 'Query';
  nhungCauHoiThuongGap?: {
    __typename?: 'NhungCauHoiThuongGapEntityResponse';
    data?: {
      __typename?: 'NhungCauHoiThuongGapEntity';
      attributes?: {
        __typename?: 'NhungCauHoiThuongGap';
        titleFaqs?: string | null;
        title7VeganChallenge?: string | null;
        sectionListFaqs?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetPhimQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetPhimQuery = {
  __typename?: 'Query';
  phim?: {
    __typename?: 'PhimEntityResponse';
    data?: {
      __typename?: 'PhimEntity';
      attributes?: {
        __typename?: 'Phim';
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleWhatIsVegan?: string | null;
        descriptionWhatIsVegan?: string | null;
        titleWhyVegan?: string | null;
        exploreMoreLink?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionReasons?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetPostDetailBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetPostDetailBySlugQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      attributes?: {
        __typename?: 'Post';
        slug?: string | null;
        title?: string | null;
        content?: string | null;
        minuteRead: number;
        author?: string | null;
        banner: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
      } | null;
    }>;
  } | null;
};

export type GetRecipeDetailBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetRecipeDetailBySlugQuery = {
  __typename?: 'Query';
  recipes?: {
    __typename?: 'RecipeEntityResponseCollection';
    data: Array<{
      __typename?: 'RecipeEntity';
      attributes?: {
        __typename?: 'Recipe';
        slug?: string | null;
        title?: string | null;
        content?: string | null;
        prepareTime?: number | null;
        cookingTime: number;
        portionSize?: string | null;
        author?: string | null;
        referenceInformation?: string | null;
        banner: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
      } | null;
    }>;
  } | null;
};

export type GetReviewDetailBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetReviewDetailBySlugQuery = {
  __typename?: 'Query';
  reviews?: {
    __typename?: 'ReviewEntityResponseCollection';
    data: Array<{
      __typename?: 'ReviewEntity';
      attributes?: {
        __typename?: 'Review';
        slug?: string | null;
        title?: string | null;
        content?: string | null;
        minuteRead: number;
        author?: string | null;
        banner: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
      } | null;
    }>;
  } | null;
};

export type GetDieuKhoanDieuKienQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetDieuKhoanDieuKienQuery = {
  __typename?: 'Query';
  dieuKhoanDieuKien?: {
    __typename?: 'DieuKhoanDieuKienEntityResponse';
    data?: {
      __typename?: 'DieuKhoanDieuKienEntity';
      attributes?: {
        __typename?: 'DieuKhoanDieuKien';
        Page?: {
          __typename?: 'ComponentSectionSinglePage';
          title?: string | null;
          content?: string | null;
        } | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetChinhSachBaoMatQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetChinhSachBaoMatQuery = {
  __typename?: 'Query';
  chinhSachBaoMat?: {
    __typename?: 'ChinhSachBaoMatEntityResponse';
    data?: {
      __typename?: 'ChinhSachBaoMatEntity';
      attributes?: {
        __typename?: 'ChinhSachBaoMat';
        Page?: {
          __typename?: 'ComponentSectionSinglePage';
          title?: string | null;
          content?: string | null;
        } | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetChinhSachLienKetQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetChinhSachLienKetQuery = {
  __typename?: 'Query';
  chinhSachLienKet?: {
    __typename?: 'ChinhSachLienKetEntityResponse';
    data?: {
      __typename?: 'ChinhSachLienKetEntity';
      attributes?: {
        __typename?: 'ChinhSachLienKet';
        Page?: {
          __typename?: 'ComponentSectionSinglePage';
          title?: string | null;
          content?: string | null;
        } | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetCamNangBoTuiQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetCamNangBoTuiQuery = {
  __typename?: 'Query';
  camNangBoTui?: {
    __typename?: 'CamNangBoTuiEntityResponse';
    data?: {
      __typename?: 'CamNangBoTuiEntity';
      attributes?: {
        __typename?: 'CamNangBoTui';
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetPocketBookQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetPocketBookQuery = {
  __typename?: 'Query';
  pocketBook?: {
    __typename?: 'PocketBookEntityResponse';
    data?: {
      __typename?: 'PocketBookEntity';
      attributes?: {
        __typename?: 'PocketBook';
        sectionBookTitle?: string | null;
        qrCode?: string | null;
        book?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              name: string;
              caption?: string | null;
            } | null;
          } | null;
        } | null;
        sectionBookImage?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        } | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetLienHeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetLienHeQuery = {
  __typename?: 'Query';
  lienHe?: {
    __typename?: 'LienHeEntityResponse';
    data?: {
      __typename?: 'LienHeEntity';
      attributes?: {
        __typename?: 'LienHe';
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type SubscribeListSubscribersMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;

export type SubscribeListSubscribersMutation = {
  __typename?: 'Mutation';
  subscribeListSubscribers?: {
    __typename?: 'Contact';
    email: string;
    name?: string | null;
  } | null;
};

export type SubscribeChallengeMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
}>;

export type SubscribeChallengeMutation = {
  __typename?: 'Mutation';
  subscribeChallenge?: {
    __typename?: 'Contact';
    email: string;
    name?: string | null;
  } | null;
};

export type SubscribeEBookMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
}>;

export type SubscribeEBookMutation = {
  __typename?: 'Mutation';
  subscribeEBook?: {
    __typename?: 'Contact';
    email: string;
    name?: string | null;
  } | null;
};

export type SubscribeContactMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  age: Scalars['String']['input'];
  message: Scalars['String']['input'];
}>;

export type SubscribeContactMutation = {
  __typename?: 'Mutation';
  subscribeContact?: {
    __typename?: 'Contact';
    email: string;
    name?: string | null;
  } | null;
};

export type GetSupportViveQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSupportViveQuery = {
  __typename?: 'Query';
  supportVive?: {
    __typename?: 'SupportViveEntityResponse';
    data?: {
      __typename?: 'SupportViveEntity';
      attributes?: {
        __typename?: 'SupportVive';
        content?: string | null;
        txtButton?: string | null;
        hyperlink?: string | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type DownloadPocketBookMutationVariables = Exact<{
  data: DownloadBookInput;
}>;

export type DownloadPocketBookMutation = {
  __typename?: 'Mutation';
  downloadPocketBook?: {
    __typename?: 'TrackingInfo';
    email: string;
    link: string;
    date: string;
  } | null;
};

export type GetThuThachThuanChayQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetThuThachThuanChayQuery = {
  __typename?: 'Query';
  thuThachThuanChay?: {
    __typename?: 'ThuThachThuanChayEntityResponse';
    data?: {
      __typename?: 'ThuThachThuanChayEntity';
      attributes?: {
        __typename?: 'ThuThachThuanChay';
        titleVeganChallenge?: string | null;
        veganParticipant?: string | null;
        titleWaysToJoinChallenge?: string | null;
        titleNutritionHealthCoaches?: string | null;
        titleOurConsultants?: string | null;
        titleListQuestions?: string | null;
        titlePartners?: string | null;
        challengeContent?: Array<{
          __typename?: 'ComponentSectionListText';
          title?: string | null;
        } | null> | null;
        sectionListBenefitsFromVegan?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListWaysToJoinChallenge?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListNHCoaches?: Array<{
          __typename?: 'ComponentSectionPerson';
          name: string;
          introduction?: string | null;
          avatar: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        sectionListConsultants?: Array<{
          __typename?: 'ComponentSectionPerson';
          name: string;
          introduction?: string | null;
          avatar: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        sectionListReviews?: Array<{
          __typename?: 'ComponentSectionPerson';
          name: string;
          introduction?: string | null;
          avatar: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        sectionListQuestions?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListPartners?: Array<{
          __typename?: 'ComponentSectionPartner';
          hyperlink?: string | null;
          name?: string | null;
          logo: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetVeganChallengeHomeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetVeganChallengeHomeQuery = {
  __typename?: 'Query';
  thuThachThuanChay?: {
    __typename?: 'ThuThachThuanChayEntityResponse';
    data?: {
      __typename?: 'ThuThachThuanChayEntity';
      attributes?: {
        __typename?: 'ThuThachThuanChay';
        titleVeganChallenge?: string | null;
        veganParticipant?: string | null;
      } | null;
    } | null;
  } | null;
};

export type GetVLabelQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetVLabelQuery = {
  __typename?: 'Query';
  vLabel?: {
    __typename?: 'VLabelEntityResponse';
    data?: {
      __typename?: 'VLabelEntity';
      attributes?: {
        __typename?: 'VLabel';
        contentTitle1?: string | null;
        content?: string | null;
        txtButton?: string | null;
        hyperlink?: string | null;
        titleListLogos?: string | null;
        contentImage1?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        } | null;
        listLogos?: Array<{
          __typename?: 'ComponentSectionLogo';
          brandName?: string | null;
          hyperlink?: string | null;
          logo: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetVeChungToiQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetVeChungToiQuery = {
  __typename?: 'Query';
  veChungToi?: {
    __typename?: 'VeChungToiEntityResponse';
    data?: {
      __typename?: 'VeChungToiEntity';
      attributes?: {
        __typename?: 'VeChungToi';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleOurActivities?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionAboutUs?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionImpactOfVegan?: {
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null;
        sectionListImpacts?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        sectionListActivities?: Array<{
          __typename?: 'ComponentSectionActivity';
          title?: string | null;
          date?: any | null;
          hyperlink?: string | null;
          thumbnail: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetVolunteerQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetVolunteerQuery = {
  __typename?: 'Query';
  volunteer?: {
    __typename?: 'VolunteerEntityResponse';
    data?: {
      __typename?: 'VolunteerEntity';
      attributes?: {
        __typename?: 'Volunteer';
        pageName: string;
        titlePage?: string | null;
        descriptionPage?: string | null;
        titleHelpUs?: string | null;
        titleVolunteerPerks?: string | null;
        titleApplyToVolunteer?: string | null;
        descriptionApplyToVolunteer?: string | null;
        textButtonApplyToVolunteer?: string | null;
        linkApplyToVolunteer?: string | null;
        titleFaq?: string | null;
        thumbnail: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              caption?: string | null;
            } | null;
          } | null;
        };
        sectionListHelpUs?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        listVolunteerImages?: Array<{
          __typename?: 'ComponentSectionImage';
          hyperlink?: string | null;
          image: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          };
        } | null> | null;
        sectionVolunteerPerks?: Array<{
          __typename?: 'ComponentSectionSection';
          title: string;
          description?: string | null;
          hyperlink?: string | null;
          photo?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                caption?: string | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
        listFaqs?: Array<{
          __typename?: 'ComponentSectionFaq';
          question: string;
          answer: string;
        } | null> | null;
        seo?: {
          __typename?: 'ComponentSharedSeo';
          metaTitle: string;
          metaDescription: string;
          metaImage?: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              attributes?: { __typename?: 'UploadFile'; url: string } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export const FileFragmentDoc = gql`
  fragment File on UploadFileEntityResponse {
    data {
      attributes {
        url
        name
        caption
      }
    }
  }
`;
export const PhotoUrlFragmentDoc = gql`
  fragment PhotoUrl on UploadFileEntityResponse {
    data {
      attributes {
        url
        caption
      }
    }
  }
`;
export const SectionFragmentDoc = gql`
  fragment Section on ComponentSectionSection {
    title
    description
    photo {
      ...PhotoUrl
    }
    hyperlink
  }
  ${PhotoUrlFragmentDoc}
`;
export const PersonFragmentDoc = gql`
  fragment Person on ComponentSectionPerson {
    name
    avatar {
      ...PhotoUrl
    }
    introduction
  }
  ${PhotoUrlFragmentDoc}
`;
export const PartnerFragmentDoc = gql`
  fragment Partner on ComponentSectionPartner {
    logo {
      ...PhotoUrl
    }
    hyperlink
    name
  }
  ${PhotoUrlFragmentDoc}
`;
export const ActivityFragmentDoc = gql`
  fragment Activity on ComponentSectionActivity {
    thumbnail {
      ...PhotoUrl
    }
    title
    date
    hyperlink
  }
  ${PhotoUrlFragmentDoc}
`;
export const SeoFragmentDoc = gql`
  fragment Seo on ComponentSharedSeo {
    metaTitle
    metaDescription
    metaImage {
      data {
        attributes {
          url
        }
      }
    }
  }
`;
export const ReviewCardFragmentDoc = gql`
  fragment ReviewCard on Review {
    title
    shortDescription
    slug
    tags
    thumbnail {
      data {
        attributes {
          url
        }
      }
    }
  }
`;
export const RecipeCardFragmentDoc = gql`
  fragment RecipeCard on Recipe {
    title
    slug
    prepareTime
    cookingTime
    thumbnail {
      data {
        attributes {
          url
        }
      }
    }
  }
`;
export const PostCardFragmentDoc = gql`
  fragment PostCard on Post {
    title
    shortDescription
    slug
    minuteRead
    tags
    thumbnail {
      data {
        attributes {
          url
        }
      }
    }
    category {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
export const RecipeDetailFragmentDoc = gql`
  fragment RecipeDetail on Recipe {
    slug
    title
    content
    prepareTime
    cookingTime
    portionSize
    author
    referenceInformation
    banner {
      ...PhotoUrl
    }
  }
  ${PhotoUrlFragmentDoc}
`;
export const PostDetailFragmentDoc = gql`
  fragment PostDetail on Post {
    slug
    title
    content
    minuteRead
    author
    banner {
      ...PhotoUrl
    }
  }
  ${PhotoUrlFragmentDoc}
`;
export const ReviewDetailFragmentDoc = gql`
  fragment ReviewDetail on Review {
    slug
    title
    content
    minuteRead
    author
    banner {
      ...PhotoUrl
    }
  }
  ${PhotoUrlFragmentDoc}
`;
export const SinglePageFragmentDoc = gql`
  fragment SinglePage on ComponentSectionSinglePage {
    title
    content
  }
`;
export const SearchPostFragmentDoc = gql`
  fragment SearchPost on Post {
    slug
    title
    thumbnail {
      data {
        attributes {
          url
        }
      }
    }
    category {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
export const MetaPostFragmentDoc = gql`
  fragment MetaPost on ResponseCollectionMeta {
    pagination {
      total
      pageSize
      pageCount
      page
    }
  }
`;
export const ListTextFragmentDoc = gql`
  fragment ListText on ComponentSectionListText {
    title
  }
`;
export const LogoDetailFragmentDoc = gql`
  fragment LogoDetail on ComponentSectionLogo {
    brandName
    logo {
      ...PhotoUrl
    }
    hyperlink
  }
  ${PhotoUrlFragmentDoc}
`;
export const GetAnChoTuongLaiDocument = gql`
  query GetAnChoTuongLai($locale: I18NLocaleCode) {
    anChoTuongLai(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          sectionAboutUs {
            ...Section
          }
          sectionImpactOfVegan {
            ...Section
          }
          sectionListImpacts {
            ...Section
          }
          titleOurActivities
          sectionListActivities {
            ...Activity
          }
          titleListLogos
          listLogos {
            ...LogoDetail
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${ActivityFragmentDoc}
  ${LogoDetailFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetAnChoTuongLaiQuery__
 *
 * To run a query within a React component, call `useGetAnChoTuongLaiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnChoTuongLaiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnChoTuongLaiQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetAnChoTuongLaiQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAnChoTuongLaiQuery, GetAnChoTuongLaiQueryVariables>(
    GetAnChoTuongLaiDocument,
    options,
  );
}
export function useGetAnChoTuongLaiLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >(GetAnChoTuongLaiDocument, options);
}
export function useGetAnChoTuongLaiSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAnChoTuongLaiQuery,
    GetAnChoTuongLaiQueryVariables
  >(GetAnChoTuongLaiDocument, options);
}
export type GetAnChoTuongLaiQueryHookResult = ReturnType<
  typeof useGetAnChoTuongLaiQuery
>;
export type GetAnChoTuongLaiLazyQueryHookResult = ReturnType<
  typeof useGetAnChoTuongLaiLazyQuery
>;
export type GetAnChoTuongLaiSuspenseQueryHookResult = ReturnType<
  typeof useGetAnChoTuongLaiSuspenseQuery
>;
export type GetAnChoTuongLaiQueryResult = Apollo.QueryResult<
  GetAnChoTuongLaiQuery,
  GetAnChoTuongLaiQueryVariables
>;
export const GetBanCanBietDocument = gql`
  query GetBanCanBiet($locale: I18NLocaleCode) {
    banCanBiet(locale: $locale) {
      data {
        attributes {
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          titleWhatIsVegan
          descriptionWhatIsVegan
          titleWhyVegan
          sectionReasons {
            ...Section
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetBanCanBietQuery__
 *
 * To run a query within a React component, call `useGetBanCanBietQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBanCanBietQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBanCanBietQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetBanCanBietQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBanCanBietQuery,
    GetBanCanBietQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBanCanBietQuery, GetBanCanBietQueryVariables>(
    GetBanCanBietDocument,
    options,
  );
}
export function useGetBanCanBietLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBanCanBietQuery,
    GetBanCanBietQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBanCanBietQuery, GetBanCanBietQueryVariables>(
    GetBanCanBietDocument,
    options,
  );
}
export function useGetBanCanBietSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBanCanBietQuery,
    GetBanCanBietQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetBanCanBietQuery,
    GetBanCanBietQueryVariables
  >(GetBanCanBietDocument, options);
}
export type GetBanCanBietQueryHookResult = ReturnType<
  typeof useGetBanCanBietQuery
>;
export type GetBanCanBietLazyQueryHookResult = ReturnType<
  typeof useGetBanCanBietLazyQuery
>;
export type GetBanCanBietSuspenseQueryHookResult = ReturnType<
  typeof useGetBanCanBietSuspenseQuery
>;
export type GetBanCanBietQueryResult = Apollo.QueryResult<
  GetBanCanBietQuery,
  GetBanCanBietQueryVariables
>;
export const GetDoiNguSongThuanChayDocument = gql`
  query GetDoiNguSongThuanChay($locale: I18NLocaleCode) {
    doiNguSongThuanChay(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          titleJoinVive
          descriptionJoinVive
          titleSupportVive
          descriptionSupportVive
          titleTeamVive
          sectionListMembers {
            ...Person
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${PersonFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetDoiNguSongThuanChayQuery__
 *
 * To run a query within a React component, call `useGetDoiNguSongThuanChayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoiNguSongThuanChayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoiNguSongThuanChayQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetDoiNguSongThuanChayQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >(GetDoiNguSongThuanChayDocument, options);
}
export function useGetDoiNguSongThuanChayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >(GetDoiNguSongThuanChayDocument, options);
}
export function useGetDoiNguSongThuanChaySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetDoiNguSongThuanChayQuery,
    GetDoiNguSongThuanChayQueryVariables
  >(GetDoiNguSongThuanChayDocument, options);
}
export type GetDoiNguSongThuanChayQueryHookResult = ReturnType<
  typeof useGetDoiNguSongThuanChayQuery
>;
export type GetDoiNguSongThuanChayLazyQueryHookResult = ReturnType<
  typeof useGetDoiNguSongThuanChayLazyQuery
>;
export type GetDoiNguSongThuanChaySuspenseQueryHookResult = ReturnType<
  typeof useGetDoiNguSongThuanChaySuspenseQuery
>;
export type GetDoiNguSongThuanChayQueryResult = Apollo.QueryResult<
  GetDoiNguSongThuanChayQuery,
  GetDoiNguSongThuanChayQueryVariables
>;
export const GetGeneralLayoutDocument = gql`
  query GetGeneralLayout($locale: I18NLocaleCode) {
    generalLayout(locale: $locale) {
      data {
        attributes {
          helperRegisterTitle
          helperRegisterDescription
          helperBackground {
            ...PhotoUrl
          }
          helperContactTitle
          helperContactDescription
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
`;

/**
 * __useGetGeneralLayoutQuery__
 *
 * To run a query within a React component, call `useGetGeneralLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralLayoutQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetGeneralLayoutQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGeneralLayoutQuery,
    GetGeneralLayoutQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGeneralLayoutQuery, GetGeneralLayoutQueryVariables>(
    GetGeneralLayoutDocument,
    options,
  );
}
export function useGetGeneralLayoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralLayoutQuery,
    GetGeneralLayoutQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetGeneralLayoutQuery,
    GetGeneralLayoutQueryVariables
  >(GetGeneralLayoutDocument, options);
}
export function useGetGeneralLayoutSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetGeneralLayoutQuery,
    GetGeneralLayoutQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetGeneralLayoutQuery,
    GetGeneralLayoutQueryVariables
  >(GetGeneralLayoutDocument, options);
}
export type GetGeneralLayoutQueryHookResult = ReturnType<
  typeof useGetGeneralLayoutQuery
>;
export type GetGeneralLayoutLazyQueryHookResult = ReturnType<
  typeof useGetGeneralLayoutLazyQuery
>;
export type GetGeneralLayoutSuspenseQueryHookResult = ReturnType<
  typeof useGetGeneralLayoutSuspenseQuery
>;
export type GetGeneralLayoutQueryResult = Apollo.QueryResult<
  GetGeneralLayoutQuery,
  GetGeneralLayoutQueryVariables
>;
export const GetDonationDocument = gql`
  query GetDonation($locale: I18NLocaleCode) {
    donation(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          sectionAboutUs {
            ...Section
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetDonationQuery__
 *
 * To run a query within a React component, call `useGetDonationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDonationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDonationQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetDonationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDonationQuery,
    GetDonationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDonationQuery, GetDonationQueryVariables>(
    GetDonationDocument,
    options,
  );
}
export function useGetDonationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDonationQuery,
    GetDonationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDonationQuery, GetDonationQueryVariables>(
    GetDonationDocument,
    options,
  );
}
export function useGetDonationSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetDonationQuery,
    GetDonationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDonationQuery, GetDonationQueryVariables>(
    GetDonationDocument,
    options,
  );
}
export type GetDonationQueryHookResult = ReturnType<typeof useGetDonationQuery>;
export type GetDonationLazyQueryHookResult = ReturnType<
  typeof useGetDonationLazyQuery
>;
export type GetDonationSuspenseQueryHookResult = ReturnType<
  typeof useGetDonationSuspenseQuery
>;
export type GetDonationQueryResult = Apollo.QueryResult<
  GetDonationQuery,
  GetDonationQueryVariables
>;
export const GetHomePageDocument = gql`
  query GetHomePage($locale: I18NLocaleCode) {
    homePage(locale: $locale) {
      data {
        attributes {
          thumbnail {
            ...PhotoUrl
          }
          sectionWhyNeedVegan {
            ...Section
          }
          sectionWhatWeDone {
            ...Section
          }
          titleValuesOfVegan
          sectionListValuesOfVegan {
            ...Section
          }
          hyperlinkSeeMoreValuesOfVegan
          titleMoreTopics
          sectionListMoreTopics {
            ...Section
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetHomePageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomePageQuery,
    GetHomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    options,
  );
}
export function useGetHomePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomePageQuery,
    GetHomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    options,
  );
}
export function useGetHomePageSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetHomePageQuery,
    GetHomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    options,
  );
}
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<
  typeof useGetHomePageLazyQuery
>;
export type GetHomePageSuspenseQueryHookResult = ReturnType<
  typeof useGetHomePageSuspenseQuery
>;
export type GetHomePageQueryResult = Apollo.QueryResult<
  GetHomePageQuery,
  GetHomePageQueryVariables
>;
export const GetListReviewsDocument = gql`
  query GetListReviews(
    $locale: I18NLocaleCode!
    $page: Int
    $pageSize: Int
    $sort: [String]
  ) {
    reviews(
      locale: $locale
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      data {
        attributes {
          ...ReviewCard
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${ReviewCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListReviewsQuery__
 *
 * To run a query within a React component, call `useGetListReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListReviewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetListReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetListReviewsQuery,
    GetListReviewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetListReviewsQuery, GetListReviewsQueryVariables>(
    GetListReviewsDocument,
    options,
  );
}
export function useGetListReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListReviewsQuery,
    GetListReviewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetListReviewsQuery, GetListReviewsQueryVariables>(
    GetListReviewsDocument,
    options,
  );
}
export function useGetListReviewsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListReviewsQuery,
    GetListReviewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListReviewsQuery,
    GetListReviewsQueryVariables
  >(GetListReviewsDocument, options);
}
export type GetListReviewsQueryHookResult = ReturnType<
  typeof useGetListReviewsQuery
>;
export type GetListReviewsLazyQueryHookResult = ReturnType<
  typeof useGetListReviewsLazyQuery
>;
export type GetListReviewsSuspenseQueryHookResult = ReturnType<
  typeof useGetListReviewsSuspenseQuery
>;
export type GetListReviewsQueryResult = Apollo.QueryResult<
  GetListReviewsQuery,
  GetListReviewsQueryVariables
>;
export const GetListRecipesDocument = gql`
  query GetListRecipes(
    $locale: I18NLocaleCode!
    $page: Int
    $pageSize: Int
    $sort: [String]
  ) {
    recipes(
      locale: $locale
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      data {
        attributes {
          ...RecipeCard
        }
      }
      meta {
        pagination {
          total
          pageSize
          pageCount
          page
        }
      }
    }
  }
  ${RecipeCardFragmentDoc}
`;

/**
 * __useGetListRecipesQuery__
 *
 * To run a query within a React component, call `useGetListRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListRecipesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetListRecipesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetListRecipesQuery,
    GetListRecipesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetListRecipesQuery, GetListRecipesQueryVariables>(
    GetListRecipesDocument,
    options,
  );
}
export function useGetListRecipesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListRecipesQuery,
    GetListRecipesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetListRecipesQuery, GetListRecipesQueryVariables>(
    GetListRecipesDocument,
    options,
  );
}
export function useGetListRecipesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListRecipesQuery,
    GetListRecipesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListRecipesQuery,
    GetListRecipesQueryVariables
  >(GetListRecipesDocument, options);
}
export type GetListRecipesQueryHookResult = ReturnType<
  typeof useGetListRecipesQuery
>;
export type GetListRecipesLazyQueryHookResult = ReturnType<
  typeof useGetListRecipesLazyQuery
>;
export type GetListRecipesSuspenseQueryHookResult = ReturnType<
  typeof useGetListRecipesSuspenseQuery
>;
export type GetListRecipesQueryResult = Apollo.QueryResult<
  GetListRecipesQuery,
  GetListRecipesQueryVariables
>;
export const GetListPostsDocument = gql`
  query GetListPosts(
    $locale: I18NLocaleCode!
    $page: Int
    $pageSize: Int
    $sort: [String]
    $exceptIds: [ID]
  ) {
    posts(
      locale: $locale
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
      filters: { id: { notIn: $exceptIds } }
    ) {
      data {
        id
        attributes {
          ...PostCard
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${PostCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListPostsQuery__
 *
 * To run a query within a React component, call `useGetListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPostsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *      exceptIds: // value for 'exceptIds'
 *   },
 * });
 */
export function useGetListPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetListPostsQuery,
    GetListPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetListPostsQuery, GetListPostsQueryVariables>(
    GetListPostsDocument,
    options,
  );
}
export function useGetListPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListPostsQuery,
    GetListPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetListPostsQuery, GetListPostsQueryVariables>(
    GetListPostsDocument,
    options,
  );
}
export function useGetListPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListPostsQuery,
    GetListPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetListPostsQuery, GetListPostsQueryVariables>(
    GetListPostsDocument,
    options,
  );
}
export type GetListPostsQueryHookResult = ReturnType<
  typeof useGetListPostsQuery
>;
export type GetListPostsLazyQueryHookResult = ReturnType<
  typeof useGetListPostsLazyQuery
>;
export type GetListPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetListPostsSuspenseQuery
>;
export type GetListPostsQueryResult = Apollo.QueryResult<
  GetListPostsQuery,
  GetListPostsQueryVariables
>;
export const GetListPostsEnDocument = gql`
  query GetListPostsEn(
    $page: Int
    $pageSize: Int
    $sort: [String]
    $exceptIds: [ID]
  ) {
    posts(
      locale: "vi"
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
      filters: { id: { notIn: $exceptIds } }
    ) {
      data {
        id
        attributes {
          localizations {
            data {
              id
              attributes {
                ...PostCard
              }
            }
          }
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${PostCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListPostsEnQuery__
 *
 * To run a query within a React component, call `useGetListPostsEnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPostsEnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPostsEnQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *      exceptIds: // value for 'exceptIds'
 *   },
 * });
 */
export function useGetListPostsEnQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetListPostsEnQuery,
    GetListPostsEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetListPostsEnQuery, GetListPostsEnQueryVariables>(
    GetListPostsEnDocument,
    options,
  );
}
export function useGetListPostsEnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListPostsEnQuery,
    GetListPostsEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetListPostsEnQuery, GetListPostsEnQueryVariables>(
    GetListPostsEnDocument,
    options,
  );
}
export function useGetListPostsEnSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListPostsEnQuery,
    GetListPostsEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListPostsEnQuery,
    GetListPostsEnQueryVariables
  >(GetListPostsEnDocument, options);
}
export type GetListPostsEnQueryHookResult = ReturnType<
  typeof useGetListPostsEnQuery
>;
export type GetListPostsEnLazyQueryHookResult = ReturnType<
  typeof useGetListPostsEnLazyQuery
>;
export type GetListPostsEnSuspenseQueryHookResult = ReturnType<
  typeof useGetListPostsEnSuspenseQuery
>;
export type GetListPostsEnQueryResult = Apollo.QueryResult<
  GetListPostsEnQuery,
  GetListPostsEnQueryVariables
>;
export const GetListPostsByCategorySlugDocument = gql`
  query GetListPostsByCategorySlug(
    $locale: I18NLocaleCode!
    $page: Int
    $pageSize: Int
    $category: String
    $sort: [String]
    $exceptIds: [ID]
  ) {
    posts(
      locale: $locale
      filters: {
        id: { notIn: $exceptIds }
        category: { slug: { eq: $category } }
      }
      sort: $sort
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          ...PostCard
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${PostCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListPostsByCategorySlugQuery__
 *
 * To run a query within a React component, call `useGetListPostsByCategorySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPostsByCategorySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPostsByCategorySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      category: // value for 'category'
 *      sort: // value for 'sort'
 *      exceptIds: // value for 'exceptIds'
 *   },
 * });
 */
export function useGetListPostsByCategorySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >(GetListPostsByCategorySlugDocument, options);
}
export function useGetListPostsByCategorySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >(GetListPostsByCategorySlugDocument, options);
}
export function useGetListPostsByCategorySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListPostsByCategorySlugQuery,
    GetListPostsByCategorySlugQueryVariables
  >(GetListPostsByCategorySlugDocument, options);
}
export type GetListPostsByCategorySlugQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugQuery
>;
export type GetListPostsByCategorySlugLazyQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugLazyQuery
>;
export type GetListPostsByCategorySlugSuspenseQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugSuspenseQuery
>;
export type GetListPostsByCategorySlugQueryResult = Apollo.QueryResult<
  GetListPostsByCategorySlugQuery,
  GetListPostsByCategorySlugQueryVariables
>;
export const GetSearchPostsDocument = gql`
  query GetSearchPosts($locale: I18NLocaleCode!, $word: String!, $limit: Int) {
    posts(
      locale: $locale
      filters: { title: { containsi: $word } }
      pagination: { limit: $limit }
    ) {
      data {
        attributes {
          ...SearchPost
        }
      }
    }
  }
  ${SearchPostFragmentDoc}
`;

/**
 * __useGetSearchPostsQuery__
 *
 * To run a query within a React component, call `useGetSearchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchPostsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      word: // value for 'word'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetSearchPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSearchPostsQuery,
    GetSearchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSearchPostsQuery, GetSearchPostsQueryVariables>(
    GetSearchPostsDocument,
    options,
  );
}
export function useGetSearchPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSearchPostsQuery,
    GetSearchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSearchPostsQuery, GetSearchPostsQueryVariables>(
    GetSearchPostsDocument,
    options,
  );
}
export function useGetSearchPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetSearchPostsQuery,
    GetSearchPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSearchPostsQuery,
    GetSearchPostsQueryVariables
  >(GetSearchPostsDocument, options);
}
export type GetSearchPostsQueryHookResult = ReturnType<
  typeof useGetSearchPostsQuery
>;
export type GetSearchPostsLazyQueryHookResult = ReturnType<
  typeof useGetSearchPostsLazyQuery
>;
export type GetSearchPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetSearchPostsSuspenseQuery
>;
export type GetSearchPostsQueryResult = Apollo.QueryResult<
  GetSearchPostsQuery,
  GetSearchPostsQueryVariables
>;
export const GetListPostsByCategorySlugEnDocument = gql`
  query GetListPostsByCategorySlugEn(
    $page: Int
    $pageSize: Int
    $category: String
    $sort: [String]
    $exceptIds: [ID]
  ) {
    posts(
      locale: "vi"
      filters: {
        id: { notIn: $exceptIds }
        category: { slug: { eq: $category } }
      }
      sort: $sort
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          localizations {
            data {
              id
              attributes {
                ...PostCard
              }
            }
          }
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${PostCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListPostsByCategorySlugEnQuery__
 *
 * To run a query within a React component, call `useGetListPostsByCategorySlugEnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPostsByCategorySlugEnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPostsByCategorySlugEnQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      category: // value for 'category'
 *      sort: // value for 'sort'
 *      exceptIds: // value for 'exceptIds'
 *   },
 * });
 */
export function useGetListPostsByCategorySlugEnQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >(GetListPostsByCategorySlugEnDocument, options);
}
export function useGetListPostsByCategorySlugEnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >(GetListPostsByCategorySlugEnDocument, options);
}
export function useGetListPostsByCategorySlugEnSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListPostsByCategorySlugEnQuery,
    GetListPostsByCategorySlugEnQueryVariables
  >(GetListPostsByCategorySlugEnDocument, options);
}
export type GetListPostsByCategorySlugEnQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugEnQuery
>;
export type GetListPostsByCategorySlugEnLazyQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugEnLazyQuery
>;
export type GetListPostsByCategorySlugEnSuspenseQueryHookResult = ReturnType<
  typeof useGetListPostsByCategorySlugEnSuspenseQuery
>;
export type GetListPostsByCategorySlugEnQueryResult = Apollo.QueryResult<
  GetListPostsByCategorySlugEnQuery,
  GetListPostsByCategorySlugEnQueryVariables
>;
export const GetReviewsByEnDocument = gql`
  query GetReviewsByEn($page: Int, $pageSize: Int, $sort: [String]) {
    reviews(
      locale: "vi"
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      data {
        id
        attributes {
          localizations {
            data {
              id
              attributes {
                ...ReviewCard
              }
            }
          }
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${ReviewCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetReviewsByEnQuery__
 *
 * To run a query within a React component, call `useGetReviewsByEnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsByEnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsByEnQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetReviewsByEnQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetReviewsByEnQuery,
    GetReviewsByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetReviewsByEnQuery, GetReviewsByEnQueryVariables>(
    GetReviewsByEnDocument,
    options,
  );
}
export function useGetReviewsByEnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewsByEnQuery,
    GetReviewsByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetReviewsByEnQuery, GetReviewsByEnQueryVariables>(
    GetReviewsByEnDocument,
    options,
  );
}
export function useGetReviewsByEnSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetReviewsByEnQuery,
    GetReviewsByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReviewsByEnQuery,
    GetReviewsByEnQueryVariables
  >(GetReviewsByEnDocument, options);
}
export type GetReviewsByEnQueryHookResult = ReturnType<
  typeof useGetReviewsByEnQuery
>;
export type GetReviewsByEnLazyQueryHookResult = ReturnType<
  typeof useGetReviewsByEnLazyQuery
>;
export type GetReviewsByEnSuspenseQueryHookResult = ReturnType<
  typeof useGetReviewsByEnSuspenseQuery
>;
export type GetReviewsByEnQueryResult = Apollo.QueryResult<
  GetReviewsByEnQuery,
  GetReviewsByEnQueryVariables
>;
export const GetListRecipesByEnDocument = gql`
  query GetListRecipesByEn($page: Int, $pageSize: Int, $sort: [String]) {
    recipes(
      locale: "vi"
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      data {
        id
        attributes {
          localizations {
            data {
              id
              attributes {
                ...RecipeCard
              }
            }
          }
        }
      }
      meta {
        ...MetaPost
      }
    }
  }
  ${RecipeCardFragmentDoc}
  ${MetaPostFragmentDoc}
`;

/**
 * __useGetListRecipesByEnQuery__
 *
 * To run a query within a React component, call `useGetListRecipesByEnQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListRecipesByEnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListRecipesByEnQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetListRecipesByEnQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >(GetListRecipesByEnDocument, options);
}
export function useGetListRecipesByEnLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >(GetListRecipesByEnDocument, options);
}
export function useGetListRecipesByEnSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetListRecipesByEnQuery,
    GetListRecipesByEnQueryVariables
  >(GetListRecipesByEnDocument, options);
}
export type GetListRecipesByEnQueryHookResult = ReturnType<
  typeof useGetListRecipesByEnQuery
>;
export type GetListRecipesByEnLazyQueryHookResult = ReturnType<
  typeof useGetListRecipesByEnLazyQuery
>;
export type GetListRecipesByEnSuspenseQueryHookResult = ReturnType<
  typeof useGetListRecipesByEnSuspenseQuery
>;
export type GetListRecipesByEnQueryResult = Apollo.QueryResult<
  GetListRecipesByEnQuery,
  GetListRecipesByEnQueryVariables
>;
export const GetMembershipDocument = gql`
  query GetMembership($locale: I18NLocaleCode) {
    membership(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          sectionAboutUs {
            ...Section
          }
          sectionImpactOfVegan {
            ...Section
          }
          sectionListImpacts {
            ...Section
          }
          textLink1
          link1
          textDescription2
          textLink2
          link2
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetMembershipQuery__
 *
 * To run a query within a React component, call `useGetMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembershipQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetMembershipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMembershipQuery,
    GetMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMembershipQuery, GetMembershipQueryVariables>(
    GetMembershipDocument,
    options,
  );
}
export function useGetMembershipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMembershipQuery,
    GetMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMembershipQuery, GetMembershipQueryVariables>(
    GetMembershipDocument,
    options,
  );
}
export function useGetMembershipSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetMembershipQuery,
    GetMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetMembershipQuery,
    GetMembershipQueryVariables
  >(GetMembershipDocument, options);
}
export type GetMembershipQueryHookResult = ReturnType<
  typeof useGetMembershipQuery
>;
export type GetMembershipLazyQueryHookResult = ReturnType<
  typeof useGetMembershipLazyQuery
>;
export type GetMembershipSuspenseQueryHookResult = ReturnType<
  typeof useGetMembershipSuspenseQuery
>;
export type GetMembershipQueryResult = Apollo.QueryResult<
  GetMembershipQuery,
  GetMembershipQueryVariables
>;
export const GetNhungCauHoiThuongGapDocument = gql`
  query GetNhungCauHoiThuongGap($locale: I18NLocaleCode) {
    nhungCauHoiThuongGap(locale: $locale) {
      data {
        attributes {
          titleFaqs
          title7VeganChallenge
          sectionListFaqs {
            ...Section
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetNhungCauHoiThuongGapQuery__
 *
 * To run a query within a React component, call `useGetNhungCauHoiThuongGapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNhungCauHoiThuongGapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNhungCauHoiThuongGapQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetNhungCauHoiThuongGapQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >(GetNhungCauHoiThuongGapDocument, options);
}
export function useGetNhungCauHoiThuongGapLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >(GetNhungCauHoiThuongGapDocument, options);
}
export function useGetNhungCauHoiThuongGapSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetNhungCauHoiThuongGapQuery,
    GetNhungCauHoiThuongGapQueryVariables
  >(GetNhungCauHoiThuongGapDocument, options);
}
export type GetNhungCauHoiThuongGapQueryHookResult = ReturnType<
  typeof useGetNhungCauHoiThuongGapQuery
>;
export type GetNhungCauHoiThuongGapLazyQueryHookResult = ReturnType<
  typeof useGetNhungCauHoiThuongGapLazyQuery
>;
export type GetNhungCauHoiThuongGapSuspenseQueryHookResult = ReturnType<
  typeof useGetNhungCauHoiThuongGapSuspenseQuery
>;
export type GetNhungCauHoiThuongGapQueryResult = Apollo.QueryResult<
  GetNhungCauHoiThuongGapQuery,
  GetNhungCauHoiThuongGapQueryVariables
>;
export const GetPhimDocument = gql`
  query GetPhim($locale: I18NLocaleCode) {
    phim(locale: $locale) {
      data {
        attributes {
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          titleWhatIsVegan
          descriptionWhatIsVegan
          titleWhyVegan
          sectionReasons {
            ...Section
          }
          exploreMoreLink
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetPhimQuery__
 *
 * To run a query within a React component, call `useGetPhimQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhimQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhimQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPhimQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPhimQuery, GetPhimQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPhimQuery, GetPhimQueryVariables>(
    GetPhimDocument,
    options,
  );
}
export function useGetPhimLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPhimQuery,
    GetPhimQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPhimQuery, GetPhimQueryVariables>(
    GetPhimDocument,
    options,
  );
}
export function useGetPhimSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPhimQuery,
    GetPhimQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPhimQuery, GetPhimQueryVariables>(
    GetPhimDocument,
    options,
  );
}
export type GetPhimQueryHookResult = ReturnType<typeof useGetPhimQuery>;
export type GetPhimLazyQueryHookResult = ReturnType<typeof useGetPhimLazyQuery>;
export type GetPhimSuspenseQueryHookResult = ReturnType<
  typeof useGetPhimSuspenseQuery
>;
export type GetPhimQueryResult = Apollo.QueryResult<
  GetPhimQuery,
  GetPhimQueryVariables
>;
export const GetPostDetailBySlugDocument = gql`
  query GetPostDetailBySlug($locale: I18NLocaleCode, $slug: String) {
    posts(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...PostDetail
        }
      }
    }
  }
  ${PostDetailFragmentDoc}
`;

/**
 * __useGetPostDetailBySlugQuery__
 *
 * To run a query within a React component, call `useGetPostDetailBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostDetailBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostDetailBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostDetailBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >(GetPostDetailBySlugDocument, options);
}
export function useGetPostDetailBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >(GetPostDetailBySlugDocument, options);
}
export function useGetPostDetailBySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetPostDetailBySlugQuery,
    GetPostDetailBySlugQueryVariables
  >(GetPostDetailBySlugDocument, options);
}
export type GetPostDetailBySlugQueryHookResult = ReturnType<
  typeof useGetPostDetailBySlugQuery
>;
export type GetPostDetailBySlugLazyQueryHookResult = ReturnType<
  typeof useGetPostDetailBySlugLazyQuery
>;
export type GetPostDetailBySlugSuspenseQueryHookResult = ReturnType<
  typeof useGetPostDetailBySlugSuspenseQuery
>;
export type GetPostDetailBySlugQueryResult = Apollo.QueryResult<
  GetPostDetailBySlugQuery,
  GetPostDetailBySlugQueryVariables
>;
export const GetRecipeDetailBySlugDocument = gql`
  query GetRecipeDetailBySlug($locale: I18NLocaleCode, $slug: String) {
    recipes(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...RecipeDetail
        }
      }
    }
  }
  ${RecipeDetailFragmentDoc}
`;

/**
 * __useGetRecipeDetailBySlugQuery__
 *
 * To run a query within a React component, call `useGetRecipeDetailBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeDetailBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeDetailBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetRecipeDetailBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >(GetRecipeDetailBySlugDocument, options);
}
export function useGetRecipeDetailBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >(GetRecipeDetailBySlugDocument, options);
}
export function useGetRecipeDetailBySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRecipeDetailBySlugQuery,
    GetRecipeDetailBySlugQueryVariables
  >(GetRecipeDetailBySlugDocument, options);
}
export type GetRecipeDetailBySlugQueryHookResult = ReturnType<
  typeof useGetRecipeDetailBySlugQuery
>;
export type GetRecipeDetailBySlugLazyQueryHookResult = ReturnType<
  typeof useGetRecipeDetailBySlugLazyQuery
>;
export type GetRecipeDetailBySlugSuspenseQueryHookResult = ReturnType<
  typeof useGetRecipeDetailBySlugSuspenseQuery
>;
export type GetRecipeDetailBySlugQueryResult = Apollo.QueryResult<
  GetRecipeDetailBySlugQuery,
  GetRecipeDetailBySlugQueryVariables
>;
export const GetReviewDetailBySlugDocument = gql`
  query GetReviewDetailBySlug($locale: I18NLocaleCode, $slug: String) {
    reviews(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          ...ReviewDetail
        }
      }
    }
  }
  ${ReviewDetailFragmentDoc}
`;

/**
 * __useGetReviewDetailBySlugQuery__
 *
 * To run a query within a React component, call `useGetReviewDetailBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewDetailBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewDetailBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetReviewDetailBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >(GetReviewDetailBySlugDocument, options);
}
export function useGetReviewDetailBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >(GetReviewDetailBySlugDocument, options);
}
export function useGetReviewDetailBySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReviewDetailBySlugQuery,
    GetReviewDetailBySlugQueryVariables
  >(GetReviewDetailBySlugDocument, options);
}
export type GetReviewDetailBySlugQueryHookResult = ReturnType<
  typeof useGetReviewDetailBySlugQuery
>;
export type GetReviewDetailBySlugLazyQueryHookResult = ReturnType<
  typeof useGetReviewDetailBySlugLazyQuery
>;
export type GetReviewDetailBySlugSuspenseQueryHookResult = ReturnType<
  typeof useGetReviewDetailBySlugSuspenseQuery
>;
export type GetReviewDetailBySlugQueryResult = Apollo.QueryResult<
  GetReviewDetailBySlugQuery,
  GetReviewDetailBySlugQueryVariables
>;
export const GetDieuKhoanDieuKienDocument = gql`
  query GetDieuKhoanDieuKien($locale: I18NLocaleCode) {
    dieuKhoanDieuKien(locale: $locale) {
      data {
        attributes {
          Page {
            ...SinglePage
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SinglePageFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetDieuKhoanDieuKienQuery__
 *
 * To run a query within a React component, call `useGetDieuKhoanDieuKienQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDieuKhoanDieuKienQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDieuKhoanDieuKienQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetDieuKhoanDieuKienQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >(GetDieuKhoanDieuKienDocument, options);
}
export function useGetDieuKhoanDieuKienLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >(GetDieuKhoanDieuKienDocument, options);
}
export function useGetDieuKhoanDieuKienSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetDieuKhoanDieuKienQuery,
    GetDieuKhoanDieuKienQueryVariables
  >(GetDieuKhoanDieuKienDocument, options);
}
export type GetDieuKhoanDieuKienQueryHookResult = ReturnType<
  typeof useGetDieuKhoanDieuKienQuery
>;
export type GetDieuKhoanDieuKienLazyQueryHookResult = ReturnType<
  typeof useGetDieuKhoanDieuKienLazyQuery
>;
export type GetDieuKhoanDieuKienSuspenseQueryHookResult = ReturnType<
  typeof useGetDieuKhoanDieuKienSuspenseQuery
>;
export type GetDieuKhoanDieuKienQueryResult = Apollo.QueryResult<
  GetDieuKhoanDieuKienQuery,
  GetDieuKhoanDieuKienQueryVariables
>;
export const GetChinhSachBaoMatDocument = gql`
  query GetChinhSachBaoMat($locale: I18NLocaleCode) {
    chinhSachBaoMat(locale: $locale) {
      data {
        attributes {
          Page {
            ...SinglePage
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SinglePageFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetChinhSachBaoMatQuery__
 *
 * To run a query within a React component, call `useGetChinhSachBaoMatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChinhSachBaoMatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChinhSachBaoMatQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetChinhSachBaoMatQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >(GetChinhSachBaoMatDocument, options);
}
export function useGetChinhSachBaoMatLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >(GetChinhSachBaoMatDocument, options);
}
export function useGetChinhSachBaoMatSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetChinhSachBaoMatQuery,
    GetChinhSachBaoMatQueryVariables
  >(GetChinhSachBaoMatDocument, options);
}
export type GetChinhSachBaoMatQueryHookResult = ReturnType<
  typeof useGetChinhSachBaoMatQuery
>;
export type GetChinhSachBaoMatLazyQueryHookResult = ReturnType<
  typeof useGetChinhSachBaoMatLazyQuery
>;
export type GetChinhSachBaoMatSuspenseQueryHookResult = ReturnType<
  typeof useGetChinhSachBaoMatSuspenseQuery
>;
export type GetChinhSachBaoMatQueryResult = Apollo.QueryResult<
  GetChinhSachBaoMatQuery,
  GetChinhSachBaoMatQueryVariables
>;
export const GetChinhSachLienKetDocument = gql`
  query GetChinhSachLienKet($locale: I18NLocaleCode) {
    chinhSachLienKet(locale: $locale) {
      data {
        attributes {
          Page {
            ...SinglePage
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SinglePageFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetChinhSachLienKetQuery__
 *
 * To run a query within a React component, call `useGetChinhSachLienKetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChinhSachLienKetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChinhSachLienKetQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetChinhSachLienKetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >(GetChinhSachLienKetDocument, options);
}
export function useGetChinhSachLienKetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >(GetChinhSachLienKetDocument, options);
}
export function useGetChinhSachLienKetSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetChinhSachLienKetQuery,
    GetChinhSachLienKetQueryVariables
  >(GetChinhSachLienKetDocument, options);
}
export type GetChinhSachLienKetQueryHookResult = ReturnType<
  typeof useGetChinhSachLienKetQuery
>;
export type GetChinhSachLienKetLazyQueryHookResult = ReturnType<
  typeof useGetChinhSachLienKetLazyQuery
>;
export type GetChinhSachLienKetSuspenseQueryHookResult = ReturnType<
  typeof useGetChinhSachLienKetSuspenseQuery
>;
export type GetChinhSachLienKetQueryResult = Apollo.QueryResult<
  GetChinhSachLienKetQuery,
  GetChinhSachLienKetQueryVariables
>;
export const GetCamNangBoTuiDocument = gql`
  query GetCamNangBoTui($locale: I18NLocaleCode) {
    camNangBoTui(locale: $locale) {
      data {
        attributes {
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SeoFragmentDoc}
`;

/**
 * __useGetCamNangBoTuiQuery__
 *
 * To run a query within a React component, call `useGetCamNangBoTuiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCamNangBoTuiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCamNangBoTuiQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCamNangBoTuiQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCamNangBoTuiQuery, GetCamNangBoTuiQueryVariables>(
    GetCamNangBoTuiDocument,
    options,
  );
}
export function useGetCamNangBoTuiLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >(GetCamNangBoTuiDocument, options);
}
export function useGetCamNangBoTuiSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCamNangBoTuiQuery,
    GetCamNangBoTuiQueryVariables
  >(GetCamNangBoTuiDocument, options);
}
export type GetCamNangBoTuiQueryHookResult = ReturnType<
  typeof useGetCamNangBoTuiQuery
>;
export type GetCamNangBoTuiLazyQueryHookResult = ReturnType<
  typeof useGetCamNangBoTuiLazyQuery
>;
export type GetCamNangBoTuiSuspenseQueryHookResult = ReturnType<
  typeof useGetCamNangBoTuiSuspenseQuery
>;
export type GetCamNangBoTuiQueryResult = Apollo.QueryResult<
  GetCamNangBoTuiQuery,
  GetCamNangBoTuiQueryVariables
>;
export const GetPocketBookDocument = gql`
  query GetPocketBook($locale: I18NLocaleCode) {
    pocketBook(locale: $locale) {
      data {
        attributes {
          sectionBookTitle
          book {
            ...File
          }
          sectionBookImage {
            ...PhotoUrl
          }
          qrCode
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${FileFragmentDoc}
  ${PhotoUrlFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetPocketBookQuery__
 *
 * To run a query within a React component, call `useGetPocketBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPocketBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPocketBookQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetPocketBookQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPocketBookQuery,
    GetPocketBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPocketBookQuery, GetPocketBookQueryVariables>(
    GetPocketBookDocument,
    options,
  );
}
export function useGetPocketBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPocketBookQuery,
    GetPocketBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPocketBookQuery, GetPocketBookQueryVariables>(
    GetPocketBookDocument,
    options,
  );
}
export function useGetPocketBookSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPocketBookQuery,
    GetPocketBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetPocketBookQuery,
    GetPocketBookQueryVariables
  >(GetPocketBookDocument, options);
}
export type GetPocketBookQueryHookResult = ReturnType<
  typeof useGetPocketBookQuery
>;
export type GetPocketBookLazyQueryHookResult = ReturnType<
  typeof useGetPocketBookLazyQuery
>;
export type GetPocketBookSuspenseQueryHookResult = ReturnType<
  typeof useGetPocketBookSuspenseQuery
>;
export type GetPocketBookQueryResult = Apollo.QueryResult<
  GetPocketBookQuery,
  GetPocketBookQueryVariables
>;
export const GetLienHeDocument = gql`
  query GetLienHe($locale: I18NLocaleCode) {
    lienHe(locale: $locale) {
      data {
        attributes {
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SeoFragmentDoc}
`;

/**
 * __useGetLienHeQuery__
 *
 * To run a query within a React component, call `useGetLienHeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLienHeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLienHeQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetLienHeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLienHeQuery,
    GetLienHeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLienHeQuery, GetLienHeQueryVariables>(
    GetLienHeDocument,
    options,
  );
}
export function useGetLienHeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLienHeQuery,
    GetLienHeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLienHeQuery, GetLienHeQueryVariables>(
    GetLienHeDocument,
    options,
  );
}
export function useGetLienHeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetLienHeQuery,
    GetLienHeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLienHeQuery, GetLienHeQueryVariables>(
    GetLienHeDocument,
    options,
  );
}
export type GetLienHeQueryHookResult = ReturnType<typeof useGetLienHeQuery>;
export type GetLienHeLazyQueryHookResult = ReturnType<
  typeof useGetLienHeLazyQuery
>;
export type GetLienHeSuspenseQueryHookResult = ReturnType<
  typeof useGetLienHeSuspenseQuery
>;
export type GetLienHeQueryResult = Apollo.QueryResult<
  GetLienHeQuery,
  GetLienHeQueryVariables
>;
export const SubscribeListSubscribersDocument = gql`
  mutation subscribeListSubscribers($email: String!, $name: String) {
    subscribeListSubscribers(email: $email, name: $name) {
      email
      name
    }
  }
`;
export type SubscribeListSubscribersMutationFn = Apollo.MutationFunction<
  SubscribeListSubscribersMutation,
  SubscribeListSubscribersMutationVariables
>;

/**
 * __useSubscribeListSubscribersMutation__
 *
 * To run a mutation, you first call `useSubscribeListSubscribersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeListSubscribersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeListSubscribersMutation, { data, loading, error }] = useSubscribeListSubscribersMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSubscribeListSubscribersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubscribeListSubscribersMutation,
    SubscribeListSubscribersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubscribeListSubscribersMutation,
    SubscribeListSubscribersMutationVariables
  >(SubscribeListSubscribersDocument, options);
}
export type SubscribeListSubscribersMutationHookResult = ReturnType<
  typeof useSubscribeListSubscribersMutation
>;
export type SubscribeListSubscribersMutationResult =
  Apollo.MutationResult<SubscribeListSubscribersMutation>;
export type SubscribeListSubscribersMutationOptions =
  Apollo.BaseMutationOptions<
    SubscribeListSubscribersMutation,
    SubscribeListSubscribersMutationVariables
  >;
export const SubscribeChallengeDocument = gql`
  mutation subscribeChallenge($name: String, $email: String!) {
    subscribeChallenge(email: $email, name: $name) {
      email
      name
    }
  }
`;
export type SubscribeChallengeMutationFn = Apollo.MutationFunction<
  SubscribeChallengeMutation,
  SubscribeChallengeMutationVariables
>;

/**
 * __useSubscribeChallengeMutation__
 *
 * To run a mutation, you first call `useSubscribeChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeChallengeMutation, { data, loading, error }] = useSubscribeChallengeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSubscribeChallengeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubscribeChallengeMutation,
    SubscribeChallengeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubscribeChallengeMutation,
    SubscribeChallengeMutationVariables
  >(SubscribeChallengeDocument, options);
}
export type SubscribeChallengeMutationHookResult = ReturnType<
  typeof useSubscribeChallengeMutation
>;
export type SubscribeChallengeMutationResult =
  Apollo.MutationResult<SubscribeChallengeMutation>;
export type SubscribeChallengeMutationOptions = Apollo.BaseMutationOptions<
  SubscribeChallengeMutation,
  SubscribeChallengeMutationVariables
>;
export const SubscribeEBookDocument = gql`
  mutation subscribeEBook($name: String, $email: String!) {
    subscribeEBook(email: $email, name: $name) {
      email
      name
    }
  }
`;
export type SubscribeEBookMutationFn = Apollo.MutationFunction<
  SubscribeEBookMutation,
  SubscribeEBookMutationVariables
>;

/**
 * __useSubscribeEBookMutation__
 *
 * To run a mutation, you first call `useSubscribeEBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeEBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeEBookMutation, { data, loading, error }] = useSubscribeEBookMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSubscribeEBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubscribeEBookMutation,
    SubscribeEBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubscribeEBookMutation,
    SubscribeEBookMutationVariables
  >(SubscribeEBookDocument, options);
}
export type SubscribeEBookMutationHookResult = ReturnType<
  typeof useSubscribeEBookMutation
>;
export type SubscribeEBookMutationResult =
  Apollo.MutationResult<SubscribeEBookMutation>;
export type SubscribeEBookMutationOptions = Apollo.BaseMutationOptions<
  SubscribeEBookMutation,
  SubscribeEBookMutationVariables
>;
export const SubscribeContactDocument = gql`
  mutation subscribeContact(
    $name: String!
    $email: String!
    $age: String!
    $message: String!
  ) {
    subscribeContact(email: $email, name: $name, age: $age, message: $message) {
      email
      name
    }
  }
`;
export type SubscribeContactMutationFn = Apollo.MutationFunction<
  SubscribeContactMutation,
  SubscribeContactMutationVariables
>;

/**
 * __useSubscribeContactMutation__
 *
 * To run a mutation, you first call `useSubscribeContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeContactMutation, { data, loading, error }] = useSubscribeContactMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      age: // value for 'age'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSubscribeContactMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubscribeContactMutation,
    SubscribeContactMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SubscribeContactMutation,
    SubscribeContactMutationVariables
  >(SubscribeContactDocument, options);
}
export type SubscribeContactMutationHookResult = ReturnType<
  typeof useSubscribeContactMutation
>;
export type SubscribeContactMutationResult =
  Apollo.MutationResult<SubscribeContactMutation>;
export type SubscribeContactMutationOptions = Apollo.BaseMutationOptions<
  SubscribeContactMutation,
  SubscribeContactMutationVariables
>;
export const GetSupportViveDocument = gql`
  query GetSupportVive($locale: I18NLocaleCode) {
    supportVive(locale: $locale) {
      data {
        attributes {
          content
          txtButton
          hyperlink
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${SeoFragmentDoc}
`;

/**
 * __useGetSupportViveQuery__
 *
 * To run a query within a React component, call `useGetSupportViveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportViveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportViveQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetSupportViveQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSupportViveQuery,
    GetSupportViveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSupportViveQuery, GetSupportViveQueryVariables>(
    GetSupportViveDocument,
    options,
  );
}
export function useGetSupportViveLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSupportViveQuery,
    GetSupportViveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSupportViveQuery, GetSupportViveQueryVariables>(
    GetSupportViveDocument,
    options,
  );
}
export function useGetSupportViveSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetSupportViveQuery,
    GetSupportViveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSupportViveQuery,
    GetSupportViveQueryVariables
  >(GetSupportViveDocument, options);
}
export type GetSupportViveQueryHookResult = ReturnType<
  typeof useGetSupportViveQuery
>;
export type GetSupportViveLazyQueryHookResult = ReturnType<
  typeof useGetSupportViveLazyQuery
>;
export type GetSupportViveSuspenseQueryHookResult = ReturnType<
  typeof useGetSupportViveSuspenseQuery
>;
export type GetSupportViveQueryResult = Apollo.QueryResult<
  GetSupportViveQuery,
  GetSupportViveQueryVariables
>;
export const DownloadPocketBookDocument = gql`
  mutation downloadPocketBook($data: DownloadBookInput!) {
    downloadPocketBook(data: $data) {
      email
      link
      date
    }
  }
`;
export type DownloadPocketBookMutationFn = Apollo.MutationFunction<
  DownloadPocketBookMutation,
  DownloadPocketBookMutationVariables
>;

/**
 * __useDownloadPocketBookMutation__
 *
 * To run a mutation, you first call `useDownloadPocketBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDownloadPocketBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [downloadPocketBookMutation, { data, loading, error }] = useDownloadPocketBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDownloadPocketBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DownloadPocketBookMutation,
    DownloadPocketBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DownloadPocketBookMutation,
    DownloadPocketBookMutationVariables
  >(DownloadPocketBookDocument, options);
}
export type DownloadPocketBookMutationHookResult = ReturnType<
  typeof useDownloadPocketBookMutation
>;
export type DownloadPocketBookMutationResult =
  Apollo.MutationResult<DownloadPocketBookMutation>;
export type DownloadPocketBookMutationOptions = Apollo.BaseMutationOptions<
  DownloadPocketBookMutation,
  DownloadPocketBookMutationVariables
>;
export const GetThuThachThuanChayDocument = gql`
  query GetThuThachThuanChay($locale: I18NLocaleCode) {
    thuThachThuanChay(locale: $locale) {
      data {
        attributes {
          titleVeganChallenge
          challengeContent {
            ...ListText
          }
          veganParticipant
          sectionListBenefitsFromVegan {
            ...Section
          }
          titleWaysToJoinChallenge
          sectionListWaysToJoinChallenge {
            ...Section
          }
          titleNutritionHealthCoaches
          sectionListNHCoaches {
            ...Person
          }
          titleOurConsultants
          sectionListConsultants {
            ...Person
          }
          sectionListReviews {
            ...Person
          }
          titleListQuestions
          sectionListQuestions {
            ...Section
          }
          titlePartners
          sectionListPartners {
            ...Partner
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${ListTextFragmentDoc}
  ${SectionFragmentDoc}
  ${PersonFragmentDoc}
  ${PartnerFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetThuThachThuanChayQuery__
 *
 * To run a query within a React component, call `useGetThuThachThuanChayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThuThachThuanChayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThuThachThuanChayQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetThuThachThuanChayQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >(GetThuThachThuanChayDocument, options);
}
export function useGetThuThachThuanChayLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >(GetThuThachThuanChayDocument, options);
}
export function useGetThuThachThuanChaySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetThuThachThuanChayQuery,
    GetThuThachThuanChayQueryVariables
  >(GetThuThachThuanChayDocument, options);
}
export type GetThuThachThuanChayQueryHookResult = ReturnType<
  typeof useGetThuThachThuanChayQuery
>;
export type GetThuThachThuanChayLazyQueryHookResult = ReturnType<
  typeof useGetThuThachThuanChayLazyQuery
>;
export type GetThuThachThuanChaySuspenseQueryHookResult = ReturnType<
  typeof useGetThuThachThuanChaySuspenseQuery
>;
export type GetThuThachThuanChayQueryResult = Apollo.QueryResult<
  GetThuThachThuanChayQuery,
  GetThuThachThuanChayQueryVariables
>;
export const GetVeganChallengeHomeDocument = gql`
  query GetVeganChallengeHome($locale: I18NLocaleCode) {
    thuThachThuanChay(locale: $locale) {
      data {
        attributes {
          titleVeganChallenge
          veganParticipant
        }
      }
    }
  }
`;

/**
 * __useGetVeganChallengeHomeQuery__
 *
 * To run a query within a React component, call `useGetVeganChallengeHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVeganChallengeHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVeganChallengeHomeQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetVeganChallengeHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >(GetVeganChallengeHomeDocument, options);
}
export function useGetVeganChallengeHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >(GetVeganChallengeHomeDocument, options);
}
export function useGetVeganChallengeHomeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetVeganChallengeHomeQuery,
    GetVeganChallengeHomeQueryVariables
  >(GetVeganChallengeHomeDocument, options);
}
export type GetVeganChallengeHomeQueryHookResult = ReturnType<
  typeof useGetVeganChallengeHomeQuery
>;
export type GetVeganChallengeHomeLazyQueryHookResult = ReturnType<
  typeof useGetVeganChallengeHomeLazyQuery
>;
export type GetVeganChallengeHomeSuspenseQueryHookResult = ReturnType<
  typeof useGetVeganChallengeHomeSuspenseQuery
>;
export type GetVeganChallengeHomeQueryResult = Apollo.QueryResult<
  GetVeganChallengeHomeQuery,
  GetVeganChallengeHomeQueryVariables
>;
export const GetVLabelDocument = gql`
  query GetVLabel($locale: I18NLocaleCode) {
    vLabel(locale: $locale) {
      data {
        attributes {
          contentTitle1
          contentImage1 {
            ...PhotoUrl
          }
          content
          txtButton
          hyperlink
          titleListLogos
          listLogos {
            ...LogoDetail
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${LogoDetailFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetVLabelQuery__
 *
 * To run a query within a React component, call `useGetVLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVLabelQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetVLabelQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVLabelQuery,
    GetVLabelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVLabelQuery, GetVLabelQueryVariables>(
    GetVLabelDocument,
    options,
  );
}
export function useGetVLabelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVLabelQuery,
    GetVLabelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVLabelQuery, GetVLabelQueryVariables>(
    GetVLabelDocument,
    options,
  );
}
export function useGetVLabelSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetVLabelQuery,
    GetVLabelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetVLabelQuery, GetVLabelQueryVariables>(
    GetVLabelDocument,
    options,
  );
}
export type GetVLabelQueryHookResult = ReturnType<typeof useGetVLabelQuery>;
export type GetVLabelLazyQueryHookResult = ReturnType<
  typeof useGetVLabelLazyQuery
>;
export type GetVLabelSuspenseQueryHookResult = ReturnType<
  typeof useGetVLabelSuspenseQuery
>;
export type GetVLabelQueryResult = Apollo.QueryResult<
  GetVLabelQuery,
  GetVLabelQueryVariables
>;
export const GetVeChungToiDocument = gql`
  query GetVeChungToi($locale: I18NLocaleCode) {
    veChungToi(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          sectionAboutUs {
            ...Section
          }
          sectionImpactOfVegan {
            ...Section
          }
          sectionListImpacts {
            ...Section
          }
          titleOurActivities
          sectionListActivities {
            ...Activity
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${ActivityFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetVeChungToiQuery__
 *
 * To run a query within a React component, call `useGetVeChungToiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVeChungToiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVeChungToiQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetVeChungToiQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVeChungToiQuery,
    GetVeChungToiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVeChungToiQuery, GetVeChungToiQueryVariables>(
    GetVeChungToiDocument,
    options,
  );
}
export function useGetVeChungToiLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVeChungToiQuery,
    GetVeChungToiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVeChungToiQuery, GetVeChungToiQueryVariables>(
    GetVeChungToiDocument,
    options,
  );
}
export function useGetVeChungToiSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetVeChungToiQuery,
    GetVeChungToiQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetVeChungToiQuery,
    GetVeChungToiQueryVariables
  >(GetVeChungToiDocument, options);
}
export type GetVeChungToiQueryHookResult = ReturnType<
  typeof useGetVeChungToiQuery
>;
export type GetVeChungToiLazyQueryHookResult = ReturnType<
  typeof useGetVeChungToiLazyQuery
>;
export type GetVeChungToiSuspenseQueryHookResult = ReturnType<
  typeof useGetVeChungToiSuspenseQuery
>;
export type GetVeChungToiQueryResult = Apollo.QueryResult<
  GetVeChungToiQuery,
  GetVeChungToiQueryVariables
>;
export const GetVolunteerDocument = gql`
  query GetVolunteer($locale: I18NLocaleCode) {
    volunteer(locale: $locale) {
      data {
        attributes {
          pageName
          titlePage
          descriptionPage
          thumbnail {
            ...PhotoUrl
          }
          titleHelpUs
          sectionListHelpUs {
            ...Section
          }
          listVolunteerImages {
            image {
              ...PhotoUrl
            }
            hyperlink
          }
          titleVolunteerPerks
          sectionVolunteerPerks {
            ...Section
          }
          titleApplyToVolunteer
          descriptionApplyToVolunteer
          textButtonApplyToVolunteer
          linkApplyToVolunteer
          titleFaq
          listFaqs {
            question
            answer
          }
          seo {
            ...Seo
          }
        }
      }
    }
  }
  ${PhotoUrlFragmentDoc}
  ${SectionFragmentDoc}
  ${SeoFragmentDoc}
`;

/**
 * __useGetVolunteerQuery__
 *
 * To run a query within a React component, call `useGetVolunteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVolunteerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVolunteerQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetVolunteerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVolunteerQuery,
    GetVolunteerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(
    GetVolunteerDocument,
    options,
  );
}
export function useGetVolunteerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVolunteerQuery,
    GetVolunteerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(
    GetVolunteerDocument,
    options,
  );
}
export function useGetVolunteerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetVolunteerQuery,
    GetVolunteerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(
    GetVolunteerDocument,
    options,
  );
}
export type GetVolunteerQueryHookResult = ReturnType<
  typeof useGetVolunteerQuery
>;
export type GetVolunteerLazyQueryHookResult = ReturnType<
  typeof useGetVolunteerLazyQuery
>;
export type GetVolunteerSuspenseQueryHookResult = ReturnType<
  typeof useGetVolunteerSuspenseQuery
>;
export type GetVolunteerQueryResult = Apollo.QueryResult<
  GetVolunteerQuery,
  GetVolunteerQueryVariables
>;
