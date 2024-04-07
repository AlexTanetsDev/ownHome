import React from 'react';
import MainContainer from '../containers/MainContainer';
import Section from '../containers/Section';
import MainTitle from '../Titles/MainTitle';
import BenefitsTitle from '../Titles/BenefitsTitle';
import Paragpraph from '../Paragraph/Paragpraph';

const BenefitsSection = () => {
  return (
    <Section className=" py-[50px] md:py-[70px] lg:py-[100px]" id="benefits">
      <MainContainer className="">
        <MainTitle text="Переваги" className="text-center mb-6 md:mb-[42px]" />
        <ul className="flex flex-col gap-[50px] md:gap-[60px] md:max-w-[612px] mx-auto lg:flex-row lg:flex-wrap lg:w-full lg:max-w-full justify-center">
          <li className=" flex flex-col gap-3  lg:w-[387px]">
            <BenefitsTitle>Cертифікаційна команда</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3 lg:w-[387px]">
            <BenefitsTitle>Вигідні та прозорі умови</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3 lg:w-[387px]">
            <BenefitsTitle>Конфіденційність</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3 lg:w-[387px]">
            <BenefitsTitle>Офіс у центрі міста </BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3 lg:w-[387px]">
            <BenefitsTitle>Офіс у центрі міста </BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
        </ul>
      </MainContainer>
    </Section>
  );
};

export default BenefitsSection;
