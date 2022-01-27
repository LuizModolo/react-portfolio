import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function Provider({ children }) {
  const [test, setTest] = useState([]);

  const ContextObj = {
    test,
    setTest,
  };

  return (
    <Context.Provider value={ ContextObj }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;