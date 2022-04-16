import React from 'react';
import FilterButton from './FilterButton';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';
import InputValueFilter from './InputValueFilter';

function FilterByNumericValues() {
  return (
    <div>
      <InputSelectColumn />
      <InputSelectComparison />
      <InputValueFilter />
      <FilterButton />
    </div>
  );
}

export default FilterByNumericValues;
