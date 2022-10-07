import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './roverManifest.module.scss';

const RoverManifest = (props) => {
  const {
    name,
    totalPhotos,
    launchDate,
    landingDate,
    status,
    maxDate,
    maxSol,
  } = props;

  return (
    <table className={styles.infoTable}>
      <thead>
        <tr>
          <th>
            {name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Total photos: </strong></td>
          <td>{totalPhotos}</td>
        </tr>
        <tr>
          <td><strong>Launch Date: </strong></td>
          <td>{launchDate}</td>
        </tr>
        <tr>
          <td><strong>Landing Date: </strong></td>
          <td>{landingDate}</td>
        </tr>
        <tr>
          <td><strong>Status: </strong></td>
          <td>{status}</td>
        </tr>
        <tr>
          <td><strong>Max date: </strong></td>
          <td>{maxDate}</td>
        </tr>
        <tr>
          <td><strong>Max Martian sol: </strong></td>
          <td>{maxSol}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RoverManifest;

RoverManifest.defaultProps = {
  name: '',
  totalPhotos: 0,
  launchDate: '',
  landingDate: '',
  status: '',
  maxDate: '',
  maxSol: 0,
};

RoverManifest.propTypes = {
  name: PropTypes.string,
  totalPhotos: PropTypes.number,
  launchDate: PropTypes.string,
  landingDate: PropTypes.string,
  status: PropTypes.string,
  maxDate: PropTypes.string,
  maxSol: PropTypes.number,
};
