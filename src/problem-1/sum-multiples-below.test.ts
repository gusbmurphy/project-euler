import sumMultiplesOf3And5Below from './sum-multiples-below'

it('correctly gives "23" when given "10" as an input', () => {
  const result = sumMultiplesOf3And5Below(10)
  expect(result).toBe(23)
})
