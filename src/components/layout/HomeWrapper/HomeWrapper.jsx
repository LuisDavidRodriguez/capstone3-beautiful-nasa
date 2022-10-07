/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchRandomApodByQuantity, fetchDateApod } from '../../../redux/apodApi';
import { ROVER, APOD } from '../../NavBar/NavBar';
import { roverFetchRandomPhotos } from '../../../redux/roverApi';
import { imgVidFetchQueryes } from '../../../redux/imageVideoApi';
import BandSection from '../../BandSection/BandSection';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';
import Cards from '../../ui/Cards/Cards';
import * as helper from '../../../helpers/cardsCreators';
import * as dateHelper from '../../../helpers/dates';
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
  const roverRandom = useSelector((state) => state.roverRandomPhotos);
  const nasaImgVideo = useSelector((state) => state.imgVideo);
  const statusAllApod = useSelector((state) => state.allApods.status);

  useEffect(() => {
    if (apodRandom.length === 0) {
      dispatch(fetchRandomApodByQuantity());
    }

    if (roverRandom.length === 0) {
      dispatch(roverFetchRandomPhotos({ sol: 1000, page: 3 }));
    }

    if (Object.keys(nasaImgVideo).length === 0) {
      dispatch(imgVidFetchQueryes({ yearStart: '2022', page: 1 }));
    }

    if (statusAllApod === 'empty') {
      // I will fetch the data of all the appods here becase
      // the nasa API is so slow when retreve the info by dates
      // reaching up tu 30s in the fetch
      dispatch(fetchDateApod(dateHelper.getMonthAgo(-100)));
    }
  });

  // create cards for the randomApod
  const cardsApod = helper.createCardsApod(apodRandom, Cards);
  const cardsRover = helper.createCardsRover(roverRandom, Cards);
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
      />
    </div>
  );
};

export default HomeWrapper;
