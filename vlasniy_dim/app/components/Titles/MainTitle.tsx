import React from 'react';

type Props = {
  text: string;
  className?: string;
};

const MainTitle = ({ text, className }: Props) => {
  return <h2 className={` text-[28px] font-roboto italic text-[#090909]  ${className}`}>{text}</h2>;
};

export default MainTitle;
