import React from 'react';
import MainContainer from '../containers/MainContainer';
import Section from '../containers/Section';
import MainTitle from '../Titles/MainTitle';
import BenefitsTitle from '../Titles/BenefitsTitle';
import Paragpraph from '../Paragraph/Paragpraph';

const BenefitsSection = () => {
  return (
    <Section className=" py-[50px]">
      <MainContainer>
        <MainTitle text="Переваги" className="text-center mb-6" />
        <ul className="flex flex-col gap-[50px]">
          <li className=" flex flex-col gap-3">
            <BenefitsTitle>Cертифікаційна команда</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3">
            <BenefitsTitle>Вигідні та прозорі умови</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3">
            <BenefitsTitle>Конфіденційність</BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3">
            <BenefitsTitle>Офіс у центрі міста </BenefitsTitle>{' '}
            <Paragpraph className="text-center">
              Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та
              пристрасть спрямовані на створення найкращих умов для клієнтів.{' '}
            </Paragpraph>
          </li>
          <li className=" flex flex-col gap-3">
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
