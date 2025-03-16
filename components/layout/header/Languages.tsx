import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import useTranslations from '@/hooks/useTranslations';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Languages = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  function changeLangTo(lang: 'vi' | 'en') {
    if (router.locale === lang) return;

    const currentPath = router.asPath;
    let path = pathname;

    if (currentPath in directs) {
      router.push(directs[currentPath as keyof typeof directs], undefined, {
        locale: lang,
      });
    } else if (
      path.includes('cong-thuc-thuan-chay') ||
      path.includes('recipe-vegan')
    ) {
      if (lang === 'vi') {
        path = path.replace('recipe-vegan', 'cong-thuc-thuan-chay');
        router.push(path, undefined, {
          locale: lang,
        });
      } else {
        path = path.replace('cong-thuc-thuan-chay', 'recipe-vegan');
        router.push(path, undefined, {
          locale: lang,
        });
      }
    }
  }

  const detection = useDeviceDetect();

  return (
    <ul className="header-languages">
      <li className="text-link-2" onClick={() => changeLangTo('vi')}>
        <span className="fi fi-vn" style={{ transform: 'scale(1.1)' }}></span>{' '}
        {t.tiengViet}
      </li>
      <li className="text-link-2" onClick={() => changeLangTo('en')}>
        <span className="fi fi-gb"></span> English
      </li>
    </ul>
  );
};

const directs = {
  '/': '/',
  '/challenge-life-vegan': '/thu-thach-thuan-chay',
  '/thu-thach-thuan-chay': '/challenge-life-vegan',
  '/nhung-cau-hoi-thuong-gap': '/faqs',
  '/faqs': '/nhung-cau-hoi-thuong-gap',
  '/ban-can-biet-gi-ve-thuan-chay': '/vegan-info',
  '/vegan-info': '/ban-can-biet-gi-ve-thuan-chay',
  '/ve-chung-toi': '/about-us',
  '/about-us': '/ve-chung-toi',
  '/tham-gia-ngay': '/join-us',
  '/join-us': '/tham-gia-ngay',
  '/lien-lac-voi-chung-toi': '/contact-us',
  '/contact-us': '/lien-lac-voi-chung-toi',
  '/an-cho-tuong-lai': '/eat-for-the-future',
  '/eat-for-the-future': '/an-cho-tuong-lai',
  '/goc-bep': '/vegan-food',
  '/vegan-food': '/goc-bep',
  '/review-quan-an': '/review-restaurant',
  '/review-restaurant': '/review-quan-an',
  '/cong-thuc-thuan-chay': '/recipe-vegan',
  '/recipe-vegan': '/cong-thuc-thuan-chay',
  '/tin-tuc': '/news',
  '/news': '/tin-tuc',
  '/sach-thuan-chay': '/vegan-book',
  '/vegan-book': '/sach-thuan-chay',
  '/tin-tuc/moi-truong': '/news/environment',
  '/news/environment': '/tin-tuc/moi-truong',
  '/tin-tuc/dong-vat': '/news/animals',
  '/news/animals': '/tin-tuc/dong-vat',
  '/tin-tuc/suc-khoe': '/news/health',
  '/news/health': '/tin-tuc/suc-khoe',
  '/dieu-khoan-dieu-kien': '/term-and-condition',
  '/term-and-condition': '/dieu-khoan-dieu-kien',
  '/chinh-sach-bao-mat': '/privacy-policy',
  '/privacy-policy': '/chinh-sach-bao-mat',
  '/chinh-sach-lien-ket': '/affiliate-policy',
  '/affiliate-policy': '/chinh-sach-lien-ket',
  '/v-label': '/v-label',
  '/support-vive': '/ho-tro-vive',
  '/ho-tro-vive': '/support-vive',
  '/film': '/phim',
  '/phim': '/film',
  '/dang-ky-thanh-vien': '/membership',
  '/membership': '/dang-ky-thanh-vien',
  '/dong-gop-khac': '/gift-giving',
  '/gift-giving': '/dong-gop-khac',
  '/nguoi-tham-gia': '/volunteer',
  '/volunteer': '/nguoi-tham-gia',
};

export default Languages;
