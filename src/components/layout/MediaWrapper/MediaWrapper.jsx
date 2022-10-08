import React, { useEffect } from 'react';
import './mediaWrapper.scss';

const MediaWrapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="mediaWrapper">MediaWrapper</div>
  );
};

export default MediaWrapper;
