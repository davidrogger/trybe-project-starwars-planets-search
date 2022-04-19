import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';
import InputSelect from './InputSelect';

function InputSelectOrder() {
  const { options, filterOrder, setFilterOrder } = useContext(Context);
  return (
    <InputSelect
      testeId="column-sort"
      name="column"
      value={ filterOrder.column }
      onChange={ ({ target }) => setState(
        target, setFilterOrder,
      ) }
      options={ options }
    />
  );
}

export default InputSelectOrder;
