import { Burger, Logo } from '@/public';
import Image from 'next/image';
import React from 'react';
import MainContainer from '../containers/MainContainer';

const Header = () => {
  return (
    <header className="absolute z-10  bg-transparent pt-4 w-full">
      <MainContainer className="flex justify-between items-start">
        <Image src={Logo} alt="Логотип компанії" className=" size-[108px] mt-1" />
        <Image src={Burger} alt="Іконка бургер меню" className=" size-[40зч]" />
      </MainContainer>
    </header>
  );
};

export default Header;
