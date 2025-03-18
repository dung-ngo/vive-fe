const path = require('path');

module.exports = {
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vive.org.vn',
      },
      {
        protocol: 'https',
        hostname: 'cms.vive.org.vn',
      },
      {
        protocol: 'https',
        hostname: 'cms-vive.huynhtuan.dev',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        // static pages
        {
          source: '/(ve-chung-toi|about-us)',
          destination: '/about-us',
        },
        {
          source: '/(thu-thach-thuan-chay|challenge-life-vegan)',
          destination: '/challenge-life-vegan',
        },
        {
          source: '/(nhung-cau-hoi-thuong-gap|faqs)',
          destination: '/faqs',
        },
        {
          source: '/(ban-can-biet-gi-ve-thuan-chay|vegan-info)',
          destination: '/need-to-know',
        },
        {
          source: '/(tham-gia-ngay|join-us)',
          destination: '/join-us',
        },
        {
          source: '/(lien-lac-voi-chung-toi|contact-us)',
          destination: '/contact-us',
        },
        {
          source: '/(an-cho-tuong-lai|eat-for-the-future)',
          destination: '/eat-for-the-future',
        },
        {
          source: '/(sach-thuan-chay|vegan-book)',
          destination: '/vegan-book',
        },
        {
          source: '/pocket-book',
          destination: '/pocket-book',
        },
        {
          source: '/(goc-bep|vegan-food)',
          destination: '/vegan-food',
        },
        {
          source: '/(ho-tro-vive|support-vive)',
          destination: '/support-vive',
        },
        {
          source: '/(v-label)',
          destination: '/v-label',
        },
        {
          source: '/(tin-tuc|news)',
          destination: '/news',
        },
        {
          source: '/(phim|film)',
          destination: '/film',
        },
        {
          source: '/(dang-ky-thanh-vien|membership)',
          destination: '/membership',
        },
        {
          source: '/(nguoi-tham-gia|volunteer)',
          destination: '/volunteer',
        },
        {
          source: '/(dong-gop-khac|gift-giving)',
          destination: '/gift-giving',
        },
        {
          source:
            '/:slug(dieu-khoan-dieu-kien|chinh-sach-bao-mat|chinh-sach-lien-ket|term-and-condition|privacy-policy|affiliate-policy)',
          destination: '/policy/:slug',
        },
        {
          source: '/(review-quan-an|review-restaurant)/:slug',
          destination: '/review-restaurant-detail/:slug',
        },
        {
          source: '/(cong-thuc-thuan-chay|recipe-vegan)/:slug',
          destination: '/recipe-vegan-detail/:slug',
        },
        {
          source: '/:slug(cong-thuc-thuan-chay|recipe-vegan)',
          destination: '/recipe-vegan-page/:slug',
        },
        {
          source: '/:slug(review-quan-an|review-restaurant)',
          destination: '/review-restaurant-page/:slug',
        },
        {
          source:
            '/:cat(tin-tuc/suc-khoe|tin-tuc/dong-vat|tin-tuc/moi-truong|news/health|news/animals|news/environment)/:slug',
          destination: '/post-detail/:cat/:slug',
        },
        {
          source:
            '/:slug(tin-tuc/suc-khoe|tin-tuc/dong-vat|tin-tuc/moi-truong|news/health|news/animals|news/environment)',
          destination: '/listing/:slug*',
        },
        {
          source: '/(don-thinh-cau|petitions)',
          destination: '/petitions',
        },
      ],
    };
  },
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
