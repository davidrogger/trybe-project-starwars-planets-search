import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getStarWarsAPI from '../services/starwarsAPI';

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
  const [filterResult, setfilterResult] = useState([]);
  const [filterByNumericValue, setFilterByNumericValue] = useState(InitialNumericValue);

  useEffect(() => {
    const getStarwarsPlanets = async () => {
      const { results } = await getStarWarsAPI('planets');
      setData(results);
      setfilterResult(results);
    };
    getStarwarsPlanets();
  }, []);

  useEffect(() => {
    const filterDisable = filterByName.length === 0;
    const applyFilter = data
      .filter(({ name }) => name
        .toLowerCase()
        .includes(filterByName));

    const result = filterDisable ? data : applyFilter;

    setfilterResult(result);
  }, [data, filterByName]);

  const contextValue = {
    data,
    filterResult,
    setFilterByName,
    filterByNumericValue,
    setFilterByNumericValue,
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
