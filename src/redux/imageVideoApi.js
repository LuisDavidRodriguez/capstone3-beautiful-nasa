import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const IMG_VIDEO_BASE = 'https://images-api.nasa.gov';
const mediaFetched = createAction('media_fetched');
const mediaIdFetched = createAction('media_id_fetched');

async function fetchHelper(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error in fetch');
  const data = await response.json();
  return data;
}

const getImgVideoUrlQueryes = (qeryes) => {
  /* eslint-disable */
  /*
    https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
    Name                                  Type      Description
    q (optional)                          string     Free text search terms to compare to all indexed metadata.
    center (optional)                     string     NASA center which published the media.
    description(optional)                 string     Terms to search for in “Description” fields.
    description_508(optional)             string     Terms to search for in “508 Description” fields.
    keywords (optional)                   string     Terms to search for in “Keywords” fields. Separate multiple values with commas.
    location (optional)                   string     Terms to search for in “Location” fields.
    media_type (optional)                 string     Media types to restrict the search to. Available types: [“image”, “audio”]. Separate multiple values with commas.
    nasa_id (optional)                    string     The media asset’s NASA ID.
    page (optional)                       integer    Page number, starting at 1, of results to get.
    photographer(optional)                string     The primary photographer’s name.
    secondary_creator(optional)           string     A secondary photographer/videographer’s name.
    title (optional)                      string     Terms to search for in “Title” fields.
    year_start (optional)                 string     The start year for results. Format: YYYY.
    year_end (optional)                   string     The end year for results. Format: YYYY.

    Example Request:
    At least one parameter is required, but all individual parameters are optional. All parameter values must be URL­encoded. Most
    HTTP client libraries will take care of this for you. Use --data-urlencode to encode values using curl:
    "https://images-api.nasa.gov/search
    ?q=apollo%2011
    &description=moon%20landing
    &media_type=image" |
    python -m json.tool
  */
  /* eslint-enable */

  const {
    q = null,
    center = null,
    description = null,
    description508 = null,
    keywords = null,
    location = null,
    mediaType = 'image',
    nasaId = null,
    page = null,
    photographer = null,
    secondaryCreator = null,
    title = null,
    yearStart = '2022',
    yearEnd = null,
  } = qeryes;

  let flagFirst = true;
  let prefix = '';
  let result = IMG_VIDEO_BASE;
  result += '/search';

  if (q) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}q=${q}`;
  }

  if (center) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}center=${center}`;
  }

  if (description) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}description=${description}`;
  }

  if (description508) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}description_508=${description508}`;
  }

  if (keywords) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}keywords=${keywords}`;
  }

  if (location) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}location=${location}`;
  }

  if (mediaType) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}media_type=${mediaType}`;
  }

  if (nasaId) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}nasa_id=${nasaId}`;
  }

  if (page) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}page=${page}`;
  }

  if (photographer) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}photographer=${photographer}`;
  }

  if (secondaryCreator) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}secondary_creator=${secondaryCreator}`;
  }

  if (title) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}title=${title}`;
  }

  if (yearStart) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}year_start=${yearStart}`;
  }

  if (yearEnd) {
    if (flagFirst) {
      prefix = '?';
      flagFirst = false;
    } else {
      prefix = '&';
    }

    result += `${prefix}year_end=${yearEnd}`;
  }

  return result;
};

const getAssetsByIdQueryes = (qeryes) => {
  /*
  https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

    Name     Type    Description
    nasa_id  string  The media asset’s NASA ID.

    https://images-api.nasa.gov/asset/as11-40-5874
  */
  const {
    id = null,
  } = qeryes;

  let result = IMG_VIDEO_BASE;
  result += `/asset/${id}`;

  return result;
};

const imgVidFetchQueryes = createAsyncThunk(mediaFetched, async (queryes = {}) => {
  const url = getImgVideoUrlQueryes(queryes);
  try {
    const data = await fetchHelper(url);
    const { collection } = data;
    // I will prune some data that I not need
    const { items, links } = collection;
    return { items, links };
  } catch (error) {
    return 'error';
  }
});

const mediaByIdFetch = createAsyncThunk(mediaIdFetched, async (queryes = {}) => {
  const url = getAssetsByIdQueryes(queryes);
  try {
    const data = await fetchHelper(url);
    // the data is an array
    return [data];
  } catch (error) {
    return 'error';
  }
});

export { imgVidFetchQueryes, mediaByIdFetch };
