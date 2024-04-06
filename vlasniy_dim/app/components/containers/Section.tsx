import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return <section className={`max-w-[450px] ${className}`}>{children}</section>;
};

export default Section;
