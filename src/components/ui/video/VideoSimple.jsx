import React from 'react';
import { PropTypes } from 'prop-types';

const VideoSimple = (props) => {
  const { ariaLabel, url } = props;

  return (
    <video preload="true" muted autoPlay playsInline loop aria-label={ariaLabel} width="100%">
      <source src={url} type="video/mp4" />
      Sorry, your browser doesn&apos;t support videos.
    </video>
  );
};

VideoSimple.defaultProps = {
  ariaLabel: 'default alt',
  url: '',
};

VideoSimple.propTypes = {
  ariaLabel: PropTypes.string,
  url: PropTypes.string,
};

export default VideoSimple;
