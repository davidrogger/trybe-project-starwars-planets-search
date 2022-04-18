import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';
import setState from '../helpers/setState';

const allOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function InputSelectColumn() {
  const [options, setOptions] = useState([]);
  const {
    filterByNumericValue,
    setFilterByNumericValue,
    // filterOptions,
  } = useContext(Context);

  useEffect(() => {
    setOptions(allOptions);
  }, []);

  // useEffect(() => {
  //   const newOptions = allOptions
  //     .filter((option) => filterOptions
  //       .some((item) => {
  //         console.log(option !== item);
  //         return option !== item;
  //       }));
  //   console.log(allOptions);
  //   console.log(filterOptions);
  //   console.log(newOptions);
  // }, [filterOptions]);

  return (
    <select
      data-testid="column-filter"
      name="column"
      value={ filterByNumericValue.column }
      onChange={ ({ target }) => setState(
        target, setFilterByNumericValue,
      ) }
    >
      { options.map((option) => (
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
