import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Paragpraph = ({ children, className }: Props) => {
  return <p className={` font-montserrat text-base lg:text-lg text-[#090909]  ${className}`}>{children}</p>;
};

export default Paragpraph;
