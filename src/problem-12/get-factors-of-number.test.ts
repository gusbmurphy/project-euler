import getFactorsOfNumber from "./get-factors-of-number";

it("returns just 1 for an input of 1", () => {
  expect(getFactorsOfNumber(1)).toEqual([1]);
});

it("returns 1 and 2 for an input of 2", () => {
  expect(getFactorsOfNumber(2)).toEqual([1, 2]);
});
