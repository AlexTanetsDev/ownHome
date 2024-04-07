import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Team2, Team3, Team4, Team5 } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';

const TeamSection = () => {
  return (
    <Section className="lg:pb-[80px]" id="team">
      <MainContainer className="pb-[65px] md:pb-[85px] lg:pb-[92px]">
        <MainTitle text="Наша команда" className="text-center pl-[80px]" />
      </MainContainer>
      <MainContainer className="relative pb-5 bg-white lg:flex lg:h-[476px]">
        <div className="md:flex  ">
          <Image
            src={Team2}
            alt="Фото співробітника"
            className=" w-full h-[415px] rounded-[2px] relative -top-[41px] md:w-[352px] md:h-[423px] lg:h-[500px] lg:w-[416px]"
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] -mt-6 mb-6 md:ml-[88px] md:mt-[114px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div className="lg:ml-[134px]">
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
      <MainContainer className=" pt-[50px] pb-[91px] md:pt-7 md:pb-[60px] lg:py-5 lg:flex flex-row-reverse lg:gap-[134px] lg:justify-center">
        <div className="md:flex flex-row-reverse ">
          <Image
            src={Team3}
            alt="Фото співробітника"
            className=" w-full h-[415px] rounded-[2px] md:w-[352px] md:h-[423px] lg:h-[500px] lg:w-[416px]"
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] mt-7 mb-6 md:mr-[88px] md:mt-[120px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div className="lg:mt-[137px]">
          <h3 className=" font-roboto text-center text-[30px] italic text-[#090909]  mb-[22px] ">
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
      <MainContainer className="relative pb-5 bg-white md:pb-8 md:pt-5 lg:py-5 lg:flex lg:gap-[134px] lg:justify-center items-center">
        <div className="md:flex  ">
          <Image
            src={Team4}
            alt="Фото співробітника"
            className=" w-full h-[415px] rounded-[2px] relative -top-[41px]  md:w-[352px] md:h-[423px] md:static lg:h-[500px] lg:w-[416px]"
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] -mt-6 mb-6 md:mt-[140px] md:ml-[88px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div>
          <h3 className=" font-roboto text-center text-[30px] italic  text-[#090909]  hidden lg:block lg:mb-[22px]">
            Коваль Ілона Вікторівна
          </h3>
          <Paragpraph className="md:max-w-[567px] md:mt-7 md:ml-auto">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів. Засновавши цю агенцію, Дмитро віддав свою енергію та
            талант з метою забезпечити професійне обслуговування у сфері нерухомості на ринку Києва. Він обирає
            індивідуальний підхід до кожного клієнта, ретельно .
          </Paragpraph>
        </div>
      </MainContainer>
      <MainContainer className=" pt-[50px] pb-[91px] md:pt-[28px] md:pb-[70px] lg:py-5 lg:flex flex-row-reverse lg:gap-[134px] lg:justify-center">
        <div className="md:flex flex-row-reverse ">
          <Image
            src={Team5}
            alt="Фото співробітника"
            className=" w-full h-[415px] rounded-[2px] md:w-[352px] md:h-[423px] lg:h-[500px] lg:w-[416px] "
          />
          <h3 className=" font-roboto text-center text-[26px] italic text-[#090909] mt-7 mb-6 md:mr-[88px] md:mt-[120px] lg:hidden">
            Коваль
            <br /> Ілона Вікторівна
          </h3>
        </div>
        <div className="lg:mt-[137px]">
          <h3 className=" font-roboto text-center text-[30px] italic text-[#090909]  mb-[22px] ">
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
