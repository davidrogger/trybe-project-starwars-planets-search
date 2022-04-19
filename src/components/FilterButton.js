import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/StarwarsProvider';

function FilterButton() {
  const { filterByNumericValue, setFilterNumeric, filterOptions } = useContext(Context);

  function numericFilter() {
    const { column, comparison, value } = filterByNumericValue;

    const hexadecimal = 16;
    const id = `id${Math.random().toString(hexadecimal).slice(2)}`; // https://stackoverflow.com/questions/3231459/create-unique-id-with-javascript
    const newNumericFilter = { id, column, comparison, value };

    setFilterNumeric((prevState) => ([
      ...prevState,
      newNumericFilter,
    ]));
  }

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ numericFilter }
      disabled={ filterOptions.length === 0 }
    >
      Filtrar
    </button>
  );
}

FilterButton.propTypes = {
  testId: PropTypes.string,
}.isRequired;

export default FilterButton;
