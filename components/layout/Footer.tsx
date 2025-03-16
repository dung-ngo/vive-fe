import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';

import Certificate from '@/assets/images/bo-cong-thuong-cert.webp';
import Logo from '@/assets/images/vive-logo-horizontal.png';
import Facebook from '@/assets/svgs/facebook.svg';
import Insta from '@/assets/svgs/insta.svg';
import Youtube from '@/assets/svgs/youtube.svg';
import Tiktok from '@/assets/svgs/tiktok.svg';
import Patreon from '@/assets/svgs/patreon-logo.png';
import useTranslations from '@/hooks/useTranslations';

const Footer = () => {
  const { locale } = useRouter();
  const t = useTranslations();
  return (
    <>
      <footer className="vive-layout-footer">
        <div className="container">
          <section className="footer-top">
            <div className="footer-icon-list">
              <div className="footer-logo">
                <Link href="">
                  <Image width={187} height={65} alt="certificate" src={Logo} />
                </Link>
              </div>
              <ul>
                <FooterLinkItem
                  content={
                    <Image
                      width={24}
                      height={24}
                      alt="facebook"
                      src={Facebook}
                    />
                  }
                  link="https://www.facebook.com/vive.org.vn"
                />
                <FooterLinkItem
                  content={
                    <Image width={24} height={24} alt="instagram" src={Insta} />
                  }
                  link="https://www.instagram.com/vive.org.vn/"
                />
                <FooterLinkItem
                  content={
                    <Image width={24} height={24} alt="youtub" src={Youtube} />
                  }
                  link="https://www.youtube.com/@viveorgvn"
                />
                <FooterLinkItem
                  content={
                    <Image width={24} height={24} alt="tiktok" src={Tiktok} />
                  }
                  link="https://www.tiktok.com/@vive.org.vn"
                />
                <FooterLinkItem
                  content={
                    <Image width={24} height={24} alt="patreon" src={Patreon} />
                  }
                  link="https://www.patreon.com/supportvive"
                />
              </ul>
            </div>
            <div className="footer-link-list">
              <ul>
                <FooterLinkItem
                  content={t.footer.sevenThuanChay}
                  link="https://m.facebook.com/vive.org.vn/events?_rdr"
                  className="text-link-1"
                  target="_blank"
                />
                <FooterLinkItem
                  content={t.header.banCanBiet}
                  link={direct('vegan-info', locale)}
                  className="text-link-1"
                />
              </ul>
              <ul>
                <FooterLinkItem
                  content={t.header.veChungToi}
                  link={direct('about-us', locale)}
                  className="text-link-1"
                />
                <FooterLinkItem
                  content={t.footer.cacHoatDong}
                  link="https://www.facebook.com/vive.org.vn/events?ref=page_internal"
                  className="text-link-1"
                />
              </ul>
              <ul>
                <FooterLinkItem
                  content={t.header.tinTuc}
                  link={direct('news', locale)}
                  className="text-link-1"
                />
                <FooterLinkItem
                  content={t.header.gocBep}
                  link={direct('vegan-food', locale)}
                  className="text-link-1"
                />
                {/* <FooterLinkItem content="Cửa hàng" link="/" className="text-link-1" /> */}
              </ul>
            </div>
          </section>
          <hr />
          <section className="footer-bottom">
            <div className="footer-policy">
              <ul>
                <FooterLinkItem
                  content={t.footer.dieuKhoanDieuKien}
                  link={direct('term-and-condition', locale)}
                  className="text-link-2"
                />
                <FooterLinkItem
                  content={t.footer.chinhSachBaoMat}
                  link={direct('privacy-policy', locale)}
                  className="text-link-2"
                />
                <FooterLinkItem
                  content={t.footer.chinhSachLienKet}
                  link={direct('affiliate-policy', locale)}
                  className="text-link-2"
                />
              </ul>
              <p className="copyright text-link-2">
                © Vive 2024. {t.footer.daDangKiBanQuyen}.
              </p>
            </div>
            <div className="footer-info">
              <div className="footer-cetificates">
                <Link href="http://online.gov.vn/Home/WebDetails/82853">
                  <Image
                    width={220}
                    height={78.2}
                    alt="certificate"
                    src={Certificate}
                  />
                </Link>
              </div>
              <div>
                <p className="text-link-3">Công ty TNHH Vive (Vietnam)</p>
                <p className="text-link-3">
                  {t.footer.diaChi}: 15A Nguyễn Trung Trực, Phường 5, Quận Bình
                  Thạnh, TP. Hồ Chí Minh, Việt Nam
                </p>
                <p className="text-link-3">
                  Giấy CNĐKKD số 0316304050 cấp lần đầu ngày 02/6/2020 tại Sở
                  KHDT Thành phố Hồ Chí Minh
                </p>
                <p className="text-link-3">{t.footer.sdt}: 0365577358</p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

type PFooterLinkItem = {
  link: string;
  content: string | ReactNode;
  className?: string;
  target?: string;
};

const FooterLinkItem = ({
  link,
  content,
  className = '',
  target,
}: PFooterLinkItem) => (
  <li className="footer-link-item">
    <Link href={link} className={className} target={target}>
      {content}
    </Link>
  </li>
);

export default Footer;
