import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDateApod } from '../../../redux/apodApi';
import styles from './apodSearchSection.module.scss';

const ApodSearchSection = () => {
  const title = 'Now lets go to search something';
  const dispatch = useDispatch();
  const allApods = useSelector((state) => state.allApods);

  useEffect(() => {
    if (allApods.length === 0) {
      dispatch(fetchDateApod());
    }
  });

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
    </section>
  );
};

export default ApodSearchSection;
