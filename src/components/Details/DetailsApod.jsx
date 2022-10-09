/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './details.module.scss';
import MultipleMediaRender from '../ui/MultipleMediaRender/MultipleMediaRender';

const DetailsApod = (props) => {
  const { data } = props;

  return (
    <>
      <article className={styles.infoContainer}>
        <p className={styles.date}>{data.date}</p>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.p1}>{data.explanation}</p>
      </article>
      <article className={styles.mediaContainer}>
        <MultipleMediaRender
          altPicture={data.title}
          url={data.url}
          mediaType={data.mediaType}
        />
      </article>
    </>
  );
};

export default DetailsApod;

DetailsApod.defaultProps = {
  data: {
    id: 'default',
    title: 'default',
    url: 'default',
    explanation: 'default',
    date: 'default',
    mediaType: 'default',
  },
};

DetailsApod.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    explanation: PropTypes.string,
    date: PropTypes.string,
    mediaType: PropTypes.string,
  }),
};
