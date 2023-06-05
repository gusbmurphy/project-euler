import sumEvenTerms from "./sum-even-terms";

it("returns 2 when given just 1 and 2", () => {
  expect(sumEvenTerms([1, 2])).toBe(2);
});

it("returns 0 when given only odd terms", () => {
  expect(sumEvenTerms([0, 3, 7])).toBe(0);
});
