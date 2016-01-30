import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { delPayment } from '../actions';

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';


// TODO: Usar HUE para distribuir as cores do espectro para todos os usuários.
// const colorArray = 'red pink purple deepPurple lightBlue indigo cyan teal green lime'
//   .split(' ').map((x) => x+'A200')

class Payment extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar backgroundColor={this.props.color} icon={<FontIcon className="material-icons">face</FontIcon>} />}
        rightIcon={<FontIcon className="material-icons" onClick={this.props.onClick}>remove_circle</FontIcon>}
        primaryText={"$ "+this.props.value.toFixed(2)}
      />
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(delPayment(ownProps.id))
})

Payment.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(Payment)
// onPaymentClick={id => dispatch(delPayment(id))} />
