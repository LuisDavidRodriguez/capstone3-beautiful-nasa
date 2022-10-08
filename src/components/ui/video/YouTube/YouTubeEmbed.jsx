// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
import React from 'react';
import PropTypes from 'prop-types';
import './youTubeEmbed.scss';

const YoutubeEmbed = ({ embedUrl }) => (
  <div className="video-responsive">
    <iframe
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
