import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';
import styles from '../styles/FilterPainel.module.css';

const radiosOptions = ['asc', 'desc'];

function InputRadioOrder() {
  const { filterOrder, setFilterOrder } = useContext(Context);
  return (
    <div className={ styles.inputRadio__container }>
      { radiosOptions.map((radio) => (
        <label htmlFor={ radio } key={ radio }>
          <input
            data-test-id={ `column-sort-input-${radio}` }
            type="radio"
            id={ radio }
            name="sort"
            value={ radio }
            checked={ filterOrder.sort === radio }
            onChange={ ({ target }) => setState(target, setFilterOrder) }
          />
          { radio === 'asc' ? 'Ascendente' : 'Descendente' }
        </label>
      )) }
    </div>
  );
}

export default InputRadioOrder;
