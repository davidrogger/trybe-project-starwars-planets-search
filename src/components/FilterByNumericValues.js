import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';
import FilterButton from './FilterButton';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';
import InputValueFilter from './InputValueFilter';
import styles from '../styles/FilterPainel.module.css';
import NumericFilterCard from './NumericFilterCard';

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
      <div className={ styles.numericValues__input }>
        <InputSelectColumn />
        <InputSelectComparison />
        <InputValueFilter />
        <FilterButton />
      </div>
      <div>
        <ul>
          { filterNumeric.map(({ column, comparison, value, id }) => (
            <NumericFilterCard
              key={ id }
              id={ id }
              column={ column }
              comparison={ comparison }
              value={ value }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterByNumericValues;
