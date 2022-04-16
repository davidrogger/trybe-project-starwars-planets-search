import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import styles from '../styles/FilterPainel.module.css';

function FilterByName() {
  const { setFilterByName } = useContext(Context);
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
