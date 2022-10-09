// https://codesandbox.io/s/react-swiper-vc9r6?file=/src/App.js:1004-1056
// https://swiperjs.com/react
// https://swiperjs.com/demos
// https://codesandbox.io/s/935sdv?file=/src/App.jsx:459-506
// https://dev.to/timo_ernst/how-to-set-responsive-breakpoints-in-swiper-react-3bf6

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { PropTypes } from 'prop-types';
import './mySwiper.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const MySwiper = (props) => {
  const { cards } = props;

  const slides = cards.map((card) => <SwiperSlide className="type1" key={card.key}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        effect="coverflow"
        className="mySwiper"
        tag="section"
        wrapperTag="ul"
        slidesPerView={1.6}
        spaceBetween={0}
        grabCursor
        centeredSlides
        modules={[Pagination, EffectCoverflow]}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },

          900: {
            slidesPerView: 2.6,
            spaceBetween: 15,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1300: {
            slidesPerView: 3.2,
            spaceBetween: 15,
          },

          1500: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },

          1650: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },

        }}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default MySwiper;

MySwiper.defaultProps = {
  cards: 'Slide',
};

MySwiper.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};
