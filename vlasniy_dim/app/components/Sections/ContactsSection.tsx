import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { LogoFooter } from '@/public';

const ContactsSection = () => {
  return (
    <Section>
      <MainContainer>
        <MainTitle text="Контакти" />
      </MainContainer>
      <MainContainer className="flex flex-col gap-[60px] bg-[#141414]">
        <Image src={LogoFooter} alt="Логотип компанії" className=" size-[253px]" />
        <ul className="flex flex-col gap-4">
          <li>
            <p className=" text-lg font-montserrat text-white text-center">Київ Дмитрівська 33, офіс 3</p>
          </li>
          <li>
            <a href="tel:+380950156545" className="text-lg  font-montserrat text-white text-center">
              +38095 015 65 45
            </a>
          </li>
          <li>
            <a href="mailto:example@mail.com" className="text-lg  font-montserrat text-white text-center">
              example@mail.com
            </a>
          </li>
        </ul>
      </MainContainer>
    </Section>
  );
};

export default ContactsSection;
