import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'

function payments(state = [], action) {
  switch (action.type) {
    case 'PAYMENT_ADD':
      return [ ...state, {id: action.id, value: action.value}]
    case 'PAYMENT_DEL':
      return state.filter(p =>
        p.id != action.id
      )
    case 'PAYMENT_CLEAR':
      return []
    default:
      return state
  }
}

const todoApp = combineReducers({
  payments: payments
})

export default todoApp
