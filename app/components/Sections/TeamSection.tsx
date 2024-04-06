import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Team2, Team3, Team4, Team5 } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';

const TeamSection = () => {
  return (
    <Section>
      <MainContainer className="pb-[65px]">
        <MainTitle text="Наша команда" className="text-center" />
      </MainContainer>
      <MainContainer className="relative pb-5 bg-white">
        <Image src={Team2} alt="Фото співробітника" className=" w-full h-[415px] rounded-[2px] relative -top-[41px]" />
        <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] -mt-6 mb-6">
          Коваль
          <br /> Ілона Вікторівна
        </h3>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
          індивідуальний підхід до кожного клієнта, ретельно .
        </Paragpraph>
      </MainContainer>
      <MainContainer className=" pt-[50px] pb-[91px]">
        <Image src={Team3} alt="Фото співробітника" className=" w-full h-[415px] rounded-[2px]" />
        <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] mt-7 mb-6">
          Коваль
          <br /> Ілона Вікторівна
        </h3>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
          індивідуальний підхід до кожного клієнта, ретельно .
        </Paragpraph>
      </MainContainer>
      <MainContainer className="relative pb-5 bg-white">
        <Image src={Team4} alt="Фото співробітника" className=" w-full h-[415px] rounded-[2px] relative -top-[41px]" />
        <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] -mt-6 mb-6">
          Коваль
          <br /> Ілона Вікторівна
        </h3>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
          індивідуальний підхід до кожного клієнта, ретельно .
        </Paragpraph>
      </MainContainer>
      <MainContainer className=" pt-[50px] pb-[91px]">
        <Image src={Team5} alt="Фото співробітника" className=" w-full h-[415px] rounded-[2px]" />
        <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] mt-7 mb-6">
          Коваль
          <br /> Ілона Вікторівна
        </h3>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
          індивідуальний підхід до кожного клієнта, ретельно .
        </Paragpraph>
      </MainContainer>
    </Section>
  );
};

export default TeamSection;
