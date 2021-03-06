export default function calculateInstallment(amount, interest, months) {
  const amountValue   = amount === '' ? 0 : amount
  const interestValue = interest === '' ? 0 : interest
  if (interest < 0) {
    return 0
  }

  const totalFinance = parseInt(amountValue) * (100 + parseFloat(interestValue)) / 100 
  const result = parseInt(parseFloat(totalFinance / parseInt(months)).toFixed(0))

  return result
}
