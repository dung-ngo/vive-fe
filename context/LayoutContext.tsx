import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type InitialLayout = {
  showMobileHeaderMenu: boolean;
  setShowMobileHeaderMenu: Dispatch<SetStateAction<boolean>>;
};

export const LayoutContext = createContext<InitialLayout | null>(null);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw Error('Component must be in LayoutContext');
  }
  return context;
};

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [showMobileHeaderMenu, setShowMobileHeaderMenu] = useState<boolean>(false);

  const contextValues = { showMobileHeaderMenu, setShowMobileHeaderMenu };

  return <LayoutContext.Provider value={contextValues}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
