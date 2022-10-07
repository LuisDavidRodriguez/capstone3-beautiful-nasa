/* eslint-disable arrow-body-style */
import React from 'react';
import RoverWelcome from '../../roverWelcome/RoverWelcome/RoverWelcome';
import RoverSearchSection from '../../roverSearch/RoverSearchSection/RoverSearchSection';
import './roverWrapper.scss';

const RoverWrapper = () => {
  return (
    <div className="roverWrapper">
      <RoverWelcome />
      <RoverSearchSection />
    </div>
  );
};

export default RoverWrapper;
