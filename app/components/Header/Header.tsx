'use client';
import { Burger, Close, LogoFooter } from '@/public';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MainContainer from '../containers/MainContainer';
import Navbar from '../Navbar/Navbar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  return (
    <>
      <header className="absolute z-20  bg-transparent pt-4 w-full  lg:pt-4 ">
        <MainContainer className="flex justify-between items-start lg:pl-[72px] lg:pr-[68px] lg:max-w-full">
          <Image src={LogoFooter} alt="Логотип компанії" className=" size-[108px]   md:size-[152px] lg:size-[154px]" />
          {!isBurgerOpen ? (
            <Image
              src={Burger}
              alt="Іконка бургер меню"
              className=" size-10  md:size-[50px] lg:hidden"
              onClick={() => {
                document.body.classList.add(`overflow-hidden`);
                setIsBurgerOpen(true);
              }}
            />
          ) : (
            <Image
              src={Close}
              alt="Іконка закриття"
              className=" size-10  md:size-[50px] lg:hidden"
              onClick={() => {
                document.body.classList.remove(`overflow-hidden`);
                setIsBurgerOpen(false);
              }}
            />
          )}
          <Navbar />
        </MainContainer>
      </header>
      <BurgerMenu
        handleClose={() => {
          setIsBurgerOpen(false);
          document.body.classList.remove(`overflow-hidden`);
        }}
        isOpen={isBurgerOpen}
      />
    </>
  );
};

export default Header;
