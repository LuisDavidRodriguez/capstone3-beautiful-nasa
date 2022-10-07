import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './mediaSearch.module.scss';

const MediaSearch = (props) => {
  const { reportInputs } = props;
  const [textInput, setTextInput] = useState('');
  const [selectInput, setSelectInput] = useState('All');

  const onChanegeManager = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    if (name === 'textInput') {
      setTextInput(value);
      reportInputs({ text: value, mediaType: '' });
    }

    if (name === 'selectInput') {
      setSelectInput(value);
      reportInputs({ text: '', mediaType: value });
    }
  };

  const buttonClick = () => {
    setTextInput('');
    setSelectInput('All');
  };

  return (
    <form className={styles.form}>
      <input name="textInput" type="text" placeholder="Search for..." onChange={onChanegeManager} value={textInput} />
      <button type="button" onClick={buttonClick}>Search</button>
      <select value={selectInput} name="selectInput" onChange={onChanegeManager}>
        <option value="All">All</option>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
    </form>
  );
};

MediaSearch.defaultProps = {
};

MediaSearch.propTypes = {
  reportInputs: PropTypes.func.isRequired,
};

export default MediaSearch;
