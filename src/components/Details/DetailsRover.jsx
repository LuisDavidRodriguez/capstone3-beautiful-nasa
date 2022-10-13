import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './details.module.scss';
import MultipleMediaRender from '../ui/MultipleMediaRender/MultipleMediaRender';

const DetailsRover = (props) => {
  const { data } = props;

  return (
    <>
      <article className={styles.infoRover}>
        <h3>{data.rover.name}</h3>
        <p>
          Id:
          {' '}
          {data.id}
        </p>
        <p>
          Martian Sol:
          {' '}
          {data.sol}
        </p>
        <p>
          Earth Date:
          {' '}
          {data.earth_date}
        </p>
        <p>
          Camera:
          {' '}
          {data.camera.name}
          {' -> '}
          {data.camera.full_name}
        </p>
      </article>
      <div className={styles.mediaContainer}>
        <MultipleMediaRender
          altPicture={data.rover.name}
          url={data.img_src}
          mediaType="image"
        />
      </div>
    </>
  );
};

export default DetailsRover;

DetailsRover.defaultProps = {
  data: {
    id: 0,
    sol: 0,

    camera: {
      id: 0,
      name: '',
      rover_id: 0,
      full_name: '',
    },

    img_src: '',
    earth_date: '',

    rover: {
      id: 0,
      name: '',
      landing_date: '',
      launch_date: '',
      status: '',
    },
  },
};

DetailsRover.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    sol: PropTypes.number,

    camera: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      rover_id: PropTypes.number,
      full_name: PropTypes.string,
    }),

    img_src: PropTypes.string,
    earth_date: PropTypes.string,

    rover: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      landing_date: PropTypes.string,
      launch_date: PropTypes.string,
      status: PropTypes.string,
    }),
  }),
};
