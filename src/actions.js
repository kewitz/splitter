export const PAYMENT_ADD = 'PAYMENT_ADD'
export const PAYMENT_DEL = 'PAYMENT_DEL'


let paymentIds = []
export function addPayment(value) {
  const i = paymentIds.slice(-1)[0]+1 || 0;
  paymentIds.push(i);
  return {
    id: i,
    type: PAYMENT_ADD,
    value
  }
}

export function delPayment(id) {
  paymentIds = paymentIds.filter(i => i != id);
  return {
    type: PAYMENT_DEL,
    id
  }
}

export function makeColors(index) {
  const step = 360/paymentIds.length;
  const deg = step*paymentIds.indexOf(index);
  return "hsl("+deg+", 80%, 70%)";
}

export function solveActions(payments) {
  // Calcula a conta final, média e balanço de cada pessoa.
  const sum = payments.reduce((sum, cur) => sum + cur.value, 0);
  const avg = sum / payments.length;
  let balances = payments
    .map(p => ({ ...p, value: (avg - p.value) }))
    .filter(b => b.value != 0)
    .sort((a, b) => a.value < b.value);

  let actions = [];

  while(balances.filter(b => b.value.toFixed(2, 0) != 0).length > 0) {
    const payer = balances.slice(0,1)[0];
    const receiver = balances.slice(-1)[0];
    const action = {
      from: payer.id,
      to: receiver.id,
      amount: Math.min(payer.value, Math.abs(receiver.value)),
    };

    balances = balances
      .map(balance => {
        if (balance.id == action.from) return { ...balance, value: balance.value - action.amount };
        else if (balance.id == action.to) return { ...balance, value: balance.value + action.amount };
        else return balance;
      })
      .filter(b => b.value != 0.00);

    if (balances.length) {
      const lastReceiver = balances.slice(-1)[0];
      if (lastReceiver.value > 0) balances = [lastReceiver, ...balances.slice(0,-1)];
    }

    actions.push(action);
  }
  console.log(JSON.stringify(actions));
  return actions;
}
