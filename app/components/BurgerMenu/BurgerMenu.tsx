import React, { Dispatch } from 'react';
import Link from 'next/link';

type Props = {
  handleClose: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};

const BurgerMenu = ({ handleClose, isOpen }: Props) => {
  return (
    <div
      className={` w-screen h-screen pt-[190px] bg-[#141414] absolute lg:hidden top-0 left-0 z-10 transition-all ${
        !isOpen && '-translate-y-full'
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-[20px] items-center text-xl font-montserrat font-medium text-white">
          <li key={1}>
            <Link
              href={'/#service'}
              scroll={false}
              onClick={() => {
                handleClose(false);
                scrolltoHash('service');
              }}
            >
              Послуги
            </Link>
          </li>
          <li key={2}>
            <Link
              href={'#about'}
              scroll={false}
              onClick={() => {
                handleClose(false);
                scrolltoHash('about');
              }}
            >
              Про нас
            </Link>
          </li>
          <li key={3}>
            <Link
              href={'#team'}
              scroll={false}
              onClick={() => {
                handleClose(false);
                scrolltoHash('team');
              }}
            >
              Наша команда
            </Link>
          </li>
          <li key={4}>
            <Link
              href={'#benefits'}
              scroll={false}
              onClick={() => {
                handleClose(false);
                scrolltoHash('benefits');
              }}
            >
              Переваги
            </Link>
          </li>
          <li key={5}>
            <Link
              href={'#contacts'}
              scroll={false}
              onClick={() => {
                handleClose(false);
                scrolltoHash('contacts');
              }}
            >
              Контакти
            </Link>
          </li>
          <li className="flex gap-[14px]">
            <span>UA</span>
            <span>RU</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
