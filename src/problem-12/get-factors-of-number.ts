function getFactorsOfNumber(givenNumber: number): number[] {
  const factors: number[] = [];

  for (
    let possibleFactor = 1;
    possibleFactor <= givenNumber;
    possibleFactor++
  ) {
    if (givenNumber % possibleFactor == 0) {
      factors.push(possibleFactor);
    }
  }

  return factors;
}

export default getFactorsOfNumber;
