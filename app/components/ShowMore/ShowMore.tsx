'use client';
import React, { FC, useEffect, useState } from 'react';

type Props = {
  elId: string;
  text: string;
};
const ShowMore: FC<Props> = ({ elId, text }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleShow = () => {
    const el = document.getElementById(elId);
    const shower = document.getElementById('show');
    el?.classList.remove('hidden');
    shower?.classList.add('hidden');
  };

  return (
    <span id="show" className="text-[#1B21AF] transition hover:opacity-0.75 md:hidden" onClick={handleShow}>
      {text}
    </span>
  );
};

export default ShowMore;
