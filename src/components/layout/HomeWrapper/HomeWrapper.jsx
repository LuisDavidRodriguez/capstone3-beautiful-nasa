import React from 'react';
import Apod from '../../apod/Apod/Apod';
import './homeWrapper.scss';

// eslint-disable-next-line arrow-body-style
const HomeWrapper = () => {
  return (
    <div className="homeWrapper">
      HomeWrapper
      <Apod />
    </div>
  );
};

export default HomeWrapper;
