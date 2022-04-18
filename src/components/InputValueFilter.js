import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

function InputValueFilter() {
  const { filterByNumericValue, setFilterByNumericValue } = useContext(Context);
  return (
    <input
      type="number"
      data-testid="value-filter"
      name="value"
      value={ filterByNumericValue.value }
      onChange={ ({ target }) => setState(target, setFilterByNumericValue) }
    />
  );
}

export default InputValueFilter;
