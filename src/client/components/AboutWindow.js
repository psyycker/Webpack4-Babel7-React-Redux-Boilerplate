import React from 'react';
import Window from 'components/Window';

class AboutWindow extends React.Component {
  render() {
    const {open, onHideModal} = this.props;

    return (
      <Window title="About" open={open} onHideModal={onHideModal}>
        Here is about window.
      </Window>
    );
  }
}

export default AboutWindow;
