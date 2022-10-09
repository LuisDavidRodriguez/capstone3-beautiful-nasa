import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roverFetchGeneral } from '../../../redux/roverApi';
import CardsImg from '../../ui/CardsImg/CardsImg';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import * as cardHelpers from '../../../helpers/cardsCreators';
import DetailsRover from '../../Details/DetailsRover';
import Modal from '../../ui/Modal/Modal';

const RoverViewSection = () => {
  const dispatch = useDispatch();
  const generalPhotosStatus = useSelector((state) => state.roverGeneralPhotos.status);
  const generalPhotos = useSelector((state) => state.roverGeneralPhotos.data);
  const dateFilter = useSelector((state) => state.revorManifest.filters);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState('');

  useEffect(() => {
    if (generalPhotosStatus === 'reFetch') {
      const { date, rover } = dateFilter;
      dispatch(roverFetchGeneral({ earthDate: date, rover }));
    }
  });

  const handleCardClick = (id) => {
    setModalId(id);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  let childrenModal = '';
  if (modalVisible) {
    // filter the Id in the database
    try {
      const rover = generalPhotos.filter((item) => item.id === modalId)[0];
      childrenModal = <DetailsRover data={rover} />;
    } catch (error) {
      childrenModal = '';
    }
  }

  const cards = cardHelpers.createCardsRover(
    generalPhotos,
    CardsImg,
    handleCardClick,
  );

  return (
    <>
      <MySwiperGrid
        cards={cards}
      />
      <Modal
        handleClose={handleClose}
        show={modalVisible}
      >
        {childrenModal}
      </Modal>
    </>
  );
};

export default RoverViewSection;
