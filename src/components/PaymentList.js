import React, { Component, PropTypes } from 'react'

import Payment from './Payment'
import Footer from './Footer'
import { makeColors } from '../actions'

import Divider from 'material-ui/lib/divider';
import List from 'material-ui/lib/lists/list';
import FontIcon from 'material-ui/lib/font-icon';
import ListItem from 'material-ui/lib/lists/list-item';

export default class PaymentList extends Component {
  render() {
    return (
      <div>
        <List subheader="Payments">
          {this.props.payments.map(pay =>
            <Payment {...pay} key={pay.id} color={makeColors(pay.id)} />
          )}
        </List>
        <Divider inset={true}/>
        <Footer payments={this.props.payments}/>
      </div>
    )
  }
}

PaymentList.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired
  }).isRequired).isRequired
}
