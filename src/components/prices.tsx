import React from 'react';
import services from '@/data/services.json';

export const Prices = () => {
    return (
        <div className='main-prices'>
            <div className='main-prices-img-wrap'>
                <div className='main-prices-img-sticky'>
                    <img src='img/bg/prices-bg-1.jpg' alt='' />
                    <img src='img/bg/prices-bg-1.jpg' alt='' />
                    <img src='img/bg/prices-bg-1.jpg' alt='' />
                    <img src='img/bg/prices-bg-1.jpg' alt='' />
                </div>
            </div>
            <div className='main-prices-desc'>
                <div className='main-prices-desc-unit'>
                    <div className='main-prices-desc-unit-text'>
                        <h4>стоимость</h4>
                    </div>
                </div>
                {services.map((service) => {
                    return (
                        <div className='main-prices-desc-unit' key={`${service.name}`}>
                            <div className='main-prices-desc-unit-text'>
                                <h2>{service.name}</h2>
                            </div>
                            <div className='services-list'>
                                {service.jobs
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((job) => {
                                        return (
                                            <div className='services-list-unit' key={`${job.name}`}>
                                                <div className='services-list-unit-text'>
                                                    {job.name} <span>/ 1 час</span>
                                                </div>
                                                <div className='services-list-unit-prices'>{job.price} руб</div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
