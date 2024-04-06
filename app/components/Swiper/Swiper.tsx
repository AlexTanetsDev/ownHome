'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Paragpraph from '../Paragraph/Paragpraph';

const SwiperComp = () => {
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 3000 }}>
      <SwiperSlide>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів.{' '}
        </Paragpraph>
        <div className=" w-full h-[1px] bg-[#DADADA] relative mt-9 mb-8">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <p className="text-[#BB8B2A] text-[34px] font-notica italic">2008 рік</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-[#BB8B2A] text-[34px] font-notica italic">2010 рік</p>
        <div className=" w-full h-[1px] bg-[#DADADA] relative mt-8 mb-9">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів.{' '}
        </Paragpraph>
      </SwiperSlide>
      <SwiperSlide>
        <Paragpraph>
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів.{' '}
        </Paragpraph>
        <div className=" w-full h-[1px] bg-[#DADADA] relative mt-9 mb-8">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute right-0 -top-[14px] hidden md:inline "></span>
        </div>
        <p className="text-[#BB8B2A] text-[34px] font-notica italic">2013 рік</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
