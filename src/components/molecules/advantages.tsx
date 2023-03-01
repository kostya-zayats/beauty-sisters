'use client';

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

export const Advantages = () => {
    const images = ['img/bg/slide-1.jpg', 'img/bg/slide-1.jpg', 'img/bg/slide-1.jpg', 'img/bg/slide-1.jpg', 'img/bg/slide-1.jpg'];
    const [currentSlide, setCurrentSlide] = useState(0);

    const showPreviousSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    const showNextSlide = () => {
        setCurrentSlide(currentSlide + 1);
    };

    //TODO: add button click animation for next and prev

    return (
        <div className='main-advantages' id='advantages'>
            <div className='main-advantages-description'>
                <h5>
                    мы помогаем нашим клиентам быть <span>уверенными в себе</span>
                </h5>
                <p>Мы приложили максимум усилий, чтобы создать атмосферу в которой каждый наш гость станет соучастником процесса создания красоты!</p>
                <div className='main-intro-description-btn-enroll-wrap'>
                    <a className='enroll-btn' href='#'>
                        <span>записаться онлайн</span>
                    </a>
                </div>
                <div className='slick-slider-actions-wrap'>
                    <div className='slick-slider-action-prev' onClick={showPreviousSlide}></div>
                    <div className='slick-slider-action-next' onClick={showNextSlide}></div>
                </div>
            </div>

            <div className='main-advantages-bg-img'>
                <div className='slick-slider'>
                    <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false} selectedItem={currentSlide} showStatus={false}>
                        {images.map((image, index) => {
                            return (
                                <div key={'image' + index} className={'slide'}>
                                    <img src={image} alt='' />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
