// https://codesandbox.io/s/react-swiper-vc9r6?file=/src/App.js:1004-1056
// https://swiperjs.com/react
// https://swiperjs.com/demos
// https://codesandbox.io/s/935sdv?file=/src/App.jsx:459-506
// https://dev.to/timo_ernst/how-to-set-responsive-breakpoints-in-swiper-react-3bf6

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import { PropTypes } from 'prop-types';
// Import Swiper styles
import './swiperGrid.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const MySwiperGrid = (props) => {
  const { cards } = props;

  const slides = cards.map((card) => <SwiperSlide key={card.key}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        className="my-swiper-grid"
        tag="section"
        wrapperTag="ul"
        slidesPerView={1.1}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        modules={[Pagination, Grid]}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          900: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },

          1100: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },

          1300: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

        }}
        // onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        // onSlideChange={(swiper) => console.log('Slide index changed to: ', swiper.activeIndex)}
        // onSwiper={(swiper) => console.log(swiper)}
        // onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default MySwiperGrid;

MySwiperGrid.defaultProps = {
  cards: 'Slide',
};

MySwiperGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};
