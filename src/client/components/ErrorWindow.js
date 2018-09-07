import React from 'react';

import Window from 'components/Window';

class ErrorWindow extends React.Component {
  render() {
    const {open, title, message, explanation, onHideModal} = this.props;

    return (
      <Window title={title} open={open} onHideModal={onHideModal}>
        {message}
        <br />
        <br />
        {explanation}
      </Window>
    );
  }
}

export default ErrorWindow;
