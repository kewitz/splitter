export const PAYMENT_ADD = 'PAYMENT_ADD'
export const PAYMENT_DEL = 'PAYMENT_DEL'

let paymentId = 0

export function addPayment(value) {
  return {
    id: paymentId++,
    type: PAYMENT_ADD,
    value
  }
}

export function delPayment(id) {
  return {
    type: PAYMENT_DEL,
    id
  }
}
