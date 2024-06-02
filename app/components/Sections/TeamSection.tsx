import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Team2, Team1 } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';

const TeamSection = () => {
  return (
    <Section className="lg:pb-[80px]" id="team">
      <MainContainer className="pb-[65px] md:pb-[85px] lg:pb-[92px]">
        <MainTitle text="Наша команда" className="text-center md:pl-[80px]" />
      </MainContainer>
      <MainContainer className="relative pb-5 bg-white lg:flex lg:h-[476px] lg:max-w-full">
        <div className="md:flex  ">
          <Image
            src={Team1}
            alt="Фото співробітника"
            sizes="auto"
            className=" w-full rounded-[2px] relative -top-[41px] md:w-[352px]  lg:w-[416px] lg:h-[620px]"
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] -mt-6 mb-6 md:ml-[88px] md:mt-[114px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div className="lg:ml-[50px] xl:ml-[134px]">
          <h3 className=" font-roboto  text-[30px] italic text-[#090909] hidden lg:block lg:mb-[22px] lg:mt-[88px] ">
            Коваль
            <br className="lg:hidden" /> Ілона Вікторівна
          </h3>
          <Paragpraph className="md:max-w-[570px] md:ml-auto lg:ml-0 lg:max-w-[636px]">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
            талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
            індивідуальний підхід до кожного клієнта, ретельно .
          </Paragpraph>
        </div>
      </MainContainer>
      <MainContainer className=" pt-[50px] pb-[91px] md:pt-7 md:pb-[60px] lg:py-5 lg:flex flex-row-reverse lg:gap-[134px] lg:justify-start">
        <div className="md:flex flex-row-reverse ">
          <Image
            src={Team2}
            alt="Фото співробітника"
            sizes="auto"
            className=" w-full rounded-[2px] md:w-[352px]  lg:w-[416px]"
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] mt-7 mb-6 md:mr-[88px] md:mt-[120px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div className="lg:mt-[137px]">
          <h3 className=" font-roboto  text-[30px] italic text-[#090909]  mb-[22px] hidden lg:block ">
            Коваль Ілона Вікторівна
          </h3>
          <Paragpraph className="md:max-w-[567px] md:mt-7">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
            талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
            індивідуальний підхід до кожного клієнта, ретельно .
          </Paragpraph>
        </div>
      </MainContainer>
    </Section>
  );
};

export default TeamSection;
