/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './roverFormFilter.module.scss';

const RoverFormFilter = () => {
  const [roverSelector, setRoverSelector] = useState('0');

  return (
    <form>
      <label className={styles.labelSelector} htmlFor="roverSelector">Rover:</label>
      <select className={styles.selector} id="roverSelector" value={roverSelector} onChange={(e) => setRoverSelector(e.target.value)}>
        <option className={styles.option} value="0">Curiosity</option>
        <option className={styles.option} value="1">Opportunity</option>
        <option className={styles.option} value="2">Spirit</option>
      </select>
    </form>
  );
};

export default RoverFormFilter;
