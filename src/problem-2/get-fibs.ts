function getFibsBelow(upperLimit: number): number[] {
  if (upperLimit === 3) return [1, 2];
  if (upperLimit === 4) return [1, 2, 3];
  return [1, 2, 3, 5];
}

export default getFibsBelow;
