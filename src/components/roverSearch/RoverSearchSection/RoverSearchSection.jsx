import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { roverFetchManifest } from '../../../redux/roverApi';
import styles from './roverSearchSection.module.scss';
import RoverManifest from '../RoverManifest/RoverManifest';
import RoverBoxFilter from '../RoverBoxFilter/RoverBoxFilter';
import RoverDateFilter from '../RoverDateFilter/RoverDateFilter';
import RoverViewSection from '../RoverViewSection/RoverViewSection';

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
  const filterRover = useSelector((state) => state.revorManifest.filters.rover);
  const camerasInfo = useSelector((state) => camerasFilter(state, dispatch));

  useEffect(() => {
    if (manifestStatus === 'empty' || manifestStatus === 'reFetch') {
      dispatch(roverFetchManifest(filterRover));
    }
  });

  const liCameras = camerasInfo.cameras.map((camera) => <ListGroup.Item key={camera} className="row d-flex justify-content-evenly">{camera}</ListGroup.Item>);
  return (

    <section className={styles.container}>
      <section className={styles.manifestSection}>
        <h3 className={styles.title}>Manifest section!</h3>

        <article className={styles.infoContainer}>
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
          <p className={styles.p1}>
            Total photos this day:
            <strong>{camerasInfo.totalPhotos}</strong>
          </p>
          {!camerasInfo.arePhotos
            && <p className={styles.p1}>no pictures this day, Rover was on vacation! :D </p>}

          <h3>Cameras:</h3>
          <ListGroup className=" col-xs-10 col-sm-6">
            {liCameras}
          </ListGroup>
        </article>
      </section>

      <article className={styles.viewContainer}>
        <RoverViewSection />
      </article>
    </section>
  );
};

export default RoverSearchSection;
