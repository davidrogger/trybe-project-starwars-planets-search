import React from 'react';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';

function FilterByNumericValues() {
  return (
    <div>
      <InputSelectColumn />
      <InputSelectComparison />
    </div>
  );
}

export default FilterByNumericValues;
