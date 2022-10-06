/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { createAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { KEY } from './env';

const ROVER_BASE = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${KEY}`;
const roverManifestFetched = createAction('rover_manifest_fetched');
const roverPhotosFetched = createAction('rover_photos_fetched');

// this data is about the cameras availables in the Rover missions
// you can find the tabla herer
// https://api.nasa.gov/
const roverCameras = [
  {
    abbreviaton: 'FHAZ',
    camera: 'Front Hazard Avoidance Camera',
    curiosity: true,
    opportunity: true,
    spirit: true,
  },
  {
    abbreviaton: 'RHAZ',
    camera: 'Rear Hazard Avoidance Camera',
    curiosity: true,
    opportunity: true,
    spirit: true,
  },
  {
    abbreviaton: 'MAST',
    camera: 'Mast Camera',
    curiosity: true,
    opportunity: false,
    spirit: false,
  },
  {
    abbreviaton: 'CHEMCAM',
    camera: 'Chemistry and Camera Complex',
    curiosity: true,
    opportunity: false,
    spirit: false,
  },
  {
    abbreviaton: 'MAHLI',
    camera: 'Mars Hand Lens Imager',
    curiosity: true,
    opportunity: false,
    spirit: false,
  },
  {
    abbreviaton: 'MARDI',
    camera: 'Mars Descent Imager',
    curiosity: true,
    opportunity: false,
    spirit: false,
  },
  {
    abbreviaton: 'NAVCAM',
    camera: 'Navigation Camera',
    curiosity: true,
    opportunity: true,
    spirit: true,
  },
  {
    abbreviaton: 'PANCAM',
    camera: 'Panoramic Camera',
    curiosity: false,
    opportunity: true,
    spirit: true,
  },
  {
    abbreviaton: 'MINITES',
    camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    curiosity: false,
    opportunity: true,
    spirit: true,
  },
];

/*
Mission Manifest
A mission manifest is available for each Rover at /manifests/rover_name.
This manifest will list details of the Rover's mission to help narrow down
photo queries to the API. The information in the manifest includes:

Key Description
name Name of the Rover
landing_date The Rover's landing date on Mars
launch_date The Rover's launch date from Earth
status The Rover's mission status
max_sol The most recent Martian sol from which photos exist
max_date The most recent Earth date from which photos exist
total_photos Number of photos taken by that Rover
It also includes a list of objects under the "photos"
key which are grouped by sol, and each of which contains:

Key Description
sol Martian sol of the Rover's mission
total_photos Number of photos taken by that Rover on that sol
cameras Cameras for which there are photos by that Rover on that sol
An example entry from a sol at /manifests/Curiosity might look like:

{sol: 0, total_photos: 3702, cameras: [ "CHEMCAM", "FHAZ", "MARDI", "RHAZ"]}

This would tell you that this rover, on sol 0, took 3702 photos,
and those are from among the CHEMCAM, FHAZ, MARDI, and RHAZ cameras.
*/
const getUrlManifest = (rover = 0) => {
  const roverNames = { 0: 'curiosity', 1: 'opportunity', 2: 'opportunity' };
  return `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverNames[rover]}?api_key=${KEY}`;
};

const getRoverUrlQueryes = (qeryes) => {
  /*
    Querying by Martian sol
    Parameter | Type   | Default | Description
    sol       | int    | none    | sol (ranges from 0 to max found in endpoint)
    camera    | string | all     | see table above for abbreviations
    page      | int    | 1       | 25 items per page returned
    api_key   |string  | DEMO_KEY| api.nasa.gov key for expanded usage

    Querying by Earth date
    Parameter  |Type       | Default  | Description
    earth_date |YYYY-MM-DD |none      |corresponding date on earth for the given sol
    camera     |string     |all       |see table above for abbreviations
    page       |int        |1         |25 items per page returned
    api_key    |string     |DEMO_KEY  |api.nasa.gov key for expanded usage
  */
  const {
    sol = 1000,
    earthDate = null,
    camera = null,
    page = null,
  } = qeryes;

  let result = ROVER_BASE;

  // either sol or earth date could exist in the query
  if (sol) {
    result += `&sol=${sol}`;
  } else if (earthDate) {
    result += `&earth_date=${earthDate}`;
  }

  if (camera) {
    result += `&camera=${camera}`;
  }

  if (page) {
    result += `&page=${page}`;
  }

  return result;
};

const roverFetchManifest = createAsyncThunk(roverManifestFetched, async (rover = 0) => {
  console.log('fetching RoverManifest...');

  const url = getUrlManifest(rover);
  try {
    const data = await fetchHelper(url);
    // the data is an array
    return data;
  } catch (error) {
    console.log(error);
    return 'error';
  }
});

const roverFetchPhotos = createAsyncThunk(roverPhotosFetched, async (queryes = {}) => {
  const {
    sol = 1000,
    earthDate = null,
    camera = null,
    page = null,
  } = queryes;

  const url = getRoverUrlQueryes({ sol, page });
  try {
    const data = await fetchHelper(url);
    const { photos } = data;
    // console.log(photos);
    // the data is an array
    return photos;
  } catch (error) {
    console.log(error);
    return 'error';
  }
});

async function fetchHelper(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error in fetch');
  const data = await response.json();
  return data;
}

// eslint-disable-next-line import/prefer-default-export
export { roverFetchManifest, roverFetchPhotos };
