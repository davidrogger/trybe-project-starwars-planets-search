import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

const radiosOptions = ['asc', 'desc'];

function InputRadioOrder() {
  const { filterOrder, setFilterOrder } = useContext(Context);
  return (
    <div>
      { radiosOptions.map((radio) => (
        <input
          key={ radio }
          data-test-id={ `column-sort-input-${radio}` }
          type="radio"
          id={ radio }
          name="sort"
          value={ radio }
          checked={ filterOrder.sort === radio }
          onChange={ ({ target }) => setState(target, setFilterOrder) }
        />
      )) }
    </div>
  );
}

export default InputRadioOrder;
