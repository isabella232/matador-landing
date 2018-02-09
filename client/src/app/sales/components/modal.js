import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleCloseAgree = () => {
    this.setState({open: false});
    this.props.handlePoly();
  };

  handleCloseDisagree = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="I Do not agree"
        primary={true}
        onClick={this.handleCloseDisagree}
      />,
      <FlatButton
        label="I agree"
        primary={true}
        disabled={false}
        onClick={this.handleCloseAgree}
      />,
    ];

    return (
      <div>
        <FlatButton label="read the disclaimer" onClick={this.handleOpen} style={{'color':'blue'}} />
        <Dialog
          title="Disclaimer"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        Polymath will have the rights to include your STO in marketing materials. Polymath will not be held responsible for your compliance in STO.
        </Dialog>
      </div>
    );
  }
}