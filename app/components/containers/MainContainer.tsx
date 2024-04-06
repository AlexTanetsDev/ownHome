import React, { ReactNode } from 'react';

const MainContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`px-[15px] max-w-[376px] mx-auto ${className}`}>{children}</div>;
};

export default MainContainer;
