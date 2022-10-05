import React from 'react';
import { PropTypes } from 'prop-types';
import YoutubeEmbed from '../video/YouTube/YouTubeEmbed';
import VideoSimple from '../video/VideoSimple';
import './multipleMediaRender.css';

const MultipleMediaRender = (props) => {
  const {
    url,
    mediaType,
    altPicture,
  } = props;

  let mediaComponent = <img src={url} alt={altPicture} className="default-picture" />;

  if (mediaType === 'video') {
    const isYoutube = url.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);

    if (isYoutube) {
      mediaComponent = <YoutubeEmbed embedUrl={url} />;
    } else {
      mediaComponent = <VideoSimple ariaLabel={altPicture} url={url} />;
    }
  }
  return (
    mediaComponent
  );
};

export default MultipleMediaRender;

MultipleMediaRender.defaultProps = {
  url: '',
  mediaType: 'image',
  altPicture: 'default',
};

MultipleMediaRender.propTypes = {
  url: PropTypes.string,
  mediaType: PropTypes.string,
  altPicture: PropTypes.string,
};
