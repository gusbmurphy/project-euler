import sumMultiplesOf3And5Below from './sum-multiples-below'

it('correctly gives 23 when given 10 as an input', () => {
  const result = sumMultiplesOf3And5Below(10)
  expect(result).toBe(23)
})

it('returns 0 for an input less than 3', () => {
  const result = sumMultiplesOf3And5Below(2)
  expect(result).toBe(0)
})

it('returns 3 for an input of 4', () => {
  const result = sumMultiplesOf3And5Below(4)
  expect(result).toBe(3)
})
