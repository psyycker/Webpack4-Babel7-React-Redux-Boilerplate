import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import AppBar from 'containers/AppBar';
import AppMenu from 'containers/AppMenu';
import ModalsLayout from 'containers/ModalsLayout/ModalsLayout';
import NotFound from 'containers/NotFound';
import ServersPage from 'containers/ServersPage/ServersPage';
import ProgressBar from 'components/ProgressBar';

export class AppLayout extends React.Component {
  render() {
    const {loading} = this.props;

    return (
      <div>
        Hello
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(AppLayout);
