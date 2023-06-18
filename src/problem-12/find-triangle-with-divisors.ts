import generateTriangleNumber from "./generate-triangle-number";
import getFactorsOfNumber from "./get-factors-of-number";

function findFirstTriangleNumberWithDivisorsGreaterThan(
  targetNumberOfDivisors: number
): number {
  let numberOfDivisors = 0;
  let triangleNumber = 0;

  for (
    let triangleNumberPosition = 1;
    numberOfDivisors <= targetNumberOfDivisors;
    triangleNumberPosition++
  ) {
    triangleNumber = generateTriangleNumber(triangleNumberPosition);
    const factorsOfNumber = getFactorsOfNumber(triangleNumber);
    numberOfDivisors = factorsOfNumber.length;
  }

  return triangleNumber;
}

export default findFirstTriangleNumberWithDivisorsGreaterThan;
