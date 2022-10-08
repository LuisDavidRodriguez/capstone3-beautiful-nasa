import React, { useEffect } from 'react';
import RoverWelcome from '../../roverWelcome/RoverWelcome/RoverWelcome';
import RoverSearchSection from '../../roverSearch/RoverSearchSection/RoverSearchSection';
import './roverWrapper.scss';

const RoverWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="roverWrapper">
      <RoverWelcome />
      <RoverSearchSection />
    </div>
  );
};

export default RoverWrapper;
