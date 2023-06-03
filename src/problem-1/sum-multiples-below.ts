function sumMultiplesOf3And5Below (limit: number): number {
  const multiplesOf3Or5: number[] = []

  for (let numberToCheck = 3; numberToCheck < limit; numberToCheck++) {
    if (numberToCheck % 3 === 0 || numberToCheck % 5 === 0) {
      multiplesOf3Or5.push(numberToCheck)
    }
  }

  if (multiplesOf3Or5.length < 1) return 0

  const sumOfMultiples = multiplesOf3Or5.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )

  return sumOfMultiples
}

export default sumMultiplesOf3And5Below
