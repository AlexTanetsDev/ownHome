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
    <Section className=" pt-[50px] md:pt-[68px] lg:pt-[100px]" id="#about">
      <MainContainer className="mb-[24px] md:mb-[42px]">
        <MainTitle text="Про нас" className="lg:text-center" />
      </MainContainer>
      <MainContainer className=" bg-white py-5 md:py-6 lg:flex lg:items-center lg:relative lg:h-[700px]">
        <Image
          src={Team1}
          alt="Фото зісновника"
          className=" w-full h-[458px] rounded-sm mb-6 md:mb-8 md:w-[416px] md:h-[553px] md:ml-auto lg:w-[526px] lg:h-[700px] lg:absolute lg:top-[60px] lg:right-[72px]"
        />
        <div className="lg:w-[636px]">
          <Paragpraph>
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
            талант з метою забезпечити професійне обслуговування
            <span className="md:hidden">
              ... <span className="text-[#1B21AF]">Читати далі</span>
            </span>
            <span className="hidden md:inline">
              {' '}
              у сфері нерухомості на ринку Києва. Він обирає індивідуальний підхід до кожного клієнта, ретельно
              аналізуючи їхні потреби та впевнено керуючи усіма етапами угоди. Дмитро та його команда професіоналів
              завжди на зв&apos;язку з клієнтами, готові відповісти на будь-які питання та надати найкращі рішення.
            </span>
          </Paragpraph>
          <Paragpraph className=" mt-2 hidden md:block">
            Їхні цінності – це відвертість, чесність та відданість кожному клієнту, що робить їх агенцією, на яку можна
            покластися.
          </Paragpraph>
        </div>
      </MainContainer>
      <MainContainer className=" py-[50px] md:py-[70px] lg:py-[100px] lg:pt-[160px]">
        <SwiperComp />
      </MainContainer>
      <MainContainer className=" bg-white md:bg-inherit  ">
        <div className="md:bg-white py-5  md:py-9 md:px-3 lg:w-[1124px] lg:mx-auto lg:py-10 lg:px-[110px]">
          <h2 className="text-[#090909] font-messiri text-[40px] italic text-center mb-6 lg:text-[55px]">
            Власний дім це
          </h2>
          <Paragpraph className="text-center">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
            талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
            індивідуальний підхід до кожного клієнта, ретельно аналізуючи їхні потреби та впевнено керуючи усіма етапами
            угоди. Дмитро та його команда професіоналів завжди на зв&apos;язку{' '}
          </Paragpraph>
        </div>
      </MainContainer>
    </Section>
  );
};

export default AboutUsSection;
