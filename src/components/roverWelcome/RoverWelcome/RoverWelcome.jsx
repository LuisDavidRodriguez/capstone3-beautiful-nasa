import React from 'react';
import style from './roverWelcome.module.scss';
import SwiperFlip from '../../ui/SwiperFlip/SwiperFlip';
import Front from '../Front/Front';
import Back from '../Back/Back';

const RoverWelcome = () => {
  const cards = [<Front key="front" />, <Back key="back" />];
  return (
    <section className={style.container}>
      <SwiperFlip
        cards={cards}
      />
    </section>
  );
};

export default RoverWelcome;
