import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './bandSection.module.scss';
import MySwiper from '../ui/Swiper/Swiper';

const BandSection = (props) => {
  const {
    title,
    info,
    linkTo,
    cards,
    color,
    buttonHandler,
  } = props;

  // because we are using modules
  // If you are using css-modules, or a similar approach to abstract class "names"
  const cx = classNames.bind(styles);
  const containerClass = cx(
    'container',
    color,
  );

  return (
    <section className={containerClass} style={{ backgroundColor: color }}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.info}>{info}</p>
      <MySwiper cards={cards} />
      {linkTo !== '' && <NavLink to={`/${linkTo}`} className={styles.viewMore}>Go to section</NavLink>}
      { buttonHandler !== null && <button className="btn btn-secondary" type="button" onClick={buttonHandler}>Load New random</button>}
    </section>
  );
};

export default BandSection;

BandSection.defaultProps = {
  linkTo: '',
  cards: 'default card',
  title: 'default Title',
  info: 'default info',
  color: 'one',
  buttonHandler: null,
};

BandSection.propTypes = {
  linkTo: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.string,
  info: PropTypes.string,
  color: PropTypes.string,
  buttonHandler: PropTypes.func,
};
