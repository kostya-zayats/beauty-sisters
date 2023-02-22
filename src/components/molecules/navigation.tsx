'use client';
import React, { useState } from 'react';
import { Logo } from '@/components/atoms';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={'navigation'}>
            <div className={'nav-content'}>
                <Logo />
                <div className={`nav-actions ${isOpen ? 'opened' : ''}`}>
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
