import calculateInstallment from "../lib/loan";

const data = {
  amount: 100000,
  interest: 2,
  months: 48
}

const dataToParams = (d) => {
  return Object.values(d)
}

test('calculate for good installment', () => {
  const params = dataToParams(data)
  const result = calculateInstallment(...params)

  expect(result).toBe(2125)
  expect(typeof(result)).toBe("number")
})

test('negative interest', () => {
  const params = dataToParams({ ...data, interest: -1 })
  const result = calculateInstallment(...params) 
  
  expect(result).toBe(0)
})


test('when enter empty string the installment should not show NaN', () => {
  const params = dataToParams({ ...data, interest: '' })
  const result = calculateInstallment(...params) 

  const paramsWithoutInterest = dataToParams({ ...data, interest: 0 })
  const installmentWithoutInterest = calculateInstallment(...paramsWithoutInterest)
  
  expect(result).toBe(installmentWithoutInterest)
})
