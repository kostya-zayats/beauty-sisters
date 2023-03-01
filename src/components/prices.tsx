'use client';
import React from 'react';
import services from '@/data/services.json';

export const Prices = () => {
    const getDuration = (totalMin: number): string => {
        const hours = Math.trunc(totalMin / 60);
        const minutes = totalMin % 60;
        let result = '';
        if (hours > 0) {
            if (hours === 1) {
                result += `${hours} час `;
            } else {
                result += `${hours} часа `;
            }
        }

        if (minutes > 0) {
            const lastMin = minutes > 10 ? minutes % 10 : minutes;
            if (minutes === 1) {
                result += `${minutes} минута`;
            } else if ([2, 3, 4].indexOf(lastMin) > 0) {
                result += `${minutes} минуты`;
            } else if ([1, 5, 6, 7, 8, 9, 10]) {
                result += `${minutes} минут`;
            }
        }
        return result;
    };
    return (
        <div className='main-prices' id='prices'>
            <div className='main-prices-header'>
                <div className='main-prices-header-text'>
                    <h4>стоимость</h4>
                </div>
            </div>
            {services.map((service) => {
                return (
                    <div key={service.name} className={'job-price'}>
                        <div className={'main-prices-image'}>
                            {service.jobs.length > 5 && (
                                <div className={'main-prices-img-container'}>
                                    <div className={'main-prices-img-sticky'}>
                                        <img src={service.image ?? 'img/bg/intro-bg.jpg'} alt='' />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='main-prices-desc-unit' key={`${service.name}`} style={{ width: '50%' }}>
                            {!!service.name && (
                                <div id={service.name} className='main-prices-desc-unit-text'>
                                    <h2>{service.name}</h2>
                                </div>
                            )}
                            <div className='services-list'>
                                {service.jobs
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((job) => {
                                        return (
                                            <div className='services-list-unit' key={`${job.name}`}>
                                                <div className='services-list-unit-text'>
                                                    {job.name} <span className={'nowrap'}>/ {getDuration(Number(job.duration))}</span>
                                                </div>
                                                <div className='services-list-unit-prices'>{job.price} руб</div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* </div> */}
        </div>
    );
};
