import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

function InputFilter() {
  const { setFilterByName } = useContext(Context);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => setFilterByName(target.value) }
    />
  );
}

export default InputFilter;
