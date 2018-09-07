import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from '../components/Header/Header';

export class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter value though Redux : </h1>
        <h2>{this.props.counter}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.value
  };
}

export default connect(mapStateToProps)(AppLayout);
