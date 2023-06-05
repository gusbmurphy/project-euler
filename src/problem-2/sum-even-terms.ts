function sumEvenTerms(allTerms: number[]) {
  let sum = 0;
  if (allTerms.includes(2)) {
    sum += 2;
    if (allTerms.includes(4)) sum += 4;
  }
  return sum;
}

export default sumEvenTerms;
