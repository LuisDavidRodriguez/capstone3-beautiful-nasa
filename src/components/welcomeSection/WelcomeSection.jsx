import React, { useEffect, useState } from 'react';
import MultipleMediaRender from '../ui/MultipleMediaRender/MultipleMediaRender';
import styles from './welcomeSection.module.scss';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import { fetchTodayApod } from '../../redux/apodApi';

const WelcomeSection = () => {
  const [todayApod, setTodayApod] = useState({});
  const [todayIsLoading, setTodayIsLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(todayApod).length === 0) {
      fetchTodayApod().then((data) => {
        setTodayApod(data);
        setTodayIsLoading(false);
      }).catch(() => {
        setTodayIsLoading(false);
      });
    }
  });

  return (
    <section className={styles.welcomeSection}>
      <h3 className={styles.title}>The Astronomy Picture of the Day is:</h3>
      <h3 className={styles.subtitle}>{todayApod.title}</h3>

      <section className={styles.media}>
        {todayIsLoading
          ? <LoadingSpinner />
          : (
            <MultipleMediaRender
              altPicture={todayApod.title}
              mediaType={todayApod.media_type}
              url={todayApod.url}
            />
          )}
      </section>
      <article className={styles.information}>
        <p className={styles.dateLabel}>
          {'Date: '}
          <span className={styles.dateValue}>{todayApod.date}</span>
        </p>
        <h4 className={styles.descLabel}>Description:</h4>
        <p className={styles.explanation}>{todayApod.explanation}</p>
      </article>
    </section>
  );
};

export default WelcomeSection;
