'use client';

import React from 'react';
import Link from 'next/link';

export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};
const Navbar = () => {
  return (
    <nav className="hidden lg:block pt-[30px]">
      <ul className="flex gap-[60px] text-lg font-montserrat font-medium text-white">
        <li key={1}>
          <Link href={'/#service'} scroll={false} onClick={() => scrolltoHash('service')} className="hoverNav">
            Послуги
          </Link>
        </li>
        <li key={2}>
          <Link href={'#about'} scroll={false} onClick={() => scrolltoHash('about')} className="hoverNav">
            Про нас
          </Link>
        </li>
        <li key={4}>
          <Link href={'#benefits'} scroll={false} onClick={() => scrolltoHash('benefits')} className="hoverNav">
            Переваги
          </Link>
        </li>
        <li key={3}>
          <Link href={'#team'} scroll={false} onClick={() => scrolltoHash('team')} className="hoverNav">
            Наша команда
          </Link>
        </li>

        <li key={5}>
          <Link href={'#contacts'} scroll={false} onClick={() => scrolltoHash('contacts')} className="hoverNav">
            Контакти
          </Link>
        </li>
        <li className="flex gap-[14px]">
          <span>UA</span>
          <span>RU</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
