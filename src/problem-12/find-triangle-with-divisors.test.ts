import findFirstTriangleNumberWithDivisorsGreaterThan from "./find-triangle-with-divisors";

it("returns 28 when given an input of 5", () => {
  const result = findFirstTriangleNumberWithDivisorsGreaterThan(5);
  expect(result).toBe(28);
});
