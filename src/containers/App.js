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
         title="The TODO Extravaganza"
         iconElementLeft={<IconButton onClick={() => dispatch(ActionCreators.undo())} disabled={this.props.undoDisabled} iconClassName="material-icons">undo</IconButton>}
         iconElementRight={<IconButton onClick={() => dispatch(ActionCreators.redo())} disabled={this.props.redoDisabled} iconClassName="material-icons">redo</IconButton>}
         />
        <div className="body">
          <AddTodo
            onAddSubmit={value => dispatch(addPayment(value))} />
          <PaymentList
            payments={payments}
            onPaymentClick={id => dispatch(delPayment(id))} />
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
  undoDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired
}

function select(state) {
  return {
    undoDisabled: state.payments.past.length === 0,
    redoDisabled: state.payments.future.length === 0,
    payments: state.payments.present
  }
}

export default connect(select)(App)
