import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { generalPhotosActions, manifestActions } from '../../../redux/roverSlice';
import styles from './roverDateFilter.module.scss';

const RoverDateFilter = (props) => {
  const dispatch = useDispatch();
  const { minDate, maxDate } = props;
  const [roverDate, setRoverDate] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setRoverDate(value);
    dispatch(manifestActions.setDateFilter(value));
    dispatch(generalPhotosActions.setRefetch());
  };

  return (
    <form className={styles.form}>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className={styles.labelSelector} htmlFor="date">Pick a date:</label>
      <input className={styles.selector} id="date" type="date" max={maxDate} min={minDate} value={roverDate} onChange={handleChange} />
    </form>
  );
};

export default RoverDateFilter;

RoverDateFilter.defaultProps = {
  minDate: '2022-10-06',
  maxDate: '2022-10-06',
};

RoverDateFilter.propTypes = {
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};
