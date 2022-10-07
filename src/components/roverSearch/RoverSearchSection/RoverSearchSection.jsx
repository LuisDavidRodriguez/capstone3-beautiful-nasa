/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../ui/Cards/Cards';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import { roverFetchManifest, roverFetchGeneral } from '../../../redux/roverApi';
import { manifestActions, generalPhotosActions } from '../../../redux/roverSlice';
import styles from './roverSearchSection.module.scss';
import RoverManifest from '../RoverManifest/RoverManifest';
import RoverBoxFilter from '../RoverBoxFilter/RoverBoxFilter';
import RoverDateFilter from '../RoverDateFilter/RoverDateFilter';

function camerasFilter(state) {
  const { photos } = state.revorManifest.data;
  const { show, date } = state.revorManifest.filters;
  let day;

  try {
    // there are dates between that does not have pictures
    if (show === 'DATE') {
      day = photos.filter((day) => day.earth_date === date);
      const { cameras, total_photos: totalPhotos } = day[0];
      return { totalPhotos, cameras };
    }
  } catch (error) {
    return { totalPhotos: 'no pictures this day, Rover was on vacation! :D', cameras: [] };
  }

  return { totalPhotos: '', cameras: [] };
}

const RoverSearchSection = () => {
  const dispatch = useDispatch();
  const manifestStatus = useSelector((state) => state.revorManifest.status);
  const manifestData = useSelector((state) => state.revorManifest.data);
  const camerasInfo = useSelector((state) => camerasFilter(state));

  useEffect(() => {
    if (manifestStatus === 'empty') {
      dispatch(roverFetchManifest());
    }
  });

  const liCameras = camerasInfo.cameras.map((camera) => <li key={camera}>{camera}</li>);
  return (

    <section className={styles.container}>
      <h3 className={styles.title}>Manifest section!</h3>
      <RoverBoxFilter
        initial={manifestData.name}
      />
      <RoverManifest
        landingDate={manifestData.landing_date}
        launchDate={manifestData.launch_date}
        maxDate={manifestData.max_date}
        maxSol={manifestData.max_sol}
        name={manifestData.name}
        status={manifestData.status}
        totalPhotos={manifestData.total_photos}
      />
      <RoverDateFilter
        minDate={manifestData.landing_date}
        maxDate={manifestData.max_date}
      />
      <p>
        Total photos this day:
        <strong>{camerasInfo.totalPhotos}</strong>
      </p>
      <ul>
        {liCameras}
      </ul>
    </section>
  );
};

export default RoverSearchSection;
