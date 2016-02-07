import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { AppBar, FontIcon, IconButton } from 'material-ui/lib';

import { addPayment, delPayment } from '../actions'
import AddTodo from '../components/AddTodo'
import PaymentList from '../components/PaymentList'
import Footer from '../components/Footer'

import MyRawTheme from '../style/theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class App extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  render() {
    const { dispatch, payments } = this.props
    return (
      <div>
        <AppBar
        titleStyle={{textAlign: "center"}}
        title={
          <img src="/logo.svg" style={{
            marginBottom: "-1.5rem",
            height: "4rem",
            verticalAlign: "baseline"}}/>}
        showMenuIconButton={false}
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

App.childContextTypes = {
  muiTheme: PropTypes.object,
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  payments: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

function select(state) {
  return {
    payments: state.payments
  }
}

export default connect(select)(App)
