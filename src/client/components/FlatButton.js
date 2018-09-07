import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class StyledFlatButton extends React.Component {
  render() {
    const style = Object.assign({}, {lineHeight: '33px'}, this.props.style);

    return (
      <FlatButton {...this.props} style={style}>
        {React.Children.toArray(this.props.children)}
      </FlatButton>
    );
  }
}

export default StyledFlatButton;
