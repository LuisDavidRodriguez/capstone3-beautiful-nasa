import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.displayBlock}`
    : `${styles.modal} ${styles.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        {children}
        <button type="button" onClick={handleClose}>
          Back
        </button>
      </section>
    </div>
  );
};

Modal.defaultProps = {
  children: 'Childrens here',
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default Modal;
