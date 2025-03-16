/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import HLogo from '@/assets/images/vive-logo-horizontal.png';
import VLogo from '@/assets/images/vive-logo-vertical.png';
import VLogoGreen from '@/assets/images/vive-logo-vertical-green.png';
import MiniMenu from './MiniMenu';
import Image from 'next/image';
import Search from '@/components/layout/search/Search';
import Languages from './Languages';
import { useLayoutContext } from '@/context/LayoutContext';
import Hamburger from '@/assets/svgs/hamburger.svg';

export const HeaderTopMobile = () => {
  const { setShowMobileHeaderMenu } = useLayoutContext();
  return (
    <section className="header-top-mobile">
      <Link href="/">
        <Image width={160} height={52} alt="Vive" src={HLogo} />
      </Link>
      <div
        className="header-mini-menu-icon"
        onClick={() => {
          setShowMobileHeaderMenu(true);
        }}
      >
        <Image height={24} width={24} alt="Menu" src={Hamburger} />
      </div>
    </section>
  );
};

export const HeaderTopDesktop = ({ simple }: { simple?: boolean }) => {
  return (
    <section className="header-top-desktop">
      <Search />
      <Link href="/">
        <Image width={110} height={110} alt="Vive" src={simple ? VLogoGreen : VLogo} />
      </Link>
      <Languages />
    </section>
  );
};
