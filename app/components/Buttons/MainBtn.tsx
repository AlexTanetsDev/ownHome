'use client';
import React from 'react';

type Props = {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  onClick?: () => void;
};

const MainBtn = ({ type, text, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="cursor-pointer w-[343px] h-[50px] py-[15px] rounded-md text-center text-white font-montserrat font-medium bg-[#DD6A00] md:w-[196px] md:h-[44px] md:py-3"
    >
      {text}
    </button>
  );
};

export default MainBtn;
