import React, { createContext, useEffect, useState } from 'react';

export interface NavigationStore {
  currentPath: string;
  navigateTo: (to: string) => void;
}
interface ProviderProps {
  children: React.ReactNode;
}

export const NavigationContext = createContext<NavigationStore | undefined>(
  undefined
);

const NavigationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigateTo = (to: string): void => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };
  const state: NavigationStore = {
    currentPath,
    navigateTo,
  };
  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
