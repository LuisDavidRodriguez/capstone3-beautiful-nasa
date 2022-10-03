import React from 'react';
import Apod from '../../apod/Apod/Apod';
import './homeWrapper.scss';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';

// eslint-disable-next-line arrow-body-style
const HomeWrapper = () => {
  return (
    <div className="homeWrapper">
      <HeaderContainer />
      <Apod />
    </div>
  );
};

export default HomeWrapper;
