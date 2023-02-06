import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

import NumericFilterCard from './NumericFilterCard';

import styles from '../styles/FilterPainel.module.css';

function AppliedFilters() {
  const {
    filterNumeric,
  } = useContext(Context);

  return (
    <div>
      <ul
        className={ styles.applied_filters_container }
      >
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
  );
}

export default AppliedFilters;
