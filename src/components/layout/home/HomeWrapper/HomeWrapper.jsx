import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchRandomApodByQuantity } from '../../../../redux/apodApi';
import ApodBand from '../ApodBand/ApodBand';
import './homeWrapper.scss';
import HeaderContainer from '../../../header/HeaderContainer/HeaderContainer';
import Cards from '../../../ui/Cards/Cards';
import { ROVER, APOD } from '../../../NavBar/NavBar';

const title = 'Astronomy Picture of the Day (APOD)';
const info = 'One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. ';
const titleRover = 'Mars Rover Photos';
const infoRover = "This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.";

const HomeWrapper = () => {
  const cards2 = [11, 22, 33, 44, 55, 66, 77, 88].map((item) => <Cards key={item} id={item} />);
  const dispatch = useDispatch();
  const apodRandom = useSelector((state) => state.apod, shallowEqual);

  useEffect(() => {
    if (apodRandom.length === 0) {
      dispatch(fetchRandomApodByQuantity());
    }
  });

  // create cards for the randomApod
  let cardsApod = [];
  if (apodRandom === 'loading') {
    cardsApod = [1845, 2848, 3545].map((skeleton) => (
      <Cards
        key={skeleton}
        id={skeleton}
      />
    ));
  } else {
    cardsApod = apodRandom.map((apod) => (
      <Cards
        key={apod.id}
        id={apod.id}
        title={apod.title}
        topic={apod.date}
        information={apod.explanation}
        url={apod.url}
        altPicture={apod.title}
        mediaType={apod.mediaType}
      />
    ));
  }

  return (
    <div className="homeWrapper">
      <HeaderContainer />
      <ApodBand
        cards={cardsApod}
        title={title}
        info={info}
        linkTo={APOD}
        color="one"
        buttonHandler={() => dispatch(fetchRandomApodByQuantity())}
      />

      <ApodBand
        cards={cards2}
        title={titleRover}
        info={infoRover}
        linkTo={ROVER}
        color="two"
      />
    </div>
  );
};

export default HomeWrapper;
