'use client';
import React, { FC, useEffect } from 'react';
import observerService from '../../../services/observer.service';

type Props = {
  targetId: string;
  className: string[];
};

const Guard: FC<Props> = ({ targetId, className }) => {
  useEffect(() => {
    const target = document.getElementById(targetId);
    const guard = document.getElementById('guard')!;
    const callBack = () => {
      className.forEach((element) => {
        target?.classList.add(element);
      });
    };
    observerService.setTranslateObserver(callBack, guard);
  }, []);

  return <div id="guard"></div>;
};

export default Guard;
