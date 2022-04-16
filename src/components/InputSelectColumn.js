import React from 'react';

const OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function InputSelectColumn() {
  return (
    <select
      data-testid="column-filter"
    >
      { OPTIONS.map((option) => (
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

export default InputSelectColumn;
