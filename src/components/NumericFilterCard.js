import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/StarwarsProvider';

function NumericFilterCard({ column, comparison, value, id }) {
  const { filterNumeric, setFilterNumeric } = useContext(Context);

  function removeFilter(removeId) {
    const newFilter = [...filterNumeric];
    const indexId = newFilter.findIndex((removeItem) => removeItem.id === removeId);
    newFilter.splice(indexId, 1);
    setFilterNumeric(newFilter);
  }

  return (
    <li data-testid="filter">
      {`Coluna ${column} ${comparison} que ${value}.`}
      <button
        type="button"
        onClick={ () => removeFilter(id) }
      >
        X
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
