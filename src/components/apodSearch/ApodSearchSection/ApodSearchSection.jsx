/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDateApod } from '../../../redux/apodApi';
import { allApodsActions } from '../../../redux/apod';
import MySwiperGrid from '../../ui/SwiperGrid/SwiperGrid';
import styles from './apodSearchSection.module.scss';
import * as cardsCreators from '../../../helpers/cardsCreators';
import Cards from '../../ui/Cards/Cards';
import FormFilter from '../FormFilter/FormFilter';

const ApodSearchSection = () => {
  const dispatch = useDispatch();
  const allApodsStatus = useSelector((state) => state.allApods.status);
  const allApods = useSelector((state) => filterState(state));

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

  const cards = cardsCreators.createCardsApod(allApods, Cards);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Now lets go to search something</h3>
      <FormFilter
        reportInputs={handleFormData}
        buttonHandler1={() => dispatch(allApodsActions.showAll())}
        buttonText1="Show all"
      />
      <MySwiperGrid cards={cards} />
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
