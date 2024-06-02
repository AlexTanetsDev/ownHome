'use client';
import React from 'react';
import { scrolltoHash } from '../Navbar/Navbar';

type Props = {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string;
  href?: string;
};

const MainBtn = ({ type, text, href }: Props) => {
  return (
    <button
      type={type}
      onClick={() => scrolltoHash('contacts')}
      className="hoverBtn cursor-pointer w-[343px] h-[50px] py-[15px] rounded-md text-center text-white font-montserrat font-medium bg-[#DD6A00] md:w-[196px] md:h-[44px] md:py-3"
    >
      {text}
    </button>
  );
};

export default MainBtn;
