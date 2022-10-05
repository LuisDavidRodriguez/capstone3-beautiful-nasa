/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayApod } from '../../../redux/apodApi';
import WelcomeSection from '../../welcomeSection/WelcomeSection';
import './apodWrapper.scss';

const ApodWrapper = () => {
  const dispatch = useDispatch();
  const [todayApod, setTodayApod] = useState({});
  const [todayIsLoading, setTodayIsLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(todayApod).length === 0) {
      fetchTodayApod().then((data) => {
        setTodayApod(data);
        setTodayIsLoading(false);
      });
    }
  });

  if (!todayIsLoading) {
    console.log('state', todayApod);
  }

  return (
    <div className="apodWrapper">
      <WelcomeSection
        url={todayApod.url}
        mediaType={todayApod.media_type}
        altPicture={todayApod.title}
        isLoading={todayIsLoading}
      />
    </div>
  );
};

export default ApodWrapper;
