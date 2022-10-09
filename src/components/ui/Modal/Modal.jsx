import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const Modal = ({ handleClose, show, children }) => {
  const cx = classNames.bind(styles);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';

  let showHideClassName = cx({
    modal: true,
    displayNone: true,
  });

  if (show) {
    showHideClassName = cx({
      modal: true,
      displayBlock: true,
    });

    body.style.overflow = 'hidden';
  }

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        {children}
        <button className="btn btn-info" type="button" onClick={handleClose}>
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
  children: PropTypes.node,
};

export default Modal;
