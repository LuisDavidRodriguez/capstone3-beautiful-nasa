import React from 'react';
import styles from './apodBand.module.scss';

const title = 'Astronomy Picture of the Day (APOD)';

const ApodBand = () => (
  <section className={styles.container}>
    <article className={styles.infoContainer}>
      <p className={styles.topic}>Discover</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}> </p>
    </article>
  </section>
);

export default ApodBand;
