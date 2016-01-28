import React, { Component, PropTypes } from 'react'
import List from 'material-ui/lib/lists/list';
import Payment from './Payment'

export default class PaymentList extends Component {
  render() {
    return (
      <List>
      {this.props.payments.map(pay =>
          <Payment {...pay}
                key={pay.id}
                onClick={() => this.props.onPaymentClick(pay.id)} />
        )}
      </List>
    )
  }
}

PaymentList.propTypes = {
  onPaymentClick: PropTypes.func.isRequired,
  payments: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired).isRequired
}
