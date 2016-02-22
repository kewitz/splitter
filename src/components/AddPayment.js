import React, { Component, PropTypes } from 'react'
import { TextField, FlatButton, FontIcon, IconButton } from 'material-ui/lib';

export default class AddPayment extends Component {
  handleSubmit(e) {
    if (e) e.preventDefault();
    const node = this.refs.pay;90
    const val = parseFloat(node.getValue().trim().replace(",","."), 10);
    if (val.toString() != "NaN") {
      this.props.onAddSubmit(val);
    }
    node.setValue('');
    node.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          Add those billz!<br/>
          <TextField ref="pay" style={{width: "90%"}} hintText="0.00"/>
          <IconButton iconClassName="material-icons" style={{width: "10%"}} onClick={(e) => this.handleSubmit(e)} tooltip="Add Payment">add_circle</IconButton>
        </form>
      </div>
    )
  }
}

AddPayment.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}
