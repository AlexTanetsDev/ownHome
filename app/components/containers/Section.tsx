import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: Props) => {
  return (
    <section id={id} className={`w-full max-w-[450px] md:max-w-[750px] lg:max-w-[1440px] ${className}`}>
      {children}
    </section>
  );
};

export default Section;
