import React from 'react';

// Estilos
import styles from '../styles/FilterPainel.module.css';

// Componentes
import FilterByNumericValues from './FilterByNumericValues';
import FilterOrder from './FilterOrder';
import RemoveFilterBtn from './RemoveFilterBtn';

function AdvancedFilters() {
  return (
    <div className={ styles.advancedFilters__container }>
      <FilterByNumericValues />
      <FilterOrder />
      <RemoveFilterBtn />
    </div>
  );
}

export default AdvancedFilters;
