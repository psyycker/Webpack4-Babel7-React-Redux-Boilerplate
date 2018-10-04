import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increaseCounter as increaseCounterAction, decreaseCounter as decreaseCounterAction } from '../redux/actions/counter';

export class AppLayout extends React.Component {
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

function mapStateToProps(state) {
  return {
    counter: state.counter.value,
  };
}

function mapActionsToProps(dispatch) {
  return {
    increaseCounter() {
      dispatch(increaseCounterAction());
    },
    decreaseCounter() {
      dispatch(decreaseCounterAction());
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(AppLayout);
