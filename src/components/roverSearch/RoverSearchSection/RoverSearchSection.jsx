/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import Cards from '../../ui/Cards/Cards';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import { roverFetchManifest } from '../../../redux/roverApi';
import { manifestActions } from '../../../redux/roverSlice';
import RoverFormFilter from '../RoverFormFilter/RoverFormFilter';
import styles from './roverSearchSection.module.scss';

function camerasFilter(state) {
  const { photos } = state.revorManifest.data;
  const { show, date } = state.revorManifest.filters;
  let day;

  try {
    // there are dates between that does not have pictures
    if (show === 'DATE') {
      day = photos.filter((day) => day.earth_date === date);
      const { cameras, total_photos: totalPhotos } = day[0];
      return { totalPhotos, cameras };
    }
  } catch (error) {
    return { totalPhotos: 'no pictures this day, Rover was on vacation! :D', cameras: [] };
  }

  return { totalPhotos: '', cameras: [] };
}

const RoverSearchSection = () => {
  const dispatch = useDispatch();
  const manifestStatus = useSelector((state) => state.revorManifest.status);
  const manifestData = useSelector((state) => state.revorManifest.data);
  const camerasInfo = useSelector((state) => camerasFilter(state));

  useEffect(() => {
    if (manifestStatus === 'empty') {
      dispatch(roverFetchManifest());
    }
  });

  const liCameras = camerasInfo.cameras.map((camera) => <li key={camera}>{camera}</li>);
  return (

    <section className={styles.container}>
      <h3 className={styles.title}>Manifest section!</h3>
      <RoverBoxFilter
        initial={manifestData.name}
      />
      <table className={styles.infoTable}>
        <thead>
          <tr>
            <th>
              {manifestData.name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total photos: </strong></td>
            <td>{manifestData.total_photos}</td>
          </tr>
          <tr>
            <td><strong>Launch Date: </strong></td>
            <td>{manifestData.launch_date}</td>
          </tr>
          <tr>
            <td><strong>Landing Date: </strong></td>
            <td>{manifestData.landing_date}</td>
          </tr>
          <tr>
            <td><strong>Status: </strong></td>
            <td>{manifestData.status}</td>
          </tr>
          <tr>
            <td><strong>Max date: </strong></td>
            <td>{manifestData.max_date}</td>
          </tr>
          <tr>
            <td><strong>Max Martian sol: </strong></td>
            <td>{manifestData.max_sol}</td>
          </tr>
        </tbody>
      </table>
      <RoverDateFilter
        minDate={manifestData.landing_date}
        maxDate={manifestData.max_date}
      />
      <p>
        Total photos this day:
        <strong>{camerasInfo.totalPhotos}</strong>
      </p>
      <ul>
        {liCameras}
      </ul>
    </section>
  );
};

const RoverBoxFilter = (props) => {
  const { initial } = props;
  console.log('initial recived', initial);
  const dispatch = useDispatch();
  const [roverSelector, setRoverSelector] = useState(initial);
  const handleChange = (e) => {
    const { value } = e.target;
    setRoverSelector(value);
    dispatch(roverFetchManifest(value));
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

const RoverDateFilter = (props) => {
  const dispatch = useDispatch();
  const { minDate, maxDate } = props;
  const [roverDate, setRoverDate] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setRoverDate(value);
    dispatch(manifestActions.setDateFilter(value));
  };

  return (
    <form>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className={styles.labelSelector} htmlFor="date">Pick a date:</label>
      <input id="date" type="date" max={maxDate} min={minDate} value={roverDate} onChange={handleChange} />
    </form>
  );
};

RoverDateFilter.defaultProps = {
  minDate: '2022-10-06',
  maxDate: '2022-10-06',
};

RoverDateFilter.propTypes = {
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};

export default RoverSearchSection;
