import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Trash } from 'phosphor-react';
import { Context } from '../context/StarwarsProvider';

import styles from '../styles/FilterPainel.module.css';

function NumericFilterCard({ column, comparison, value, id }) {
  const { filterNumeric, setFilterNumeric } = useContext(Context);

  function removeFilter(removeId) {
    const newFilter = [...filterNumeric];
    const indexId = newFilter.findIndex((removeItem) => removeItem.id === removeId);
    newFilter.splice(indexId, 1);
    setFilterNumeric(newFilter);
  }

  return (
    <li
      className={ styles.filter__applied }
      data-testid="filter"
    >
      {`Coluna ${column} ${comparison} que ${value}.`}
      <button
        type="button"
        onClick={ () => removeFilter(id) }
      >
        <Trash />
      </button>
    </li>
  );
}

NumericFilterCard.propTypes = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default NumericFilterCard;
