import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AppLayout extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Counter value though Redux : </h1>
        <h2>{counter}</h2>
      </div>
    );
  }
}

AppLayout.propTypes = {
  counter: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    counter: state.counter.value,
  };
}

export default connect(mapStateToProps)(AppLayout);
