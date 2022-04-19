import React from 'react';
import PropTypes from 'prop-types';

function InputSelect({ testeId, name, value, onChange, options }) {
  return (
    <select
      data-testid={ testeId }
      name={ name }
      value={ value }
      onChange={ onChange }
    >
      { options.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      )) }
    </select>
  );
}

InputSelect.propTypes = {
  testeId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default InputSelect;
