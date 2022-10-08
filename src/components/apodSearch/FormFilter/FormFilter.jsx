import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './formFilter.module.scss';

const FormFilter = (props) => {
  const { reportInputs, buttonHandler1, buttonText1 } = props;
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [selectInput, setSelectInput] = useState('All');

  const onChanegeManager = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'dateInput') {
      setDateInput(value);
      reportInputs({ date: value, text: '', mediaType: '' });
    }

    if (name === 'textInput') {
      setTextInput(value);
      reportInputs({ text: value, date: '', mediaType: '' });
    }

    if (name === 'selectInput') {
      setSelectInput(value);
      reportInputs({ text: '', date: '', mediaType: value });
    }
  };

  const buttonClick = () => {
    setTextInput('');
    setDateInput('');
    setSelectInput('All');
    buttonHandler1();
  };

  return (
    <form className={styles.form}>
      <input name="textInput" type="text" placeholder="search by text in this period" onChange={onChanegeManager} value={textInput} />
      <input name="dateInput" type="date" onChange={onChanegeManager} value={dateInput} />
      <select className={styles.selector} value={selectInput} name="selectInput" onChange={onChanegeManager}>
        <option value="All">All</option>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
      <button className="btn btn-outline-light" type="button" onClick={buttonClick}>{buttonText1}</button>
    </form>
  );
};

FormFilter.defaultProps = {
  buttonText1: 'default text1',
};

FormFilter.propTypes = {
  reportInputs: PropTypes.func.isRequired,
  buttonHandler1: PropTypes.func.isRequired,
  buttonText1: PropTypes.string,
};

export default FormFilter;
