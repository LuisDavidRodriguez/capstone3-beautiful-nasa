/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayApod } from '../../../redux/apodApi';
import ApodSearchSection from '../../apodSearch/ApodSearchSection/ApodSearchSection';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import './apodWrapper.scss';

const ApodWrapper = () => {
  return (
    <div className="apodWrapper">
      <WelcomeSection />
      <ApodSearchSection />
    </div>
  );
};

export default ApodWrapper;
