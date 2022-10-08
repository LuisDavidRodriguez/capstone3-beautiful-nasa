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
  } = props;

  // protect against bigger texts
  title = `${title.substring(0, 30)}`;
  information = `${information.substring(0, 200)}...`;
  altPicture = `${title.substring(0, 30)}...`;

  return (
    <section className={styles.cardContainer}>
      <article className={styles.infoContainer}>
        <p className={styles.topic}>{topic}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{information}</p>
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
  topic: 'topic',
  title: 'title',
  information: 'info',
  url: defaultPicture,
  altPicture: 'default picture',
  mediaType: 'image',
};

Cards.propTypes = {
  topic: PropTypes.string,
  title: PropTypes.string,
  information: PropTypes.string,
  url: PropTypes.string,
  altPicture: PropTypes.string,
  mediaType: PropTypes.string,
};
