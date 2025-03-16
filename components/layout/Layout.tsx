import { ReactNode } from 'react';
import Header, { SimpleHeader } from './Header';
import Footer from './Footer';
import { TInitialLayout } from '@/typescript/types/props';
import HelperSection from './HelperSection';
import dynamic from 'next/dynamic';

const MiniMenu = dynamic(() => import('./header/MiniMenu'), { ssr: false });

type LayoutProps = {
  children: ReactNode;
  layoutProps?: TInitialLayout;
  MainSection?: ReactNode;
  simpleHeader?: boolean;
  noHelperSection?: boolean;
  className?: string;
};

const Layout = ({
  children,
  layoutProps,
  MainSection,
  simpleHeader,
  noHelperSection,
  className,
}: LayoutProps) => {
  return (
    <div className={className}>
      {simpleHeader ? (
        <SimpleHeader />
      ) : (
        <Header
          backgroundItem={layoutProps?.background}
          content={layoutProps?.headerContent}
          MainSection={MainSection}
        />
      )}
      <MiniMenu />
      <main
        className="vive-layout-main"
        style={{ paddingTop: simpleHeader ? 0 : 80 }}
      >
        {children}
      </main>
      {noHelperSection ? null : <HelperSection />}
      <Footer />
    </div>
  );
};

export default Layout;
