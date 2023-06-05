function generateNextFibFromExistingFibs(existingFibs: number[]) {
  const lastFib = existingFibs[existingFibs.length - 1];
  const secondToLastFib = existingFibs[existingFibs.length - 2];
  return lastFib + secondToLastFib;
}

function getFibsBelow(upperLimit: number): number[] {
  const fibs = [1, 2];

  for (
    let nextFib = 3;
    nextFib < upperLimit;
    nextFib = generateNextFibFromExistingFibs(fibs)
  ) {
    fibs.push(nextFib);
  }

  return fibs;
}

export default getFibsBelow;
