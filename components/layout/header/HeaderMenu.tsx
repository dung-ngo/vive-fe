import useTranslations from '@/hooks/useTranslations';
import client from '@/lib/apolloClient';
import {
  GetPetitionDocument,
  GetPetitionQuery,
  GetPetitionQueryVariables,
} from '@/lib/gql/graphql';
import { direct } from '@/utils/link.util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

type Props = {};

const HeaderMenu = () => {
  const { locale } = useRouter();
  const t = useTranslations();
  const [dropdownItemsNews, setDropdownItemsNews] = useState([
    { content: t.header.tatCaTinTuc, link: direct('news', locale) },
    { content: t.header.sucKhoe, link: direct('news+health', locale) },
    { content: t.header.dongVat, link: direct('news+animals', locale) },
    {
      content: t.header.moiTruong,
      link: direct('news+environment', locale),
    },
  ]);

  async function fetchPetitionSlug() {
    let { data, errors } = await client.query<
      GetPetitionQuery,
      GetPetitionQueryVariables
    >({
      query: GetPetitionDocument,
      variables: {
        locale: locale,
      },
    });
    if (errors) {
      console.log('fetchPetitionSlug --errors: ', errors);
      return;
    }
    if (data?.petition?.data?.attributes?.slug) {
      setDropdownItemsNews([
        // {
        //   content: t.header.petitions,
        //   link: `/petition/${data.petition.data.attributes.slug}`,
        // },
        ...dropdownItemsNews,
      ]);
    }
  }

  useEffect(() => {
    fetchPetitionSlug();
  }, []);

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
            content: t.header.vegFest,
            link: 'https://www.vegfestvietnam.vn',
          },
          {
            content: t.header.anChoTuongLai,
            link: direct('eat-for-the-future', locale),
          },
          {
            content: t.header.doiNguVive,
            link: direct('join-us', locale),
          },
          { content: t.header.lienHe, link: direct('contact-us', locale) },
        ]}
      />
      <HeaderDropdownItem
        content={t.header.gocBep}
        links={[
          // (Dung_2024-Aug-27) Temporary deactivate Goc Bep and Review quan an page
          // { content: t.header.gocBep, link: direct('vegan-food', locale) },
          // {
          //   content: t.header.reviewQuanAn,
          //   link: direct('review-restaurant', locale),
          // },
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
      <HeaderDropdownItem content={t.header.tinTuc} links={dropdownItemsNews} />
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

const HeaderLinkItem = ({ link, content, className = '' }: PHeaderLinkItem) => {
  const router = useRouter();

  function handleGotoLink(link: string) {
    if (new RegExp(/^\/(en\/)?(petition|don-thinh-cau)/).test(link)) {
      router
        .push(link, undefined, {
          locale: router.locale,
        })
        .then(() => router.reload());
    } else {
      router.push(link, undefined, {
        locale: router.locale,
      });
    }
  }
  return (
    <div onClick={() => handleGotoLink(link)} className="header-link-item">
      <div className={className}>{content}</div>
    </div>
  );
};

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
