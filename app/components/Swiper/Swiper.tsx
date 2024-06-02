'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Paragpraph from '../Paragraph/Paragpraph';
import { Autoplay } from 'swiper/modules';

const SwiperComp = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      breakpoints={{ 650: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }}
      className="h-[308px]"
      modules={[Autoplay]}
      loop={true}
    >
      <SwiperSlide className="h-full">
        <div className="h-[150px] pb-7 pt-5 flex items-end">
          <Paragpraph className=" lg:!text-base lg:w-[350px]  ">
            Зустріч Дмитра і обʼєднання зусиль з партнером і співзасновником агентства «Власний Дім», Власом
            Кучковським.
          </Paragpraph>
        </div>
        <div className=" w-full h-[1px] bg-[#DADADA] relative ">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <div className="h-[150px] pt-8 flex items-start">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl ">2017 рік</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="lg:flex lg:flex-col-reverse ">
          <div className="h-[150px] pb-8 flex items-end lg:items-start  lg:pt-8">
            <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2018 рік </p>
          </div>

          <div className=" w-full h-[1px] bg-[#DADADA] relative">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <div className="h-[150px] pb-5 pt-7 flex items-start lg:items-end">
            <Paragpraph className=" lg:w-[350px] lg:!text-base">
              Заснування бренду «Власний Дім» і перші 50 угод на рахунку тандему.
            </Paragpraph>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[150px] pb-7 pt-5 flex items-end">
          <Paragpraph className=" lg:w-[350px]  lg:!text-base ">
            Вступ Дмитра і Власа до лав Спілки фахівців з нерухомості України.
          </Paragpraph>
        </div>
        <div className=" w-full h-[1px] bg-[#DADADA] relative ">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <div className="h-[150px] pt-8 flex items-start">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl ">2019 рік</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="lg:flex lg:flex-col-reverse ">
          <div className="h-[150px] pb-8 flex items-end lg:items-start lg:pt-8">
            <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2020 рік</p>
          </div>

          <div className=" w-full h-[1px] bg-[#DADADA] relative">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <div className="h-[150px] pb-5 pt-7 flex items-start lg:items-end">
            <Paragpraph className=" lg:w-[350px] lg:!text-base">
              Не дивлячись на початок пандемії COVID-19 і повний локдаун, більше 100 закритих угод за рік.
            </Paragpraph>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[150px] pb-7 pt-5 flex items-end">
          <Paragpraph className=" lg:w-[350px]  lg:!text-base ">
            Приєднання до команди Кукоза Руслана, бувшого учасника бойових дій в зоні АТО 2015-2016 роках, та збільшення
            штату працівників до 8 осіб.
          </Paragpraph>
        </div>
        <div className=" w-full h-[1px] bg-[#DADADA] relative ">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <div className="h-[150px] pt-8 flex items-start">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl ">2021 рік</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="lg:flex lg:flex-col-reverse ">
          <div className="h-[150px] pb-8 flex items-end lg:items-start lg:pt-8">
            <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2022 рік</p>
          </div>

          <div className=" w-full h-[1px] bg-[#DADADA] relative">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <div className="h-[150px] pb-5 pt-7 flex items-start lg:items-end">
            <Paragpraph className=" lg:w-[350px] lg:!text-base">
              Початок війни, еміграція 6 з 8 членів команди, не дивлячись на пустий Київ – закриття першої угоди 12
              квітня, за рік тільки сплачених комунальних платежів від клієнтів агенції більше 1млн гривень.
            </Paragpraph>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[150px] pb-7 pt-5 flex items-end">
          <Paragpraph className=" lg:w-[350px]  lg:!text-base ">
            Переїзд до нового офісу за адресою Дмитрівська 33.
          </Paragpraph>
        </div>
        <div className=" w-full h-[1px] bg-[#DADADA] relative ">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <div className="h-[150px] pt-8 flex items-start">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl ">2023 рік</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="lg:flex lg:flex-col-reverse ">
          <div className="h-[150px] pb-8 flex items-end lg:items-start lg:pt-8">
            <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2024 рік</p>
          </div>

          <div className=" w-full h-[1px] bg-[#DADADA] relative">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <div className="h-[150px] pb-5 pt-7 flex items-start lg:items-end">
            <Paragpraph className=" lg:w-[350px] lg:!text-base">Далі буде …</Paragpraph>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
