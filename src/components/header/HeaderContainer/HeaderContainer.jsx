import React from 'react';
import styles from './headerContainer.module.scss';
import VideoSimple from '../../ui/video/VideoSimple';

const sourceVideo = 'https://technology.nasa.gov/sites/default/files/2022-08/WebsiteLoopingvideo3.mp4';
const ariaLabel = 'NASA Technology Transfer Introduction Video';

const HeaderContainer = () => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <div className={styles.videoDiv}>
    <VideoSimple ariaLabel={ariaLabel} url={sourceVideo} />
    <Message />
  </div>
);

const Message = () => (
  <div className={styles.welcomeMessage}>
    <h3 className={styles.title}>Welcome to Beautiful-NASA</h3>
    <p
      className={styles.p1}
    >
      This application allows you to HIT 2 API&apos;s fournished by the NASA
    </p>
    <p className={styles.p1}>Enjoyed the views and the functionality</p>
    <p className={styles.p1}>
      Coded By
      {' '}
      <a
        href="https://github.com/LuisDavidRodriguez"
        target="_blank"
        rel="noreferrer"
        className={styles.a1}
      >
        Luis David Rodriguez Valades
      </a>
      {' '}
      powered by the NASA
    </p>
  </div>
);

export default HeaderContainer;
