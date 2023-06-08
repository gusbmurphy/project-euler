function getFactorsOfNumber(givenNumber: number): number[] {
  const factors: number[] = [];

  for (let i = 1; i <= givenNumber; i++) {
    factors.push(i);
  }

  return factors;
}

export default getFactorsOfNumber;
