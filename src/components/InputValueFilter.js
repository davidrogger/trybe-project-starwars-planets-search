import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

function InputValueFilter() {
  const { filterByNumericValue } = useContext(Context);
  return (
    <input
      type="number"
      data-testid="value-filter"
      value={ filterByNumericValue.value }
    />
  );
}

export default InputValueFilter;
