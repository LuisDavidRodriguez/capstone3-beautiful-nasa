// I created this helper because it is important to know
// that the information received from each API is pretty different
// so it is better deal with each information in only this place
// instead of has in other part of the program again how to clean the data

const createCardsApod = (data, Cards, clickMore, cardFamily) => {
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
        clickMore={clickMore}
        cardFamily={cardFamily}
      />
    ));
  }

  return cards;
};

function createCardsRover(data, Cards, clickMore, cardFamily) {
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
      const createdTitle = `Rover: ${picture.rover.name} `;
      const createdInfo = `Camera: ${picture.camera.name} ${picture.camera.full_name}`;
      const createdDate = `Earth date: ${picture.earth_date} -> Martian Sol: ${picture.sol}`;
      return (
        <Cards
          key={picture.id}
          id={picture.id}
          title={createdTitle}
          topic={createdDate}
          information={createdInfo}
          url={picture.img_src}
          altPicture={createdTitle}
          clickMore={clickMore}
          cardFamily={cardFamily}
        />
      );
    });
  }

  return cards;
}

function createCardsMedia(data, Cards, clickMore, cardFamily) {
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
    cards = [...items].slice(0, 25).map((item) => {
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
          clickMore={clickMore}
          cardFamily={cardFamily}
        />
      );
    });
  }

  return cards;
}

export { createCardsApod, createCardsRover, createCardsMedia };
