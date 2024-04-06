import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Team1 } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';
import SwiperComp from '../Swiper/Swiper';

const AboutUsSection = () => {
  return (
    <Section className=" pt-[50px]">
      <MainContainer className="mb-[24px]">
        <MainTitle text="Про нас" />
      </MainContainer>
      <MainContainer className=" bg-white py-5">
        <Image src={Team1} alt="Фото зісновника" className=" w-full h-[458px] rounded-sm mb-6" />
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування
          <span className="">
            ... <span className="text-[#1B21AF]">Читати далі</span>
          </span>
        </Paragpraph>
      </MainContainer>
      <MainContainer className=" py-[50px]">
        <SwiperComp />
      </MainContainer>
      <MainContainer className=" bg-white py-5">
        <h2 className="text-[#090909] font-messiri text-[40px] italic text-center mb-6">Власний дім це</h2>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
          талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
          індивідуальний підхід до кожного клієнта, ретельно аналізуючи їхні потреби та впевнено керуючи усіма етапами
          угоди. Дмитро та його команда професіоналів завжди на зв&apos;язку{' '}
        </Paragpraph>
      </MainContainer>
    </Section>
  );
};

export default AboutUsSection;
