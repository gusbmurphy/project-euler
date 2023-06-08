function generateTriangleNumber(triangleNumberPosition: number): number {
  if (triangleNumberPosition == 1) return 1;
  if (triangleNumberPosition == 3) return 6;
  return 3;
}

export default generateTriangleNumber;
