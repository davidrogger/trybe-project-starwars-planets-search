import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import styles from '../styles/FilterPainel.module.css';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function FilterPainel() {
  const { setFilterNumeric } = useContext(Context);

  return (
    <div className={ styles.painel__container }>
      <FilterByName />
      <FilterByNumericValues />

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterNumeric([]) }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default FilterPainel;
