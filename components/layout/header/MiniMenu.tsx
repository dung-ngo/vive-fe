import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HLogo from '@/assets/images/vive-logo-horizontal.png';
import Close from '@/assets/svgs/delete.svg';
import Languages from './Languages';
import { direct } from '@/utils/link.util';
import { useRouter } from 'next/router';
import { useLayoutContext } from '@/context/LayoutContext';
import Search from '../search/Search';
import useTranslations from '@/hooks/useTranslations';

const MiniMenu = () => {
  const t = useTranslations();
  const { locale, events } = useRouter();
  const { showMobileHeaderMenu, setShowMobileHeaderMenu } = useLayoutContext();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownClicked, setDropdownClicked] = useState<string | null>(null);

  const onDropdownToggle = (keyword: string) => {
    if (openDropdown === keyword) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(keyword);
    }
  };

  useEffect(() => {
    const hideMenu = () => {
      setShowMobileHeaderMenu(false);
    };

    events.on('routeChangeComplete', hideMenu);
    return () => {
      events.off('routeChangeComplete', hideMenu);
    };
  }, []);

  if (!showMobileHeaderMenu) return null;
  return (
    <div className="header-mini-menu">
      <nav>
        <div className="mini-menu-list">
          <div className="mini-menu-top">
            <Link href="/">
              <Image width={160} height={52} alt="Vive" src={HLogo} />
            </Link>
            <div
              className="header-close"
              onClick={() => {
                setShowMobileHeaderMenu(false);
              }}
            >
              <Image width={18} height={18} alt="Close" src={Close} />
            </div>
          </div>
          <div className="mini-menu-body">
            <div className="search-bar">
              <Search />
            </div>
            <div className="body-list">
              <ul>
                <li onClick={() => onDropdownToggle('7NgayThuanChay')}>
                  <div
                    className={`list-item-dropdown  ${
                      dropdownClicked === '7NgayThuanChay'
                        ? 'dropdown-white'
                        : ''
                    }`}
                    onMouseDown={() => setDropdownClicked('7NgayThuanChay')}
                    onMouseUp={() => setDropdownClicked('')}
                  >
                    <span>{t.header.sevenNgayThuanChay}</span>
                    <i
                      className={`arrow ${
                        openDropdown === '7NgayThuanChay' ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  {openDropdown === '7NgayThuanChay' && (
                    <ul className="dropdown-list">
                      <li>
                        <Link href={direct('challenge-life-vegan', locale)}>
                          {t.header.thamGiaThuThach}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('faqs', locale)}>
                          {t.header.cauHoiThuongGap}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={() => console.log('click')}>
                  <div className="list-item">
                    <Link href={direct('vegan-info', locale)}>
                      <span>{t.header.banCanBiet}</span>
                    </Link>
                  </div>
                </li>
                <li onClick={() => onDropdownToggle('VeChungToi')}>
                  <div
                    className={`list-item-dropdown  ${
                      dropdownClicked === 'VeChungToi' ? 'dropdown-white' : ''
                    }`}
                    onMouseDown={() => setDropdownClicked('7NgayThuanChay')}
                    onMouseUp={() => setDropdownClicked('')}
                  >
                    <span>{t.header.veChungToi}</span>
                    <i
                      className={`arrow ${
                        openDropdown === 'VeChungToi' ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  {openDropdown === 'VeChungToi' && (
                    <ul className="dropdown-list">
                      <li>
                        <Link href={direct('about-us', locale)}>
                          {t.header.veChungToi}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('join-us', locale)}>
                          {t.header.doiNguSongThuanChay}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('contact-us', locale)}>
                          {t.header.lienHe}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('eat-for-the-future', locale)}>
                          {t.header.anChoTuongLai}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={() => onDropdownToggle('GocBep')}>
                  <div
                    className={`list-item-dropdown  ${
                      dropdownClicked === 'GocBep' ? 'dropdown-white' : ''
                    }`}
                    onMouseDown={() => setDropdownClicked('7NgayThuanChay')}
                    onMouseUp={() => setDropdownClicked('')}
                  >
                    <span>{t.header.gocBep}</span>
                    <i
                      className={`arrow ${
                        openDropdown === 'GocBep' ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  {openDropdown === 'GocBep' && (
                    <ul className="dropdown-list">
                      <li>
                        <Link href={direct('vegan-food', locale)}>
                          {t.header.gocBep}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('review-restaurant')}>
                          {t.header.reviewQuanAn}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('recipe-vegan')}>
                          {t.header.congThucNauAn}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('vegan-book')}>
                          {t.header.camNangMienPhi}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={() => onDropdownToggle('TinTuc')}>
                  <div
                    className={`list-item-dropdown  ${
                      dropdownClicked === 'TinTuc' ? 'dropdown-white' : ''
                    }`}
                    onMouseDown={() => setDropdownClicked('7NgayThuanChay')}
                    onMouseUp={() => setDropdownClicked('')}
                  >
                    <span>{t.header.tinTuc}</span>
                    <i
                      className={`arrow ${
                        openDropdown === 'TinTuc' ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  {openDropdown === 'TinTuc' && (
                    <ul className="dropdown-list">
                      <li>
                        <Link href={direct('petitions', locale)}>
                          {t.header.petitions}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('news', locale)}>
                          {t.header.tatCaTinTuc}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('news+health', locale)}>
                          {t.header.sucKhoe}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('news+animals', locale)}>
                          {t.header.dongVat}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('news+environment', locale)}>
                          {t.header.moiTruong}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={() => console.log('film')}>
                  <div className="list-item">
                    <Link href={direct('film', locale)}>
                      <span>{t.header.phim}</span>
                    </Link>
                  </div>
                </li>
                <li onClick={() => console.log('v-label')}>
                  <div className="list-item">
                    <Link href={direct('v-label', locale)}>
                      <span>{t.header.vLabel}</span>
                    </Link>
                  </div>
                </li>
                <li onClick={() => onDropdownToggle('supportVive')}>
                  <div
                    className={`list-item-dropdown  ${
                      dropdownClicked === 'supportVive' ? 'dropdown-white' : ''
                    }`}
                    onMouseDown={() => setDropdownClicked('7NgayThuanChay')}
                    onMouseUp={() => setDropdownClicked('')}
                  >
                    <span>{t.header.hoTroVive}</span>
                    <i
                      className={`arrow ${
                        openDropdown === 'supportVive' ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  {openDropdown === 'supportVive' && (
                    <ul className="dropdown-list">
                      <li>
                        <Link href={direct('membership', locale)}>
                          {t.header.dangKyThanhVien}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('gift-giving', locale)}>
                          {t.header.dongGopKhac}
                        </Link>
                      </li>
                      <li>
                        <Link href={direct('volunteer', locale)}>
                          {t.header.tinhNguyenVien}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mini-menu-languages">
          <Languages />
        </div>
      </nav>
    </div>
  );
};

export default MiniMenu;
