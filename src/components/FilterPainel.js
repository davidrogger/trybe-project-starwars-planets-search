import React from 'react';
import styles from '../styles/FilterPainel.module.css';
import FilterByName from './FilterByName';

import AdvancedFilters from './AdvancedFilters';

function FilterPainel() {
  return (
    <div className={ styles.painel__container }>
      <FilterByName />
      <AdvancedFilters />
    </div>
  );
}

export default FilterPainel;
