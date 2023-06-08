function getFactorsOfNumber(givenNumber: number): number[] {
  const factors: number[] = [];

  for (let i = 1; i <= givenNumber; i++) {
    if (i == 1 || i == givenNumber) {
      factors.push(i);
    }
  }

  return factors;
}

export default getFactorsOfNumber;
