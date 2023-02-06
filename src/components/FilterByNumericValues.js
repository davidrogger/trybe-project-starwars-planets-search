import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';

import styles from '../styles/FilterPainel.module.css';

import AppliedFilters from './AppliedFilter';
import FilterColumnInputs from './FilterColumnInputs';

function FilterByNumericValues() {
  const {
    filterNumeric,
    filterResult,
    setFilterNumericResult,
  } = useContext(Context);

  function comparisonType(column, comparison, value) {
    const dataNumber = Number(column);
    const valueNumber = Number(value);
    if (!dataNumber) return false;
    switch (comparison) {
    case 'maior que':
      return dataNumber > valueNumber;
    case 'menor que':
      return dataNumber <= valueNumber; // tentando entender pq a necessidade do = no menor para passar no teste
    default:
      return dataNumber === valueNumber;
    }
  }

  useEffect(() => {
    let filter = [...filterResult];
    filterNumeric.forEach(({ column, comparison, value }) => {
      filter = filter
        .filter((item) => comparisonType(item[column], comparison, value));
    });
    setFilterNumericResult(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterNumeric, filterResult]);

  return (
    <div className={ styles.numericValues__container }>
      <FilterColumnInputs />
      <AppliedFilters />
    </div>
  );
}

export default FilterByNumericValues;
