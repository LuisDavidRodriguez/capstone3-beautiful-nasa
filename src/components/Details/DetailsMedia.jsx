import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './details.module.scss';
import MultipleMediaRender from '../ui/MultipleMediaRender/MultipleMediaRender';

const DetailsMedia = (props) => {
  const { data } = props;

  return (
    <>
      <article className={styles.infoContainer}>
        <p>
          Center:
          {' '}
          {data.data[0].center}
        </p>
        <p>
          NASA ID:
          {' '}
          {data.data[0].nasa_id}
        </p>
        <h3>{data.data[0].title}</h3>
        <p>
          {data.data[0].description}
        </p>
      </article>
      <MultipleMediaRender
        altPicture={data.data[0].title}
        url={data.links[0].href}
        mediaType={data.links[0].render}
      />
    </>
  );
};

export default DetailsMedia;

DetailsMedia.defaultProps = {
  data: {
    href: 'https://images-assets.nasa.gov/image/PIA24566/collection.json',

    data: [
      {
        center: 'JPL',
        title: 'Radar Observations of Asteroid 4660 Nereus',
        nasa_id: 'PIA24566',
        media_type: 'image',

        keywords: [
          'Deep Space Network',
          'Asteroid',
        ],

        date_created: '2022-01-10T00:00:00Z',
        description_508: "These images and animation represent NASA radar observations of 4660 Nereus on December 10, 2021, before the asteroid's close approach on December 11, when it came within 2.5 million miles (4 million kilometers) of Earth.",
        secondary_creator: 'NASA/JPL-Caltech',
        description: 'These images and',
      },
    ],

    links: [
      {
        href: 'https://images-assets.nasa.gov/image/PIA24566/PIA24566~thumb.jpg',
        rel: 'preview',
        render: 'image',
      },
    ],
  },
};

DetailsMedia.propTypes = {
  data: PropTypes.shape({
    href: PropTypes.string,

    data: PropTypes.arrayOf(
      PropTypes.shape({
        center: PropTypes.string,
        title: PropTypes.string,
        nasa_id: PropTypes.string,
        media_type: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
        date_created: PropTypes.string,
        description_508: PropTypes.string,
        secondary_creator: PropTypes.string,
        description: PropTypes.string,
      }),
    ),

    // eslint-disable-next-line react/forbid-prop-types
    links: PropTypes.arrayOf(PropTypes.object),
  }),
};
