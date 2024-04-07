import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden lg:block pt-[30px]">
      <ul className="flex gap-[60px] text-lg font-montserrat font-medium text-white">
        <li key={1}>
          <Link href={'#service'} scroll={true}>
            Послуги
          </Link>
        </li>
        <li key={2}>
          <Link href={'#about'} scroll={false}>
            Про нас
          </Link>
        </li>
        <li key={3}>
          <Link href={'#team'} scroll={false}>
            Наша команда
          </Link>
        </li>
        <li key={4}>
          <Link href={'#benefits'} scroll={false}>
            Переваги
          </Link>
        </li>
        <li key={5}>
          <Link href={'#contacts'} scroll={false}>
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
