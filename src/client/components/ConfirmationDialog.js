import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'components/FlatButton';

class ConfirmationDialog extends React.Component {
  render() {
    const {open, text, onHideModal} = this.props;
    const onOk = () => (this.props.onOk ? this.props.onOk(onHideModal) : onHideModal());
    const onCancel = () => (this.props.onCancel ? this.props.onCancel(onHideModal) : onHideModal());

    const actions = [
      <FlatButton label="Cancel" onClick={onCancel} />,
      <RaisedButton label="Ok" onClick={onOk} primary keyboardFocused />
    ];

    return (
      <Dialog title="Confirmation" actions={actions} open={open} onRequestClose={onHideModal} modal>
        {text}
      </Dialog>
    );
  }
}

export default ConfirmationDialog;
