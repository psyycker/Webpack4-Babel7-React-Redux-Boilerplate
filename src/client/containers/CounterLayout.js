import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import {increaseCounter, decreaseCounter} from '../redux/actions/counter';

export class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Increase the counter through Redux : {this.props.counter}</h1>
        <input onClick={() => {this.props.increaseCounter()}} type="submit" value="increase" />
        <input onClick={() => {this.props.decreaseCounter()}} type="submit" value="decrease" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.value
  };
}

function mapActionsToProps(dispatch) {
  return {
    increaseCounter() {
      dispatch(increaseCounter());
    },
    decreaseCounter() {
      dispatch(decreaseCounter());
    }
  };
}

export default connect(mapStateToProps, mapActionsToProps)(AppLayout);
