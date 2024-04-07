import { Burger, Logo } from '@/public';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../containers/MainContainer';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="absolute z-10  bg-transparent pt-4 w-full  lg:pt-5">
      <MainContainer className="flex justify-between items-start lg:pl-[72px] lg:pr-[68px]">
        <Image src={Logo} alt="Логотип компанії" className=" size-[108px] mt-1  md:size-[152px] lg:size-[154px]" />
        <Image src={Burger} alt="Іконка бургер меню" className=" size-[40px]  md:size-[50px] lg:hidden" />
        <Navbar />
      </MainContainer>
    </header>
  );
};

export default Header;
