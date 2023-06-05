function sumEvenTerms(allTerms: number[]) {
  let sum = 0;

  allTerms.forEach((term) => {
    if (term % 2 === 0) sum += term;
  });

  return sum;
}

export default sumEvenTerms;
