import React from 'react';

// Estilos
import styles from '../styles/FilterPainel.module.css';
import AppliedFilters from './AppliedFilter';

// Componentes
import FilterByNumericValues from './FilterByNumericValues';
import FilterOrder from './FilterOrder';
import RemoveFilterBtn from './RemoveFilterBtn';

function AdvancedFilters() {
  return (
    <div>
      <div className={ styles.advancedFilters__container }>
        <FilterByNumericValues />
        <FilterOrder />
        <RemoveFilterBtn />
      </div>
      <AppliedFilters />
    </div>
  );
}

export default AdvancedFilters;
