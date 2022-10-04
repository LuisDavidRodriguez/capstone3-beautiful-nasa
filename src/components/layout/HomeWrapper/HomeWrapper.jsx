import React from 'react';
import ApodBand from '../../home/ApodBand/ApodBand';
import './homeWrapper.scss';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';

// eslint-disable-next-line arrow-body-style
const HomeWrapper = () => {
  return (
    <div className="homeWrapper">
      <HeaderContainer />
      <ApodBand />
    </div>
  );
};

export default HomeWrapper;
