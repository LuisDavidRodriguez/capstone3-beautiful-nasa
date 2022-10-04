import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './cards.module.scss';
import defaultPicture from './default_picture.png';

const Cards = (props) => {
  const {
    topic,
    subtitle,
    information,
    picture,
    altPicture,
  } = props;

  return (
    <section className={styles.cardContainer}>
      <article className={styles.infoContainer}>
        <p className={styles.topic}>{topic}</p>
        <h3 className={styles.title}>{subtitle}</h3>
        <p className={styles.subtitle}>{information}</p>
        <img src={picture} alt={altPicture} />
      </article>
    </section>
  );
};

export default Cards;

Cards.defaultProps = {
  topic: 'topic',
  subtitle: 'subtitle',
  information: 'info',
  picture: defaultPicture,
  altPicture: 'default picture',
};

Cards.propTypes = {
  topic: PropTypes.string,
  subtitle: PropTypes.string,
  information: PropTypes.string,
  picture: PropTypes.string,
  altPicture: PropTypes.string,
};
