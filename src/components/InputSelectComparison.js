import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

const OPTIONS = [
  'maior que',
  'menor que',
  'igual a',
];

function InputSelectComparison() {
  const { filterByNumericValue, setFilterByNumericValue } = useContext(Context);
  return (
    <select
      data-testid="comparison-filter"
      name="comparison"
      value={ filterByNumericValue.comparison }
      onChange={ ({ target }) => setState(
        target, setFilterByNumericValue, filterByNumericValue,
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

export default InputSelectComparison;
