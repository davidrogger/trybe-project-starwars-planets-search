import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const { Provider } = Context;

const InitialNumericValue = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState(InitialNumericValue);
  const [filterNumeric, setfilterNumeric] = useState([]);
  const [filterNumericResult, setfilterNumericResult] = useState([]);
  const [filterResult, setfilterResult] = useState([]);
  const [filterOptions, setfilterOptions] = useState([]);

  function comparisonType(column, comparison, value) {
    const dataNumber = Number(column);
    const valueNumber = Number(value);
    if (!dataNumber) return false;
    switch (comparison) {
    case 'maior que':
      return dataNumber > valueNumber;
    case 'menor que':
      return dataNumber <= valueNumber;
    default:
      return dataNumber === valueNumber;
    }
  }

  useEffect(() => {
    let filter = [];
    filterNumeric.forEach(({ column, comparison, value }) => {
      filter = filterResult
        .filter((item) => comparisonType(item[column], comparison, value));
    });
    setfilterNumericResult(filter);
  }, [filterNumeric, filterResult]);

  useEffect(() => {
    const alreadyFiltered = filterNumeric.map(({ column }) => column);
    setfilterOptions(alreadyFiltered);
  }, [filterNumeric]);

  const contextValue = {
    data,
    setData,
    filterResult,
    setfilterResult,
    filterByName,
    setFilterByName,
    filterByNumericValue,
    setFilterByNumericValue,
    filterNumeric,
    setfilterNumeric,
    filterNumericResult,
    setfilterNumericResult,
    filterOptions,
  };

  return (
    <Provider value={ contextValue }>
      { children }
    </Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node, // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
}.isRequired;

export { StarwarsProvider, Context };
