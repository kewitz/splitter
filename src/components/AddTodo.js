import React, { Component, PropTypes } from 'react'
import { TextField, FlatButton } from 'material-ui/lib';

export default class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const node = this.refs.pay
    const value = node.getValue().trim()
    if (value) {
      this.props.onAddSubmit(value)
      node.setValue('');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextField ref="pay" style={{width: "100%"}} hintText="0.00"/><br/>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}
