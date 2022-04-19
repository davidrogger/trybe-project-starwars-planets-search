import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';
import InputSelect from './InputSelect';

function InputSelectColumn() {
  const {
    filterNumeric,
    filterByNumericValue,
    setFilterByNumericValue,
    filterOptions,
    setFilterOptions,
    options,
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
      const removeOptions = options
        .filter((option) => alreadyFiltered
          .every((filtered) => filtered !== option));
      setFilterOptions(removeOptions);
      selectedOption(removeOptions[0]);
    } else {
      setFilterOptions(options);
      selectedOption(options[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterNumeric]);

  return (
    <InputSelect
      testeId="column-filter"
      name="column"
      value={ filterByNumericValue.column }
      onChange={ ({ target }) => setState(
        target, setFilterByNumericValue,
      ) }
      options={ filterOptions }
    />
  );
}

export default InputSelectColumn;
