import React from 'react';
import Section from '../containers/Section';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Deal } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';
import MainContainer from '../containers/MainContainer';

const ServiceSection = () => {
  return (
    <Section
      className=" mt-[50px] bg-white  py-5 md:mt-[70px] md:py-6 lg:flex lg:mt-[100px] lg:py-0 lg:pl-5"
      id="service"
    >
      <MainTitle text="Послуги" className=" text-center mb-7 md:mb-[42px] lg:hidden " />
      <Image
        src={Deal}
        alt="Фото укладання угоди"
        className=" w-full h-[257px] md:h-[400px] lg:h-[700px] lg:w-[794px]"
        objectFit="cover"
      />
      <MainContainer className=" mt-6 md:mt-8 lg:px-[54px] lg:mt-[120px]">
        <MainTitle text="Послуги" className=" mb-9 md:mb-[42px] hidden lg:block lg:mb-9" />

        <ul className=" flex flex-col gap-3 text-[#090909] font-montserrat text-sm md:text-lg">
          <li key={1}>
            <h3>Продаж, купівля, оренда житлової та комерційної нерухомості</h3>
          </li>
          <li key={2}>
            <h3>Консалтинг, інвестиції в нерухомість</h3>
          </li>
          <li key={3}>
            <h3>Оцінка нерухомості</h3>
          </li>
          <li key={4}>
            <h3>Продаж, купівля землі </h3>
          </li>
          <li key={5}>
            <h3>Продаж та купівля підприємств таких як ресторани бази відпочинку, готелі, агропідприємства та інше</h3>
          </li>
        </ul>
      </MainContainer>
    </Section>
  );
};

export default ServiceSection;
