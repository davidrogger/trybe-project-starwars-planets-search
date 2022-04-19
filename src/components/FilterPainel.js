import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import styles from '../styles/FilterPainel.module.css';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import FilterOrder from './FilterOrder';

function FilterPainel() {
  const { setFilterNumeric } = useContext(Context);

  return (
    <div className={ styles.painel__container }>
      <FilterByName />
      <div className={ styles.advancedFilters__container }>
        <FilterByNumericValues />
        <FilterOrder />
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setFilterNumeric([]) }
        >
          Remover todas filtragens
        </button>
      </div>
    </div>
  );
}

export default FilterPainel;
