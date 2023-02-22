import React from 'react';
import services from '@/data/services.json';

export const Services = () => {
    return (
        <div className='main-services'>
            <div className='main-services-desc'>
                <div className='main-services-desc-text'>
                    <h4>Уход</h4>
                    <h2>наши услуги</h2>
                    <p>Мы приложили максимум усилий, чтобы создать атмосферу в которой каждый наш гость станет соучастником процесса создания красоты!</p>
                </div>
                <div className='services-list'>
                    {services
                        .filter((s) => !!s.name)
                        .map((service, index) => {
                            return (
                                <div key={`${service.name}-${index}`} className='services-list-unit'>
                                    <div className='services-list-unit-text'>{service.name}</div>
                                    <div className='services-list-unit-ico'>
                                        <img src='/img/ico/arrow.svg' alt='' />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className='main-services-img'></div>
        </div>
    );
};
