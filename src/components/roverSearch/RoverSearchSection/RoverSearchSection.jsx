/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../ui/Cards/Cards';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import { roverFetchManifest, roverFetchAPI } from '../../../redux/roverApi';
import { manifestActions, generalPhotosActions } from '../../../redux/roverSlice';
import styles from './roverSearchSection.module.scss';
import RoverManifest from '../RoverManifest/RoverManifest';
import RoverBoxFilter from '../RoverBoxFilter/RoverBoxFilter';
import RoverDateFilter from '../RoverDateFilter/RoverDateFilter';
import * as cardHelpers from '../../../helpers/cardsCreators';

function camerasFilter(state) {
  const { photos } = state.revorManifest.data;
  const { show, date } = state.revorManifest.filters;
  let day;

  try {
    // there are dates between that does not have pictures
    if (show === 'DATE') {
      day = photos.filter((day) => day.earth_date === date);
      const { cameras, total_photos: totalPhotos } = day[0];
      return {
        totalPhotos,
        cameras,
        arePhotos: true,
        date,
      };
    }
  } catch (error) {
    return {
      totalPhotos: 0,
      cameras: [],
      arePhotos: false,
      date,
    };
  }

  return {
    totalPhotos: 0,
    cameras: [],
    arePhotos: false,
    date,
  };
}

const RoverSearchSection = () => {
  const dispatch = useDispatch();
  const manifestStatus = useSelector((state) => state.revorManifest.status);
  const manifestData = useSelector((state) => state.revorManifest.data);
  const camerasInfo = useSelector((state) => camerasFilter(state));
  const [generalPhotos, setgeneralPhotos] = useState([]);
  const [generalIsLoading, setgeneralIsLoading] = useState(true);

  useEffect(() => {
    if (manifestStatus === 'empty') {
      dispatch(roverFetchManifest());
    }

    if (camerasInfo.arePhotos) {
      if (generalPhotos.length === 0) {
        roverFetchAPI({ earthDate: camerasInfo.date }).then((data) => {
          setgeneralPhotos(data);
          setgeneralIsLoading(false);
        }).catch(() => {
          setgeneralIsLoading(false);
        });
      }
    }
  });

  const cards = cardHelpers.createCardsRover(generalPhotos, Cards);
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
      {!camerasInfo.arePhotos && <p>no pictures this day, Rover was on vacation! :D </p>}
      <ul>
        {liCameras}
      </ul>

      <MySwiperGrid
        cards={cards}
      />
    </section>
  );
};

export default RoverSearchSection;
