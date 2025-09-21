/* eslint-disable @next/next/no-img-element */
import { CSSProperties, ReactNode, useEffect, useMemo, useState } from 'react';
import { TInitialLayout } from '@/typescript/types/props';
import { HeaderTopDesktop, HeaderTopMobile } from './header/HeaderTop';
import WaveBackground from '../WaveBackground';
import HeaderContentSection from './header/HeaderContentSection';
import HeaderMenu from './header/HeaderMenu';
import { usePathname } from 'next/navigation';
type PHeader = {
  backgroundItem: TInitialLayout['background'] | undefined;
  content: TInitialLayout['headerContent'] | undefined;
  MainSection?: ReactNode;
};

const Header = ({ backgroundItem, MainSection, content }: PHeader) => {
  const pathName = usePathname();
  const imageBgStyle: CSSProperties = useMemo(
    () =>
      backgroundItem?.type === 'image'
        ? {
            backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,0)), url(${backgroundItem.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: backgroundItem.position
              ? backgroundItem.position
              : 'center',
          }
        : {},
    [backgroundItem?.src, backgroundItem?.type, backgroundItem?.position],
  );

  return (
    <header className="vive-layout-header extend" style={imageBgStyle}>
      {backgroundItem?.type === 'video' ? (
        <div className="bg-video-container">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={backgroundItem.src} type="video/mp4" />
          </video>
        </div>
      ) : null}
      <WaveBackground className="absolute-wave" />
      <div className="header-inner">
        <div className="container">
          <HeaderTopMobile />
          <HeaderTopDesktop />
          {pathName.startsWith('/petition/') ? null : <HeaderMenu />}
          {MainSection ?? (
            <HeaderContentSection
              title={content?.title ?? ''}
              subTitle={content?.subTitle}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export const SimpleHeader = () => (
  <header className="vive-layout-header">
    <div className="header-inner">
      <div className="container">
        <HeaderTopMobile />
        <HeaderTopDesktop simple />
        <HeaderMenu />
      </div>
    </div>
  </header>
);

export default Header;
