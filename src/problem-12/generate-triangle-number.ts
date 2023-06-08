function generateTriangleNumber(triangleNumberPosition: number): number {
  let triangleNumber = 0;

  for (let addend = 1; addend <= triangleNumberPosition; addend++) {
    triangleNumber += addend;
  }

  return triangleNumber;
}

export default generateTriangleNumber;
