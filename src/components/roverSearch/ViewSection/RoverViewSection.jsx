import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roverFetchGeneral } from '../../../redux/roverApi';
import Cards from '../../ui/Cards/Cards';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import * as cardHelpers from '../../../helpers/cardsCreators';

const RoverViewSection = () => {
  const dispatch = useDispatch();
  const generalPhotosStatus = useSelector((state) => state.roverGeneralPhotos.status);
  const generalPhotos = useSelector((state) => state.roverGeneralPhotos.data);
  const dateFilter = useSelector((state) => state.revorManifest.filters);

  useEffect(() => {
    if (generalPhotosStatus === 'reFetch') {
      const { date, rover } = dateFilter;
      dispatch(roverFetchGeneral({ earthDate: date, rover }));
    }
  });

  const cards = cardHelpers.createCardsRover(generalPhotos, Cards);
  return (
    <MySwiperGrid
      cards={cards}
    />
  );
};

export default RoverViewSection;
