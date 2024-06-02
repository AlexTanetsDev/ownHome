import React from 'react';
import Section from '../containers/Section';
import MainContainer from '../containers/MainContainer';
import MainTitle from '../Titles/MainTitle';
import Image from 'next/image';
import { Team3 } from '@/public';
import Paragpraph from '../Paragraph/Paragpraph';
import SwiperComp from '../Swiper/Swiper';
import ShowMore from '../ShowMore/ShowMore';

const AboutUsSection = () => {
  return (
    <Section className=" pt-[50px] md:pt-[68px] lg:pt-[100px] " id="about">
      <MainContainer className="mb-[24px] md:mb-[42px]">
        <MainTitle text="Про нас" className="lg:text-center" />
      </MainContainer>
      <MainContainer className=" bg-white py-5 md:py-6 lg:flex lg:items-center lg:relative lg:h-[800px] lg:max-w-full">
        <Image
          src={Team3}
          alt="Фото зісновника"
          sizes="auto"
          className="rounded-sm mb-6 md:mb-8 md:max-w-[416px] lg:max-w-[520px]  md:ml-auto  lg:absolute lg:top-[60px] lg:right-[72px]"
        />
        <div className="lg:w-[600px] 2xl:w-[800px]">
          <Paragpraph className="lg:!text-base 2xl:!text-lg">
            Керівник і засновник агенції нерухомості &apos;Власний дім&apos; — Дмитро Александров,
            <br /> чиі знання, досвід та пристрасть, спрямовані на створення найкращих умов для клієнтів. <br />
            Засновавши цю агенцію, Дмитро віддав свою енергію та талант з метою забезпечити професійне обслуговування у
            сфері нерухомості на ринку Києва. <br />
            Він обирає індивідуальний підхід до кожного клієнта, ретельно аналізуючи їхні потреби та впевнено керуючи
            усіма етапами угоди. <br />
            Дмитро та його команда професійних сертифікованих ріелторів в першу чергу, і просто гарних та чуйних людей,
            завжди на звʼязку з Вами, готові відповісти на будь-які запитання та надати найкращі рішення.
            <ShowMore text="Читати далі" elId="continueText" />
            <span id="continueText" className={` md:inline hidden`}>
              {' '}
              Їхні цінності — це відвертість, чесність та відданість кожному клієнту, що робить їх агенцією, на яку
              можна покластися. Бо вона будувалась на засадах та досвіді, який передав Дмитру його батько, який ще з
              90-х років був головним юрисконсультом в одній із перших агенцій нерухомості в місті Києві, легендарний
              «Ваш Дім». <br />А отже і сам Дмитро і всі ріелтори його команди це завжди більше ніж людина, яка
              приходить на перегляд з бахілами. <br />
              Сам Дмитро за освітою юрист, зараз аспірант третього курсу НУБІПа, в якого в наступному році захист
              дисертації на тему «Відкриття ринку землі в Україні» на кафедрі економічної теорії. Але в першу чергу
              чоловік прекрасної дружини, батько двох принцес, і син пенсіонерки, а отже знає потреби всіх своїх
              потенційних клієнтів. <br />
              Весь час повномасштабного вторгнення Дмитро і його команда, працюють на економіку країни тут в Києві, і
              якщо бувають угоди (яких до війни було значно більше), то майже завжди з них донатять своїм друзям
              військовим які весь час з початку війни боронять нашу країну в різних підрозділах ЗСУ.
            </span>
          </Paragpraph>
        </div>
      </MainContainer>
      <MainContainer className="  lg:max-w-full py-[50px] md:py-[70px] lg:py-[100px]">
        <SwiperComp />
      </MainContainer>
      <MainContainer className=" bg-white md:bg-inherit  ">
        <div className="md:bg-white py-5  md:py-9 md:px-3 lg:w-[1124px] lg:mx-auto lg:py-10 lg:px-[110px]">
          <h2 className="text-[#090909] font-messiri text-[40px] italic text-center mb-6 lg:text-[55px]">
            Власний дім це
          </h2>
          <Paragpraph className=" md:text-center">
            Власний дім — це команда однодумців, які не тільки професіонали в своїй сфері діяльності, а також сучасні,
            емпатичні, і дуже мотивовані люди, серед яких є науковці, учасники АТО, переселенці, які зажди доводять
            справу до кінця, і після угоди не тільки забирають свою комісію, а ще й супроводять до банку, якщо це продаж
            , або організують супровід нерухомості на весь строк оренди якщо це оренда, ми робимо все задля того щоб
            наші клієнти стали нашими друзями. Концепція нашої агенції це невеличка «домашня» агенція яка на разі
            складається із трьох осіб, які працюють якісно для своїх клієнтів не жаліючи себе, щоб клієнти могли це
            відчути і розслаблятися, не дивлячись не те що операції з нерухомості це зажди зона підвищенного стресу і
            тиску, тим паче під час війни.
          </Paragpraph>
        </div>
      </MainContainer>
    </Section>
  );
};

export default AboutUsSection;
