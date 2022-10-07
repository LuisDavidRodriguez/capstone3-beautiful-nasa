/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { manifestActions } from '../../../redux/roverSlice';
import styles from './roverBoxFilter.module.scss';

const RoverBoxFilter = (props) => {
  const { initial } = props;
  console.log('initial recived', initial);
  const dispatch = useDispatch();
  const [roverSelector, setRoverSelector] = useState(initial);

  const handleChange = (e) => {
    const { value } = e.target;
    setRoverSelector(value);
    dispatch(manifestActions.setRoverFilter(value));
  };

  return (
    <form>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className={styles.labelSelector} htmlFor="roverSelector">Rover:</label>
      <select className={styles.selector} id="roverSelector" value={roverSelector} onChange={handleChange}>
        <option className={styles.option} value="Curiosity">Curiosity</option>
        <option className={styles.option} value="Opportunity">Opportunity</option>
        <option className={styles.option} value="Spirit">Spirit</option>
      </select>
    </form>
  );
};

RoverBoxFilter.defaultProps = {
  initial: 'Curiosity',
};

RoverBoxFilter.propTypes = {
  initial: PropTypes.string,
};

export default RoverBoxFilter;
