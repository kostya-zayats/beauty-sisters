import { EnrollButton } from '@/components/atoms';
import React from 'react';

export const Intro = () => {
  return (
    <div className='main-intro'>
      <div className='main-intro-description'>
        <h1>
          студия красоты <span>beauty sisters</span>
        </h1>
        <ul className='main-intro-description-list'>
          <li>косметология</li>
          <li>подология</li>
          <li>массаж</li>
          <li>прокол ушей INVERNESS</li>
        </ul>
        <div className='main-intro-description-btn-enroll-wrap'>
          <EnrollButton />
        </div>
      </div>

      <div className='main-intro-bg-img'></div>
    </div>
  );
};
