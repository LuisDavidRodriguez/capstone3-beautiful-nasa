/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchRandomApodByQuantity } from '../../../redux/apodApi';
import BandSection from '../../BandSection/BandSection';
import './homeWrapper.scss';
import HeaderContainer from '../../header/HeaderContainer/HeaderContainer';
import Cards from '../../ui/Cards/Cards';
import { ROVER, APOD, MEDIA } from '../../NavBar/NavBar';
import { roverFetchPhotos } from '../../../redux/roverApi';
import { imgVidFetchQueryes } from '../../../redux/imageVideoApi';

const title = 'Astronomy Picture of the Day (APOD)';
const info = 'One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. ';
const titleRover = 'Mars Rover Photos';
const infoRover = "This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.";
const titleMedia = 'NASA Image and Video Library';
const infoMedia = 'The NASA images and media API is organized around REST, You can see and retreive all the media pictures that NASA deliver us.';

const HomeWrapper = () => {
  const dispatch = useDispatch();
  const apodRandom = useSelector((state) => state.apod, shallowEqual);
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
  const cardsApod = createCardsApod(apodRandom);
  const cardsRover = createCardsRover(roverPhotos);
  const cardsImgVideo = createCardsMedia(nasaImgVideo);

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

function createCardsApod(data) {
  let cards = [];
  if (data === 'loading') {
    // colocamos fakes id for the skeleton
    cards = [1845, 2848, 3545].map((skeleton) => (
      <Cards
        key={skeleton}
        id={skeleton}
      />
    ));
  } else {
    cards = data.map((apod) => (
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

  return cards;
}

function createCardsRover(data) {
  let cards = [];
  if (data === 'loading') {
    // colocamos fakes id for the skeleton
    cards = [48548, 18948, 48456].map((skeleton) => (
      <Cards
        key={skeleton}
        id={skeleton}
      />
    ));
  } else {
    cards = data.map((picture) => {
      const createdTitle = `Camera: ${picture.camera.full_name}`;
      const createdDate = `Earth date: ${picture.earth_date} -> Martian Sol: ${picture.sol}`;
      return (
        <Cards
          key={picture.id}
          id={picture.id}
          title={createdTitle}
          topic={createdDate}
          information={picture.explanation}
          url={picture.img_src}
          altPicture={createdTitle}
        />
      );
    });
  }

  return cards;
}

function createCardsMedia(data) {
  console.log(data);
  // the data is an object with 2 keys items and links
  let cards = [];
  if (Object.keys(data).length === 0) return cards;

  if (data === 'loading') {
    // colocamos fakes id for the skeleton
    cards = [54895, 846489, 48465456].map((skeleton) => (
      <Cards
        key={skeleton}
        id={skeleton}
      />
    ));
  } else {
    const { items } = data;
    cards = items.map((item) => {
      const info = item.data[0];
      const media = item.links[0];
      const dateClear = info.date_created.match(/\d+-\d+-\d+/)[0];
      const createdTopic = `Date: ${dateClear} ---> Center: ${info.center}`;
      return (
        <Cards
          key={info.nasa_id}
          id={info.nasa_id}
          title={info.title}
          topic={createdTopic}
          information={info.description}
          altPicture={info.title}
          url={media.href}
          mediaType={media.render}
        />
      );
    });
  }

  return cards;
}

export default HomeWrapper;
