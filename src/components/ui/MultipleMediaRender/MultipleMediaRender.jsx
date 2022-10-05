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
    prefixClassName,
  } = props;

  let mediaComponent = <img src={url} alt={altPicture} className={`${prefixClassName}-media-render-image default-picture`} />;

  if (mediaType === 'video') {
    const isYoutube = url.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);

    if (isYoutube) {
      mediaComponent = <YoutubeEmbed className={`${prefixClassName}-media-render-youtube-embed`} embedUrl={url} />;
    } else {
      mediaComponent = <VideoSimple className={`${prefixClassName}-media-render-video-simple`} ariaLabel={altPicture} url={url} />;
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
  prefixClassName: '',
};

MultipleMediaRender.propTypes = {
  url: PropTypes.string,
  mediaType: PropTypes.string,
  altPicture: PropTypes.string,
  prefixClassName: PropTypes.string,
};
