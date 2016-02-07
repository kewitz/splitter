import React, { Component, PropTypes } from 'react';
import { solveActions, makeColors } from '../actions';

import List from 'material-ui/lib/lists/list';
import FontIcon from 'material-ui/lib/font-icon';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import Divider from 'material-ui/lib/divider';

export default class Footer extends Component {
  render() {
    let payments = this.props.payments.length;
    let total = 0, avg = 0;
    let actions = [];
    if (payments > 0) {
      total = this.props.payments.map(pay => pay.value).reduce((prev, curr) => prev + curr);
      avg = total/payments;
    }
    if (payments > 1) actions = solveActions(this.props.payments);

    return (
      <List subheader="Summary">
        <ListItem
          leftIcon={<FontIcon className="material-icons">done</FontIcon>}
          primaryText={"$ "+ total.toFixed(2) + " total."}
          secondaryText={"$ " + avg.toFixed(2) + " each."}
          />
        {actions.map((a, i) =>
          <ListItem
          key={i}
          leftAvatar={<Avatar backgroundColor={makeColors(a.from)}>{a.from}</Avatar>}
          rightAvatar={<Avatar backgroundColor={makeColors(a.to)}>{a.to}</Avatar>}
          primaryText={ "pays $ "+ a.amount.toFixed(2) + " to " }
          style={{textAlign: "center"}}
          />
        )}
      </List>
    )
  }
}

Footer.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired
  }).isRequired).isRequired
}
