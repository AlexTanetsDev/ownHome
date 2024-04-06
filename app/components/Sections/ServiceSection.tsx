import React from 'react';
import Section from '../containers/Section';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Deal } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';
import MainContainer from '../containers/MainContainer';

const ServiceSection = () => {
  return (
    <Section className=" mt-[50px] bg-white max-w-[450px] py-5">
      <MainTitle text="Послуги" className=" text-center mb-7" />
      <Image src={Deal} alt="Фото укладання угоди" className=" w-full h-[257px]" />
      <MainContainer className=" mt-6">
        <ul className=" flex flex-col gap-3 text-[#090909] font-montserrat text-sm">
          <li key={1}>
            <h3 className=" font-montserrat">Продаж, купівля, оренда житлової та комерційної нерухомості</h3>
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
