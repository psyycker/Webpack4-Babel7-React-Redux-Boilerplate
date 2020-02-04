import React from 'react';
import PropTypes from 'prop-types';

export default function CounterDisplay(props) {
  const { counter } = props;
  return (
    <div>
      <h1>Counter value though Redux : </h1>
      <h2>{counter}</h2>
    </div>
  );
}

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired,
};
