import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper';
import { PropTypes } from 'prop-types';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperFlip.scss';

const SwiperFlip = (props) => {
  const { cards } = props;
  const slides = cards.map((card) => <SwiperSlide key={card.key}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        effect="flip"
        grabCursor
        pagination
        navigation
        modules={[EffectFlip, Pagination, Navigation]}
        className="swiper-flip"
      >
        {slides}
      </Swiper>
    </>
  );
};

export default SwiperFlip;

SwiperFlip.defaultProps = {
  cards: 'Slide',
};

SwiperFlip.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};
