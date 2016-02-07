import React, { Component, PropTypes } from 'react'
import { TextField, FlatButton } from 'material-ui/lib';

export default class AddTodo extends Component {
  handleSubmit(e) {
    if (e) e.preventDefault();
    const node = this.refs.pay;
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
          Add those billz!
          <TextField ref="pay" style={{width: "100%"}} hintText="0.00"/><br/>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}
