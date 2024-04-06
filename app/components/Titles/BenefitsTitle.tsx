import React from 'react';
type Props = {
  children: string;
  className?: string;
};

const BenefitsTitle = ({ children, className }: Props) => {
  return (
    <h3 className={` font-montserrat text-center font-medium text-[22px] text-[#BB8B2A] ${className}`}>{children}</h3>
  );
};

export default BenefitsTitle;
