import React from 'react';
import { Logo } from '@/components/atoms';

export const Navigation = () => {
  return (
    <nav className={'navigation'}>
      <div className={'nav-content'}>
        <Logo />
        <div className={'nav-actions'}>
          <div className='nav-links'>
            <a className='nav-link' href='#'>
              услуги
            </a>
            <a className='nav-link' href='#'>
              о нас
            </a>
            <a className='nav-link' href='#'>
              цены
            </a>
            <a className='nav-link' href='#'>
              сертификаты
            </a>
            <a className='nav-link' href='#'>
              контакты
            </a>
          </div>
          <button className='nav-btn'>
            <span>Обратный звонок</span>
          </button>
        </div>
        <a href='#' className='nav-open-btn'>
          <div className='burger-ico'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </nav>
  );
};
