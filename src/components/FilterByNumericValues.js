import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import FilterButton from './FilterButton';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';
import InputValueFilter from './InputValueFilter';
import styles from '../styles/FilterPainel.module.css';
import NumericFilterCard from './NumericFilterCard';

function FilterByNumericValues() {
  const { filterNumeric } = useContext(Context);
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
