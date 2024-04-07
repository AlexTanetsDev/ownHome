'use client';
import React from 'react';
import Section from '../containers/Section';
import Image from 'next/image';
import { HeroD, HeroM, HeroT } from '@/public';
import MainBtn from '../Buttons/MainBtn';
import MainContainer from '../containers/MainContainer';

const HeroSection = () => {
  return (
    <Section className="relative w-full ">
      <Image src={HeroM} alt="Фото Києва" className="w-full h-[812px] md:hidden" />
      <Image src={HeroT} alt="Фото Києва" className="w-full h-[1133px] hidden md:block lg:hidden " />
      <Image src={HeroD} alt="Фото Києва" className="w-full h-[960px] hidden lg:block" />

      <MainContainer className="absolute bottom-[200px] md:bottom-[346px] lg:bottom-[334px]">
        <h1 className=" text-6xl italic text-white font-messiri md:text-[90px]">Власний дім</h1>
        <h2 className=" font-montserrat font-medium text-sm text-white mt-5 mb-[50px] md:text-base md:max-w-[580px]">
          Агенція нерухомості з великим досвідом, надаємо різноманітні варіанти житла, що відповідають потребам кожного
          клієнта.
        </h2>
        <MainBtn type="button" text="Зв'язатись" onClick={() => console.log('Click')} />
      </MainContainer>
    </Section>
  );
};

export default HeroSection;
