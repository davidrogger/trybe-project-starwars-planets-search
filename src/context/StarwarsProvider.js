import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getStarWarsAPI from '../services/starwarsAPI';

const Context = createContext();

const { Provider } = Context;

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStarwarsPlanets = async () => {
      const { results } = await getStarWarsAPI('planets');
      setData(results);
    };
    getStarwarsPlanets();
  }, []);

  const contextValue = { data };
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
