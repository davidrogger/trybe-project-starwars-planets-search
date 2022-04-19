import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const { Provider } = Context;

const initialOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const initialNumericValue = {
  column: '',
  comparison: 'maior que',
  value: '0',
};

const initialOrderValue = {
  column: 'population',
  sort: 'asc',
};

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValue, setFilterByNumericValue] = useState(initialNumericValue);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [filterNumericResult, setFilterNumericResult] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [options, setOptions] = useState(initialOptions);
  const [filterOrder, setFilterOrder] = useState(initialOrderValue);

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
    options,
    setOptions,
    filterOrder,
    setFilterOrder,
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
