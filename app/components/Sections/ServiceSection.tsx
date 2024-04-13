import React from 'react';
import Section from '../containers/Section';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Deal, dealMob, dealTab } from '@/public';
import MainContainer from '../containers/MainContainer';

const ServiceSection = () => {
  return (
    <Section
      className=" mt-[50px] bg-white  py-5 md:mt-[70px] md:py-6 lg:flex  lg:mt-[100px] lg:py-0 lg:pl-5"
      id="service"
    >
      <MainTitle text="Послуги" className=" text-center mb-7 md:mb-[42px] lg:hidden " />
      <Image
        src={Deal}
        alt="Фото укладання угоди"
        className=" w-full h-[257px] lg:h-[700px] lg:w-[794px] hidden lg:block"
        objectFit="cover"
      />
      <Image
        src={dealTab}
        alt="Фото укладання угоди"
        className=" hidden md:block lg:hidden w-full h-[368px]"
        objectFit="cover"
      />
      <Image src={dealMob} alt="Фото укладання угоди" className="  md:hidden w-full h-[258px]" objectFit="cover" />

      <MainContainer className=" mt-6 md:mt-8 lg:px-[54px] lg:mt-[120px] lg:flex lg:flex-col lg:justify-start lg:mx-0">
        <MainTitle text="Послуги" className=" mb-9 md:mb-[42px] hidden lg:block lg:mb-9" />

        <ul className=" flex flex-col gap-3 text-[#090909] font-montserrat text-sm md:text-lg lg:max-w-[500px]">
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
            <h3>Продаж та купівля підприємств таких як ресторани, бази відпочинку, готелі, агропідприємства та інше</h3>
          </li>
        </ul>
      </MainContainer>
    </Section>
  );
};

export default ServiceSection;
