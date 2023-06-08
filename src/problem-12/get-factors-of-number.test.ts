import getFactorsOfNumber from "./get-factors-of-number";

it("returns just 1 for an input of 1", () => {
  expect(getFactorsOfNumber(1)).toEqual([1]);
});

it("returns 1 and 2 for an input of 2", () => {
  expect(getFactorsOfNumber(2)).toEqual([1, 2]);
});

it("returns 1 and 3 for an input of 3", () => {
  expect(getFactorsOfNumber(3)).toEqual([1, 3]);
});

it("returns 1, 2, 3 and 6 for an input of 6", () => {
  expect(getFactorsOfNumber(6)).toEqual([1, 2, 3, 6]);
});
