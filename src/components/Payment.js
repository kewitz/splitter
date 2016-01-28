import React, { Component, PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';


export default class Payment extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar>{this.props.id}</Avatar>}
        onClick={this.props.onClick}
        primaryText={this.props.value}
      />
    )
  }
}

Payment.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
