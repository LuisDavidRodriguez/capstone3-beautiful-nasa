/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchRandomApodByQuantity } from '../../../redux/apodApi';
import { ROVER, APOD, MEDIA } from '../../NavBar/NavBar';
import { roverFetchPhotos } from '../../../redux/roverApi';
import { imgVidFetchQueryes } from '../../../redux/imageVideoApi';
import BandSection from '../../BandSection/BandSection';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';
import Cards from '../../ui/Cards/Cards';
import * as helper from '../../../helpers/cardsCreators';
import './homeWrapper.scss';

const title = 'Astronomy Picture of the Day (APOD)';
const info = 'One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. ';
const titleRover = 'Mars Rover Photos';
const infoRover = "This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.";
const titleMedia = 'NASA Image and Video Library';
const infoMedia = 'The NASA images and media API is organized around REST, You can see and retreive all the media pictures that NASA deliver us.';

const HomeWrapper = () => {
  const dispatch = useDispatch();
  const apodRandom = useSelector((state) => state.randomApod, shallowEqual);
  const roverPhotos = useSelector((state) => state.roverPhotos);
  const nasaImgVideo = useSelector((state) => state.imgVideo);

  useEffect(() => {
    if (apodRandom.length === 0) {
      dispatch(fetchRandomApodByQuantity());
    }

    if (roverPhotos.length === 0) {
      dispatch(roverFetchPhotos({ sol: 1000, page: 3 }));
    }

    if (Object.keys(nasaImgVideo).length === 0) {
      dispatch(imgVidFetchQueryes({ yearStart: '2022', page: 1 }));
    }
  });

  // create cards for the randomApod
  const cardsApod = helper.createCardsApod(apodRandom, Cards);
  const cardsRover = helper.createCardsRover(roverPhotos, Cards);
  const cardsImgVideo = helper.createCardsMedia(nasaImgVideo, Cards);

  return (
    <div className="homeWrapper">
      <HeaderContainer />
      <BandSection
        cards={cardsApod}
        title={title}
        info={info}
        linkTo={APOD}
        color="one"
        buttonHandler={() => dispatch(fetchRandomApodByQuantity())}
      />

      <BandSection
        cards={cardsRover}
        title={titleRover}
        info={infoRover}
        linkTo={ROVER}
        color="two"
      />

      <BandSection
        cards={cardsImgVideo}
        title={titleMedia}
        info={infoMedia}
        color="three"
        linkTo={MEDIA}
      />
    </div>
  );
};

export default HomeWrapper;
