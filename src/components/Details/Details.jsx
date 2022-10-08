/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './details.module.scss';
import Modal from '../ui/Modal/Modal';

const APOD = 'APOD';
const ROVER = 'ROVER';
const MEDIA = 'MEDIA';

const detailsType = { APOD, ROVER, MEDIA };

const Details = (props) => {
  const {
    type,
    id,
    handleClose,
    show,
  } = props;

  let children = '';

  if (type === detailsType.APOD) {
    children = <h3>Apod modal</h3>;
  }

  if (type === detailsType.ROVER) {
    children = <h3>Rover modal</h3>;
  }

  if (type === detailsType.MEDIA) {
    children = <h3>Media modal</h3>;
  }

  return (
    <Modal
      handleClose={handleClose}
      show={show}
    >
      {children}
    </Modal>
  );
};

export default Details;
export { detailsType };

Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};