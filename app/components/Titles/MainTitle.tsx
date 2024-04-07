import React from 'react';

type Props = {
  text: string;
  className?: string;
};

const MainTitle = ({ text, className }: Props) => {
  return (
    <h2 className={` text-[28px] font-roboto italic text-[#090909] md:text-4xl lg:text-[40px] ${className}`}>{text}</h2>
  );
};

export default MainTitle;
