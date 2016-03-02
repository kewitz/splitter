import React, { Component, PropTypes } from 'react'
import { TextField, FlatButton, RaisedButton } from 'material-ui/lib';

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
          <TextField ref="pay" style={{width: "100%"}} hintText="0.00"/><br/>
          <RaisedButton label="Add" style={{width: "100%"}} secondary={true} onClick={(e) => this.handleSubmit(e)}/>
          <br/>
        </form>
      </div>
    )
  }
}

AddPayment.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}
