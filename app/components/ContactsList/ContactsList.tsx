import React from 'react';

const ContactsList = ({ className }: { className?: string }) => {
  return (
    <ul className={`flex flex-col gap-4 items-center md:max-w-[220px] md:items-start ${className}`}>
      <li>
        <p className=" text-lg font-montserrat text-white text-center md:text-start">
          Київ
          <br className="hidden md:inline" /> Дмитрівська 33, офіс 3
        </p>
      </li>
      <li>
        <a href="tel:+380950156545" className="text-lg  font-montserrat text-white text-center hoverNav">
          +38095 015 65 45
        </a>
      </li>
      <li>
        <a href="mailto:example@mail.com" className="text-lg  font-montserrat text-white text-center hoverNav">
          example@mail.com
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
