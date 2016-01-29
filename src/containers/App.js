import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { AppBar, FontIcon, IconButton } from 'material-ui/lib';

import { addPayment, delPayment } from '../actions'
import AddTodo from '../components/AddTodo'
import PaymentList from '../components/PaymentList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    const { dispatch, payments } = this.props
    return (
      <div>
        <AppBar
        title="Splitter"
        iconElementLeft={<IconButton iconClassName="material-icons" onClick={this.props.onClick}>attach_money</IconButton>}
        />
        <div className="body">
          <AddTodo
            onAddSubmit={value => dispatch(addPayment(value))} />
          <PaymentList payments={payments} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  payments: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

function select(state) {
  return {
    payments: state.payments
  }
}

export default connect(select)(App)
