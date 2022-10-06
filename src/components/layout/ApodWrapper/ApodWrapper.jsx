import React from 'react';
import ApodSearchSection from '../../apodSearch/ApodSearchSection/ApodSearchSection';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import './apodWrapper.scss';

const ApodWrapper = () => (
  <div className="apodWrapper">
    <WelcomeSection />
    <ApodSearchSection />
  </div>
);

export default ApodWrapper;
