import getFactorsOfNumber from "./get-factors-of-number";

it("returns just 1 for an input of 1", () => {
  expect(getFactorsOfNumber(1)).toEqual([1]);
});
