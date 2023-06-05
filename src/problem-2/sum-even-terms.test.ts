import sumEvenTerms from "./sum-even-terms";

it("returns 2 when given just 1 and 2", () => {
  expect(sumEvenTerms([1, 2])).toBe(2);
});

it("returns 0 when given only odd terms", () => {
  expect(sumEvenTerms([0, 3, 7])).toBe(0);
});

it("returns 6 when the input contains 2 and 4, but also other odd numbers", () => {
  expect(sumEvenTerms([0, 3, 7, 2, 4])).toBe(6);
});
