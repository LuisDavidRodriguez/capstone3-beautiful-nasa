import React from 'react';
import { PropTypes } from 'prop-types';
import MultipleMediaRender from '../ui/MultipleMediaRender/MultipleMediaRender';
import styles from './welcomeSection.module.scss';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';

const WelcomeSection = (props) => {
  const {
    url,
    mediaType,
    altPicture,
    isLoading,
  } = props;

  return (
    <section className={styles.welcomeSection}>
      {isLoading
        ? <LoadingSpinner />
        : (
          <MultipleMediaRender
            altPicture={altPicture}
            mediaType={mediaType}
            url={url}
            prefixClassName="welcome"
          />
        )}
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {
  url: '',
  mediaType: 'image',
  altPicture: 'default',
  isLoading: true,
};

WelcomeSection.propTypes = {
  url: PropTypes.string,
  mediaType: PropTypes.string,
  altPicture: PropTypes.string,
  isLoading: PropTypes.bool,
};
