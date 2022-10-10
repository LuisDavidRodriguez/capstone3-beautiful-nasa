/* eslint-disable prefer-const */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './cards.module.scss';
import defaultPicture from './default_picture.png';
import MultipleMediaRender from '../MultipleMediaRender/MultipleMediaRender';

const Cards = (props) => {
  let {
    topic,
    title,
    information,
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
  information = `${information.substring(0, 300)}...`;
  altPicture = `${title.substring(0, 30)}...`;

  return (
    <section className={styles.cardContainer}>
      <article className={styles.infoContainer}>
        <p className={styles.topic}>{topic}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{information}</p>
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

export default Cards;

Cards.defaultProps = {
  topic: '',
  title: '',
  information: '',
  url: defaultPicture,
  altPicture: 'default picture',
  mediaType: 'image',
  clickMore: () => {},
  cardFamily: 'default Family',
};

Cards.propTypes = {
  topic: PropTypes.string,
  title: PropTypes.string,
  information: PropTypes.string,
  url: PropTypes.string,
  altPicture: PropTypes.string,
  mediaType: PropTypes.string,
  clickMore: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardFamily: PropTypes.string,
};
