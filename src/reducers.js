import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'

import { PAYMENT_ADD, PAYMENT_DEL } from './actions'

function payment(state = null, action) {
  switch (action.type) {
    case PAYMENT_ADD:
      let val = Number(action.value.replace(",",".")).toString();
      if (val != "NaN")
        return {
          id: action.id,
          value: action.value,
        }
    default:
      return state
  }
}

function payments(state = [], action) {
  switch (action.type) {
    case PAYMENT_ADD:
      let pay = payment(undefined, action)
      if (pay != null)
        return [ ...state, pay ]
      else return state
    case PAYMENT_DEL:
      return state.filter(p =>
        p.id != action.id
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  payments: undoable(payments)
})

export default todoApp
