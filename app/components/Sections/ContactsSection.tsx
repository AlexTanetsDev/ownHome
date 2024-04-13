import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { LogoFooter } from '@/public';
import ContactsForm from '../Forms/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';

const ContactsSection = () => {
  return (
    <Section id="contacts" className="md:max-w-full lg:max-w-full">
      <MainContainer className=" mb-6 lg:mb-[42px] lg:max-w-full">
        <MainTitle text="Контакти" />
      </MainContainer>
      <MainContainer className="flex flex-col gap-[60px] bg-[#141414] max-w-[450px] items-center pt-4 pb-9 md:pt-[80px] md:max-w-full  lg:max-w-full lg:flex-row lg:py-[50px] lg:items-start lg:justify-between">
        <div className="flex flex-col gap-[60px] md:w-full md:flex-row md:items-center md:gap-[110px] lg:items-start lg:gap-[130px] lg:w-[660px]">
          <Image
            src={LogoFooter}
            alt="Логотип компанії"
            className=" size-[253px] md:size-[328px] lg:size-[306px] lg:mt-[100px]"
          />
          <ContactsList className="lg:hidden" />
        </div>
        <div className="lg:flex gap-[130px]">
          <ContactsList className="hidden lg:flex" />
          <ContactsForm />
        </div>
      </MainContainer>
    </Section>
  );
};

export default ContactsSection;
