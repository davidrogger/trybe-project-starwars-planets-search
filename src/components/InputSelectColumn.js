import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

const initialOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function InputSelectColumn() {
  const {
    filterNumeric,
    filterByNumericValue,
    setFilterByNumericValue,
    filterOptions,
    setFilterOptions,
  } = useContext(Context);

  function selectedOption(option) {
    setFilterByNumericValue((prevState) => ({
      ...prevState,
      column: option,
    }));
  }

  useEffect(() => {
    if (filterNumeric.length !== 0) {
      const alreadyFiltered = filterNumeric.map((({ column }) => column));
      const removeOptions = initialOptions
        .filter((option) => alreadyFiltered
          .every((filtered) => filtered !== option));
      console.log(removeOptions);
      setFilterOptions(removeOptions);
      selectedOption(removeOptions[0]);
    } else {
      setFilterOptions(initialOptions);
      selectedOption(initialOptions[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterNumeric]);

  return (
    <select
      data-testid="column-filter"
      name="column"
      value={ filterByNumericValue.column }
      onChange={ ({ target }) => setState(
        target, setFilterByNumericValue,
      ) }
    >
      { filterOptions.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      )) }
    </select>
  );
}

export default InputSelectColumn;
