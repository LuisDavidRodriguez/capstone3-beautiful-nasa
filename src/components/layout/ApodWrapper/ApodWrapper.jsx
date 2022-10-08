import React, { useEffect } from 'react';
import ApodSearchSection from '../../apodSearch/ApodSearchSection/ApodSearchSection';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import './apodWrapper.scss';

const ApodWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="apodWrapper">
      <WelcomeSection />
      <ApodSearchSection />
    </div>
  );
};

export default ApodWrapper;
