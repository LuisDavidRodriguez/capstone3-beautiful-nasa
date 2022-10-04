import React from 'react';
import styles from './apodBand.module.scss';
import MySwiper from '../../ui/Swiper/Swiper';
import Cards from '../Cards/Cards';

const title = 'Astronomy Picture of the Day (APOD)';

const ApodBand = () => {
  const cards = [1, 2, 3, 4].map((item) => <Cards key={item} id={item} />);

  return (
    <section className={styles.apodBandContainer}>
      <h3 className={styles.title}>{title}</h3>
      <article className={styles.swiperContainer}>
        <MySwiper cards={cards} />
      </article>
    </section>
  );
};

export default ApodBand;
