import React, { ReactNode } from 'react';

const MainContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`px-[15px] max-w-[376px] mx-auto  md:px-5 md:max-w-[750px] lg:max-w-[1440px] lg:px-[72px] ${className}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
