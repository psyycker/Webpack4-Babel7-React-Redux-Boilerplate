import React from 'react';
import PropTypes from 'prop-types';

export default class AppLayout extends React.Component {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
    return (
      <div>
        <h1>
          Increase the counter through Redux :
          {counter}
        </h1>
        <input onClick={() => { increaseCounter(); }} type="submit" value="increase" />
        <input onClick={() => { decreaseCounter(); }} type="submit" value="decrease" />
      </div>
    );
  }
}

AppLayout.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
};
