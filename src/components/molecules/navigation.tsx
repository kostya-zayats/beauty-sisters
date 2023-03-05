'use client';
import React, { useState } from 'react';
import { Logo } from '@/components/atoms';

type NavigationProps = {
    backgroundColor?: string;
};

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={'navigation'}>
            <div className={'nav-content'}>
                <Logo />
                <div className={`nav-actions ${isOpen ? 'opened' : ''}`}>
                    <div className='nav-links'>
                        <a className='nav-link' href='#services' onClick={closeMenu}>
                            услуги
                        </a>
                        <a className='nav-link' href='#advantages' onClick={closeMenu}>
                            о нас
                        </a>
                        <a className='nav-link' href='#prices' onClick={closeMenu}>
                            цены
                        </a>
                        <a className='nav-link' href='#' onClick={closeMenu}>
                            сертификаты
                        </a>
                        <a className='nav-link' href='/' onClick={closeMenu}>
                            контакты
                        </a>
                    </div>
                    <button className='nav-btn'>
                        <span>Обратный звонок</span>
                    </button>
                </div>
                <a href='#' className={`nav-open-btn ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(!isOpen)}>
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
