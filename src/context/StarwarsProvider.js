import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const { Provider } = Context;

function StarwarsProvider({ children }) {
  return (
    <Provider>
      { children }
    </Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export { StarwarsProvider, Context };
