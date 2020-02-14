import React from 'react';
import PropTypes from 'prop-types';

export default function CounterIncrementer(props) {
  const { counter, increaseCounter, decreaseCounter } = props;
  return (
    <div>
      <h1>Increase the counter through Redux :{counter}</h1>
      <input
        onClick={() => {
          increaseCounter();
        }}
        type="submit"
        value="increase"
      />
      <input
        onClick={() => {
          decreaseCounter();
        }}
        type="submit"
        value="decrease"
      />
    </div>
  );
}

CounterIncrementer.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired
};
