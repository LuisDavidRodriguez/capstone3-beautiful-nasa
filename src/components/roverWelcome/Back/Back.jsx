import React from 'react';
import style from './back.module.scss';

const Back = () => (
  <article className={style.infoContainer}>

    <section className={style.first}>
      <h4 className={style.subtitle}>
        Rover has 23 cameras
      </h4>

      <p className={style.p1}>
        The images of the whole mission are endless therefore I will provide
        you with the Manifest that NASA delivers in his API.
      </p>

      <p className={style.p2}>
        Curiosity is a car-sized Mars rover designed to explore the Gale crater
        on Mars as part of NASA&amp;s Mars Science Laboratory mission.
        -Curiosity was launched from Cape Canaveral on 26 November 2011
      </p>
      <a href="https://en.wikipedia.org/wiki/Curiosity_(rover)" target="_blank" rel="noreferrer">More information about the Rover</a>
    </section>

    <div className={style.image} />
  </article>
);

export default Back;
