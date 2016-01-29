import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'

import { PAYMENT_ADD, PAYMENT_DEL } from './actions'


function payments(state = [], action) {
  switch (action.type) {
    case PAYMENT_ADD:
      return [ ...state, {id: action.id, value: action.value}]
    case PAYMENT_DEL:
      return state.filter(p =>
        p.id != action.id
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  payments: payments
})

export default todoApp
