import React from 'react';

import styles from '../styles/FilterPainel.module.css';

import FilterButton from './FilterButton';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';
import InputValueFilter from './InputValueFilter';

function FilterColumnInputs() {
  return (
    <div className={ styles.numericValues__input }>
      <InputSelectColumn />
      <InputSelectComparison />
      <InputValueFilter />
      <FilterButton />
    </div>
  );
}

export default FilterColumnInputs;
