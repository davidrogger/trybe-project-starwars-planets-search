import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';
import styles from '../styles/FilterPainel.module.css';

function FilterByName() {
  const { data, setFilterByName, filterByName, setFilterResult } = useContext(Context);
  useEffect(() => {
    const filterDisable = filterByName.length === 0;
    const applyFilter = data
      .filter(({ name }) => name
        .toLowerCase()
        .includes(filterByName));

    const result = filterDisable ? data : applyFilter;

    setFilterResult(result);
  }, [data, filterByName, setFilterResult]);

  return (
    <input
      type="text"
      data-testid="name-filter"
      className={ styles.input__filter }
      placeholder="Filter by name"
      onChange={ ({ target }) => setFilterByName(target.value) }
    />
  );
}

export default FilterByName;
