export const direct = (
  key: DirectKeys,
  lang: string | undefined = 'vi',
): string => {
  return directs[key][lang as 'vi' | 'en'];
};

export type DirectKeys = keyof typeof directs;

const directs = {
  home: {
    vi: '/',
    en: '/',
  },
  'challenge-life-vegan': {
    vi: '/thu-thach-thuan-chay',
    en: '/challenge-life-vegan',
  },
  faqs: {
    vi: '/nhung-cau-hoi-thuong-gap',
    en: '/faqs',
  },
  'vegan-info': {
    vi: '/ban-can-biet-gi-ve-thuan-chay',
    en: '/vegan-info',
  },
  'about-us': {
    vi: '/ve-chung-toi',
    en: '/about-us',
  },
  'join-us': {
    vi: '/tham-gia-ngay',
    en: '/join-us',
  },
  'contact-us': {
    vi: '/lien-lac-voi-chung-toi',
    en: '/contact-us',
  },
  'eat-for-the-future': {
    vi: '/an-cho-tuong-lai',
    en: '/eat-for-the-future',
  },
  'vegan-food': {
    vi: '/goc-bep',
    en: '/vegan-food',
  },
  'review-restaurant': {
    vi: '/review-quan-an',
    en: '/review-restaurant',
  },
  'recipe-vegan': {
    vi: '/cong-thuc-thuan-chay',
    en: '/recipe-vegan',
  },
  'vegan-book': {
    vi: '/sach-thuan-chay',
    en: '/vegan-book',
  },
  petitions: {
    vi: '/don-thinh-cau',
    en: '/petitions',
  },
  news: {
    vi: '/tin-tuc',
    en: '/news',
  },
  'news+environment': {
    vi: '/tin-tuc/moi-truong',
    en: '/news/environment',
  },
  'news+animals': {
    vi: '/tin-tuc/dong-vat',
    en: '/news/animals',
  },
  'news+health': {
    vi: '/tin-tuc/suc-khoe',
    en: '/news/health',
  },
  'term-and-condition': {
    vi: '/dieu-khoan-dieu-kien',
    en: '/term-and-condition',
  },
  'privacy-policy': {
    vi: '/chinh-sach-bao-mat',
    en: '/privacy-policy',
  },
  'affiliate-policy': {
    vi: '/chinh-sach-lien-ket',
    en: '/affiliate-policy',
  },
  membership: {
    vi: '/dang-ky-thanh-vien',
    en: '/membership',
  },
  donation: {
    vi: '/donation',
    en: '/donation',
  },
  'gift-giving': {
    vi: '/dong-gop-khac',
    en: '/gift-giving',
  },
  volunteer: {
    vi: '/nguoi-tham-gia',
    en: '/volunteer',
  },
  'v-label': {
    vi: '/v-label',
    en: '/v-label',
  },
  film: {
    vi: '/phim',
    en: '/film',
  },
};

const pageDetailMap = {
  review: {
    vi: '/review-quan-an',
    en: '/en/review-restaurant',
  },
  news: {
    vi: '/tin-tuc',
    en: '/en/news',
  },
  recipe: {
    vi: '/cong-thuc-thuan-chay',
    en: '/en/recipe-vegan',
  },
};

export function getHyperLink(
  slug: string | null | undefined,
  page: keyof typeof pageDetailMap,
  locale: 'vi' | 'en' = 'vi',
) {
  if (!slug) {
    return '#';
  }
  return `${pageDetailMap[page][locale]}/${slug}`;
}
