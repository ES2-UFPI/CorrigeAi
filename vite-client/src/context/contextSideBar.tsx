import React, { createContext, useState } from 'react';

interface ContextType {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Props {
  children: React.ReactNode
}

export const SidebarContext = createContext<ContextType>({
  sideBar: false,
  setSideBar: () => {},
});

const SidebarProvider: React.FC<Props> = ({ children }) => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;