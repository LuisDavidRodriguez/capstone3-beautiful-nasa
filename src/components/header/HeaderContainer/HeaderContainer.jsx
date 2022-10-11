import React from 'react';
import styles from './headerContainer.module.scss';
import VideoSimple from '../../ui/video/VideoSimple';

const sourceVideo = 'https://technology.nasa.gov/sites/default/files/2022-08/WebsiteLoopingvideo3.mp4';
const ariaLabel = 'NASA Technology Transfer Introduction Video';

const HeaderContainer = () => (
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
      This application allows you to connect with NASA API&apos;s
    </p>
    <p className={styles.p2}>Enjoy the views and functionality</p>
    <p className={styles.p3}>
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
      powered by NASA
    </p>
  </div>
);

export default HeaderContainer;
