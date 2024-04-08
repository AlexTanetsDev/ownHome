import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { LogoFooter } from '@/public';
import ContactsForm from '../Forms/ContactsForm';

const ContactsSection = () => {
  return (
    <Section id="contacts" className="md:max-w-full">
      <MainContainer className=" mb-6 lg:mb-[42px]">
        <MainTitle text="Контакти" />
      </MainContainer>
      <MainContainer className="flex flex-col gap-[60px] bg-[#141414] max-w-[450px] items-center pt-4 pb-9 md:pt-[80px] md:max-w-full  lg:max-w-full lg:flex-row lg:py-[50px] lg:items-start lg:gap-[130px]">
        <div className="flex flex-col gap-[60px] md:w-full md:flex-row md:items-center md:gap-[110px] lg:items-start lg:gap-[130px] lg:w-[660px]">
          <Image
            src={LogoFooter}
            alt="Логотип компанії"
            className=" size-[253px] md:size-[328px] lg:size-[306px] lg:mt-[120px]"
          />
          <ul className="flex flex-col gap-4 items-center md:max-w-[220px] md:items-start ">
            <li>
              <p className=" text-lg font-montserrat text-white text-center md:text-start">
                Київ
                <br className="hidden md:inline" /> Дмитрівська 33, офіс 3
              </p>
            </li>
            <li>
              <a href="tel:+380950156545" className="text-lg  font-montserrat text-white text-center hoverNav">
                +38095 015 65 45
              </a>
            </li>
            <li>
              <a href="mailto:example@mail.com" className="text-lg  font-montserrat text-white text-center hoverNav">
                example@mail.com
              </a>
            </li>
          </ul>
        </div>
        <ContactsForm />
      </MainContainer>
    </Section>
  );
};

export default ContactsSection;
