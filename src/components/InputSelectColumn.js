import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

const OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function InputSelectColumn() {
  const { filterByNumericValue, setFilterByNumericValue } = useContext(Context);
  return (
    <select
      data-testid="column-filter"
      name="column"
      value={ filterByNumericValue.column }
      onChange={ ({ target }) => setState(
        target, setFilterByNumericValue,
      ) }
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
