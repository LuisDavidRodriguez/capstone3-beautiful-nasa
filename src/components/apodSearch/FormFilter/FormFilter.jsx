import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const FormFilter = (props) => {
  const { reportInputs, buttonHandler1, buttonText1 } = props;
  const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const onChanegeManager = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'dateInput') {
      setDateInput(value);
      reportInputs({ date: value, text: '' });
    }

    if (name === 'textInput') {
      setTextInput(value);
      reportInputs({ text: value, date: '' });
    }
  };

  return (
    <form>
      <input name="textInput" type="text" placeholder="search by text in this period" onChange={onChanegeManager} value={textInput} />
      <input name="dateInput" type="date" onChange={onChanegeManager} value={dateInput} />
      <button type="button" onClick={buttonHandler1}>{buttonText1}</button>
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
