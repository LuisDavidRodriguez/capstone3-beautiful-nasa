import { createAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { KEY } from './env';
import * as dateHelper from '../helpers/dates';

const randomApodFetched = createAction('random_apod_fetched');
const dateApodFetched = createAction('date_apod_fetched');

async function fetchHelper(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error in fetch');
  const data = await response.json();
  return data;
}

const APOD_BASE = `https://api.nasa.gov/planetary/apod?api_key=${KEY}`;
const getApodUrlQueryes = (qeryes) => {
  /* eslint-disable max-len */
  // https://github.com/nasa/apod-api#docs
  /*
  Parameter | Type       | Default | Description
  date      | YYYY-MM-DD | today   | A string in YYYY-MM-DD format indicating the date of the APOD image (example: 2014-11-03). Defaults to today's date. Must be after 1995-06-16, the first day an APOD picture was posted. There are no images for tomorrow available through this API.
  start_date| YYYY-MM-DD | none    | the start of a date range, when requesting date for a range of dates. Cannot be used with date.
  end_date  | YYYY-MM-DD | today   | indicating that end of a date range. If start_date is specified without an end_date then end_date defaults to the current date.
  count     | int        | none    | A positive integer, no greater than 100. If this is specified then count randomly chosen images will be returned in a JSON array. Cannot be used in conjunction with date or start_date and end_date.
  thumbs    | bool       | False   | A boolean parameter True|False inidcating whether the API should return a thumbnail image URL for video files. If set to True, the API returns URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
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

  if (startDate) {
    result += `&start_date=${startDate}`;
  }

  if (endDate) {
    result += `&end_date=${endDate}`;
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
  try {
    const data = await fetchHelper(APOD_BASE);
    return data;
  } catch (error) {
    return 'error';
  }
};

const fetchRandomApodByQuantity = createAsyncThunk(randomApodFetched, async (quantity = 20) => {
  // Accoording with documentation If this is specified then count randomly
  // chosen images will be returned. Cannot be used with date or start_date and end_date.
  const url = getApodUrlQueryes({ count: quantity });
  try {
    const data = await fetchHelper(url);
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

    return less;
  } catch (error) {
    return [];
  }
});

// eslint-disable-next-line max-len
const fetchDateApod = createAsyncThunk(dateApodFetched, async (startDate = dateHelper.getMonthAgo()) => {
  // "msg": "Date must be between Jun 16, 1995 and actual date",
  // if you spicify an strt date with out end date the sistem will take the currentDate as endDate
  // becareful you can not reterive to many days behind the API delivers an error
  // for security just fetch 4 month the API is so slow with larger periods
  // the api was proved using 1 year
  // times with 46 secons for reterive 1 year data
  // for 4 months 16secons
  // for 2 months 8 seconds
  // for 1 month 4.5 seconds
  // with more the api just blows up
  const url = getApodUrlQueryes({ startDate });
  try {
    const data = await fetchHelper(url);
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
    return 'error';
  }
});

export { fetchTodayApod, fetchRandomApodByQuantity, fetchDateApod };
