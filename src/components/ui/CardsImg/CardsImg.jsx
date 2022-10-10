/* eslint-disable prefer-const */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './cardsImg.module.scss';
import defaultPicture from './default_picture.png';
import MultipleMediaRender from '../MultipleMediaRender/MultipleMediaRender';

const CardsImg = (props) => {
  let {
    topic,
    title,
    url,
    altPicture,
    mediaType,
    id,
    cardFamily,
  } = props;

  const {
    clickMore,
  } = props;

  // protect against bigger texts
  title = `${title.substring(0, 30)}`;
  altPicture = `${title.substring(0, 30)}...`;

  return (
    <section className={styles.cardContainer}>
      <article className={styles.infoContainer}>
        <p className={styles.topic}>{topic}</p>
        <h3 className={styles.title}>{title}</h3>
        <button type="button" onClick={() => clickMore(id, cardFamily)}>see details</button>
      </article>
      <div className={styles.media}>
        <MultipleMediaRender
          altPicture={altPicture}
          mediaType={mediaType}
          url={url}
        />
      </div>
    </section>
  );
};

export default CardsImg;

CardsImg.defaultProps = {
  topic: '',
  title: '',
  url: defaultPicture,
  altPicture: 'default picture',
  mediaType: 'image',
  clickMore: () => {},
  cardFamily: 'default Family',
};

CardsImg.propTypes = {
  topic: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  altPicture: PropTypes.string,
  mediaType: PropTypes.string,
  clickMore: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardFamily: PropTypes.string,
};
