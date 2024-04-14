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
      className="md:h-[308px]"
      modules={[Autoplay]}
      loop={true}
    >
      <SwiperSlide>
        <Paragpraph className=" lg:text-base lg:w-[330px]">
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів.{' '}
        </Paragpraph>
        <div className=" w-full h-[1px] bg-[#DADADA] relative mt-9 mb-8">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2008 рік</p>
      </SwiperSlide>
      <SwiperSlide className="pt-[74px] lg:pt-0">
        <div className="lg:flex lg:flex-col-reverse ">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2010 рік</p>
          <div className=" w-full h-[1px] bg-[#DADADA] relative mt-8 mb-9 lg:mt-9 lg:mb-8">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <Paragpraph className=" lg:text-base lg:w-[330px]">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів.{' '}
          </Paragpraph>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Paragpraph className=" lg:text-base lg:w-[330px]">
          Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
          спрямовані на створення найкращих умов для клієнтів.{' '}
        </Paragpraph>
        <div className=" w-full h-[1px] bg-[#DADADA] relative mt-9 mb-8">
          <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
        </div>
        <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2013 рік</p>
      </SwiperSlide>
      <SwiperSlide className="pt-[74px] lg:pt-0">
        <div className="lg:flex lg:flex-col-reverse ">
          <p className="text-[#BB8B2A] text-[34px] font-notica italic lg:text-4xl">2015 рік</p>
          <div className=" w-full h-[1px] bg-[#DADADA] relative mt-8 mb-9 lg:mt-9 lg:mb-8">
            <span className=" size-7 rounded-full bg-[#FFF3DA] shadow-bounce absolute left-0 -top-[14px] "></span>
          </div>
          <Paragpraph className=" lg:text-base lg:w-[330px]">
            Керівник і засновник агенції нерухомості ‘Власний дім’ - Дмитро Александров чиї знання, досвід та пристрасть
            спрямовані на створення найкращих умов для клієнтів.{' '}
          </Paragpraph>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
