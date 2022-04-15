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
  children: PropTypes.node, // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
}.isRequired;

export { StarwarsProvider, Context };
