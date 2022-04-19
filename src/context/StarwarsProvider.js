import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const { Provider } = Context;

const initialNumericValue = {
  column: '',
  comparison: 'maior que',
  value: '0',
};

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState(initialNumericValue);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [filterNumericResult, setFilterNumericResult] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  const contextValue = {
    data,
    setData,
    filterResult,
    setFilterResult,
    filterByName,
    setFilterByName,
    filterByNumericValue,
    setFilterByNumericValue,
    filterNumeric,
    setFilterNumeric,
    filterNumericResult,
    setFilterNumericResult,
    filterOptions,
    setFilterOptions,
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
