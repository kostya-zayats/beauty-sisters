import React from 'react';

export const Description = () => {
  return (
    <div className='main-description'>
      <h2>наша студия — это пространство любви и заботы о себе</h2>

      <div className='main-description-unit-wrap'>
        <div className='main-description-unit'>
          <h3>
            удобное расположение <span>5 мин</span> от метро михалово
          </h3>
          <p>К нам легко добраться на любом виде транспорта, для авто бесплатная парковка</p>
        </div>
        <div className='main-description-unit'>
          <h3>бережное отношение к вашему здоровью</h3>
          <p>Мы заботимся о вашей безопасности и гарантируем соблюдение санитарных и гигиенических норм</p>
        </div>
        <div className='main-description-unit'>
          <h3>безупречный сервис видимый результат</h3>
          <p>Мы непрерывно учимся у лучших и повышаем свою квалификацию, работаем только с проверенными косметическими брендами</p>
        </div>
      </div>
    </div>
  );
};
