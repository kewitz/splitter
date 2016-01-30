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

export function makeColors(index) {
  const deg = 360/paymentId;
  return "hsl("+(deg*index).toFixed(0, 10)+", 80%, 70%)";
}

export function solveActions(people) {
  console.log(JSON.stringify(people))
  const sum = people.reduce((sum, cur) => sum + cur.value, 0);
  const avg = sum / people.length;
  const balances = people.map(p => ({ ...p, value: (avg - p.value) }))
                        .filter(b => b.value != 0)
                        .sort((a, b) => a.value < b.value)
                        ;

  const generatePossibilities = ({ balances, actions = []}) => {
    if (balances.length == 0) return {balances, actions};

    const payers = balances.filter(p => p.value > 0);
    const receivers = balances.filter(p => p.value < 0);

    return payers.map(payer => {
      let nextBalances = [...balances];
      const receiver = receivers.slice(-1)[0];
      const action = {
        from: payer.id,
        to: receiver.id,
        amount: payer.value,
      };

      nextBalances = nextBalances.map(balance => {
        if (balance.id == action.from) return { ...balance, value: balance.value - action.amount };
        if (balance.id == action.to) return { ...balance, value: balance.value + action.amount };
        return balance;
      });

      const nextActions = [...actions, action];
      nextBalances = nextBalances.filter(p => p.value != 0);

      return generatePossibilities({ balances: nextBalances, actions: nextActions } )
    });

  };

  const possibilities = generatePossibilities({ balances });
  console.log(possibilities);
  if (possibilities.length && possibilities[0].actions.length) {
    possibilities.sort((a, b) => a.actions.length > b.actions.length);
    return possibilities[0].actions;
  }
  return [];
}
