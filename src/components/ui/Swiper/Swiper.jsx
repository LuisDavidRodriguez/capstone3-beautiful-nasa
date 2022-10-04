// https://codesandbox.io/s/react-swiper-vc9r6?file=/src/App.js:1004-1056
// https://swiperjs.com/react
// https://swiperjs.com/demos
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { PropTypes } from 'prop-types';
import './mySwiper.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MySwiper = (props) => {
  const { cards } = props;

  const slides = cards.map((card) => <SwiperSlide key={card.id}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        tag="section"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => console.log('slide change', swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        onReachEnd={() => console.log('Swiper end reached')}
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
