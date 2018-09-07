import React from 'react';
import {NavLink} from 'react-router-dom';
import {lightGreen600} from 'material-ui/styles/colors';

import FlatButton from 'components/FlatButton';

class NavigationButton extends React.Component {

  render() {
    const {to, label, ...props} = this.props;
    const activeStyle = {backgroundColor: lightGreen600};
    const buttonStyle = {color: 'white', marginLeft: 0, marginRight: 1};

    return (
      <NavLink to={to} activeStyle={activeStyle} {...props}>
        <FlatButton label={label} style={buttonStyle}>
          {React.Children.toArray(this.props.children)}
        </FlatButton>
      </NavLink>
    );
  }
}

export default NavigationButton;
