/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDateApod } from '../../../redux/apodApi';
import { allApodsActions } from '../../../redux/apod';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import styles from './apodSearchSection.module.scss';
import * as cardsCreators from '../../../helpers/cardsCreators';
import CardsImg from '../../ui/CardsImg/CardsImg';
import FormFilter from '../FormFilter/FormFilter';
import DetailsApod from '../../Details/DetailsApod';
import Modal from '../../ui/Modal/Modal';

const ApodSearchSection = () => {
  const dispatch = useDispatch();
  const allApodsStatus = useSelector((state) => state.allApods.status);
  const allApods = useSelector((state) => filterState(state));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState('');

  useEffect(() => {
    if (allApodsStatus === 'empty') {
      dispatch(fetchDateApod());
    }
  });

  const handleFormData = ({ text, date, mediaType }) => {
    if (text !== '') {
      dispatch(allApodsActions.setTextFilter(text));
    } else if (date !== '') {
      dispatch(allApodsActions.setDateFilter(date));
    } else if (mediaType === 'image' || mediaType === 'video') {
      dispatch(allApodsActions.setMediaFilter(mediaType));
    } else {
      dispatch(allApodsActions.showAll());
    }
  };

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
      const [apod] = allApods.filter((item) => item.id === modalId);
      childrenModal = <DetailsApod data={apod} />;
    } catch (error) {
      childrenModal = '';
    }
  }

  const cards = cardsCreators.createCardsApod(allApods, CardsImg, handleCardClick);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Search something</h3>
      <FormFilter
        reportInputs={handleFormData}
        buttonHandler1={() => dispatch(allApodsActions.showAll())}
        buttonText1="Show all"
      />
      <section className={styles.swiperContainer}>
        <MySwiperGrid cards={cards} />
      </section>

      <Modal
        handleClose={handleClose}
        show={modalVisible}
      >
        {childrenModal}
      </Modal>
    </section>
  );
};

function filterState(state) {
  const {
    show,
    date,
    text,
    mediaType,
  } = state.allApods.filters;

  if (show === 'TEXT') {
    // we want to filter in both title and description
    return state.allApods.data.filter((item) => {
      const { explanation, title } = item;
      // trim the search in the explanation at the same visible explanation in the card
      const subExpla = explanation.substring(0, 200);
      const lowerExpla = subExpla.toLowerCase();
      const lowerTitle = title.toLowerCase();
      const lowerText = text.toLowerCase();
      return lowerExpla.indexOf(lowerText) > -1 || lowerTitle.indexOf(lowerText) > -1;
    });
  }

  if (show === 'DATE') {
    return state.allApods.data.filter((item) => item.date === date);
  }

  if (show === 'MEDIA') {
    return state.allApods.data.filter((item) => item.mediaType === mediaType);
  }

  // case of all
  return state.allApods.data;
}

export default ApodSearchSection;
