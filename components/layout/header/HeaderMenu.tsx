import useTranslations from '@/hooks/useTranslations';
import { direct } from '@/utils/link.util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

type Props = {};

const HeaderMenu = () => {
  const { locale } = useRouter();
  const t = useTranslations();
  return (
    <section className="header-menu">
      <HeaderDropdownItem
        content={t.header.sevenNgayThuanChay}
        links={[
          {
            content: t.header.thamGiaThuThach,
            link: direct('challenge-life-vegan', locale),
          },
          { content: t.header.cauHoiThuongGap, link: direct('faqs', locale) },
        ]}
      />
      <HeaderLinkItem
        content={t.header.banCanBiet}
        link={direct('vegan-info', locale)}
      />
      <HeaderDropdownItem
        content={t.header.veChungToi}
        links={[
          { content: t.header.veChungToi, link: direct('about-us', locale) },
          {
            content: t.header.doiNguSongThuanChay,
            link: direct('join-us', locale),
          },
          { content: t.header.lienHe, link: direct('contact-us', locale) },
          {
            content: t.header.anChoTuongLai,
            link: direct('eat-for-the-future', locale),
          },
        ]}
      />
      <HeaderDropdownItem
        content={t.header.gocBep}
        links={[
          { content: t.header.gocBep, link: direct('vegan-food', locale) },
          {
            content: t.header.reviewQuanAn,
            link: direct('review-restaurant', locale),
          },
          {
            content: t.header.congThucNauAn,
            link: direct('recipe-vegan', locale),
          },
          {
            content: t.header.camNangMienPhi,
            link: direct('vegan-book', locale),
          },
        ]}
      />
      <HeaderDropdownItem
        content={t.header.tinTuc}
        links={[
          {
            content: t.header.petitions,
            link: direct('petitions', locale),
          },
          { content: t.header.tatCaTinTuc, link: direct('news', locale) },
          { content: t.header.sucKhoe, link: direct('news+health', locale) },
          { content: t.header.dongVat, link: direct('news+animals', locale) },
          {
            content: t.header.moiTruong,
            link: direct('news+environment', locale),
          },
        ]}
      />
      <HeaderLinkItem content={t.header.phim} link={direct('film', locale)} />
      <HeaderLinkItem
        content={t.header.vLabel}
        link={direct('v-label', locale)}
      />
      <HeaderDropdownItem
        content={t.header.hoTroVive}
        links={[
          {
            content: t.header.dangKyThanhVien,
            link: direct('membership', locale),
          },
          {
            content: t.header.dongGopKhac,
            link: direct('gift-giving', locale),
          },
          {
            content: t.header.tinhNguyenVien,
            link: direct('volunteer', locale),
          },
        ]}
      />
    </section>
  );
};

type PHeaderLinkItem = {
  link: string;
  content: string | ReactNode;
  className?: string;
};

const HeaderLinkItem = ({ link, content, className = '' }: PHeaderLinkItem) => (
  <Link href={link} className="header-link-item">
    <div className={className}>{content}</div>
  </Link>
);

type PHeaderDropdownItem = {
  links: PHeaderLinkItem[];
  content: string | ReactNode;
  className?: string;
};

const HeaderDropdownItem = ({ content, links }: PHeaderDropdownItem) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div
      className="header-dropdown-item"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div
        style={{
          fontWeight:
            content === 'Support Vive' || content === 'Hỗ trợ Vive' ? 900 : '',
        }}
      >
        {content}
      </div>
      <div
        className="dropdown dropdown-links"
        style={{ display: showDropdown ? 'block' : 'none' }}
      >
        {links.map((link, index) => (
          <HeaderLinkItem key={index} className="text-link-2" {...link} />
        ))}
      </div>
    </div>
  );
};

export default HeaderMenu;
