/* eslint-disable prefer-const */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './cards.module.scss';
import defaultPicture from './default_picture.png';
import VideoSimple from '../video/VideoSimple';
import YoutubeEmbed from '../video/YouTube/YouTubeEmbed';

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
  information = `${information.substring(0, 300)}...`;
  altPicture = `${title.substring(0, 30)}...`;

  let mediaComponent = <img src={url} alt={altPicture} className={styles.picture} />;

  if (mediaType === 'video') {
    const isYoutube = url.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);

    if (isYoutube) {
      mediaComponent = <YoutubeEmbed embedUrl={url} />;
    } else {
      mediaComponent = <VideoSimple ariaLabel={altPicture} url={url} />;
    }
  }

  return (
    <section className={styles.cardContainer}>
      <article className={styles.infoContainer}>
        <p className={styles.topic}>{topic}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{information}</p>
      </article>
      {mediaComponent}
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
