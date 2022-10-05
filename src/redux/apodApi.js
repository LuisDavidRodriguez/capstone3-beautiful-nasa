/* eslint-disable no-unused-vars */
import { createAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { KEY } from './env';

const randomApodFetched = createAction('random_apod_fetched');

const APOD_BASE = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;
const getApodUrlQueryes = (qeryes) => {
  /* eslint-disable max-len */
  /*
  Parameter | Type       | Default | Description
  date      | YYYY-MM-DD | today   | The date of the APOD image to retrieve
  start_date| YYYY-MM-DD | none    | the start of a date range, when requesting date for a range of dates. Cannot be used with date.
  end_date  | YYYY-MM-DD | today   | The end of the date range, when used with start_date.
  count     | int        | none    | If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
  thumbs    | bool       | False   | Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
  api_key   | string     | DEMO_KEY| api.nasa.gov key for expanded usage
  */
  /* eslint-enable max-len */

  const {
    date = null,
    startDate = null,
    endDate = null,
    count = null,
    thumps = null,
  } = qeryes;

  let result = APOD_BASE;

  if (date) {
    result += `&date=${date}`;
  }

  if (startDate && endDate) {
    result += `&start_date=${startDate}&end_date=${endDate}`;
  }

  if (count) {
    result += `&count=${count}`;
  }

  if (thumps) {
    result += `&thumps=${thumps}`;
  }

  return result;
};

const fetchTodayApod = async () => {
  console.log('fetching today apod...');
  try {
    const response = await fetch(APOD_BASE);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const fetchRandomApodByQuantity = createAsyncThunk(randomApodFetched, async (quantity = 20) => {
  console.log('fetching Quantity apods...');
  // Accoording with documentation If this is specified then count randomly
  // chosen images will be returned. Cannot be used with date or start_date and end_date.
  const url = getApodUrlQueryes({ count: quantity });
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // the data is an array
    const less = data.map((apod) => {
      const {
        title,
        url,
        date,
        explanation,
        media_type: mediaType,
      } = apod;

      // in media tipe we could have video image
      return {
        id: nanoid(),
        title,
        url,
        date,
        explanation,
        mediaType,
      };
    });

    // console.log(less);
    return less;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export { fetchTodayApod, fetchRandomApodByQuantity };
