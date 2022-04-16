import React from 'react';
import styles from '../styles/FilterPainel.module.css';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function FilterPainel() {
  return (
    <div className={ styles.painel__container }>
      <div className={ styles.painel__head }>
        <FilterByName />
      </div>
      <div>
        <FilterByNumericValues />
      </div>
    </div>
  );
}

export default FilterPainel;
