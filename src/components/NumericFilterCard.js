import React from 'react';
import PropTypes from 'prop-types';

function NumericFilterCard({ column, comparison, value, id }) {
  return (
    <li>
      {`Coluna ${column} ${comparison} que ${value}, key ${id}`}
    </li>
  );
}

NumericFilterCard.propTypes = {
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default NumericFilterCard;
