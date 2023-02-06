import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

// Estilos
import styles from '../styles/FilterPainel.module.css';

// Componentes
import FilterByNumericValues from './FilterByNumericValues';
import FilterOrder from './FilterOrder';

function AdvancedFilters() {
  const { setFilterNumeric } = useContext(Context);
  return (
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
  );
}

export default AdvancedFilters;
