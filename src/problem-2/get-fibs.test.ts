import getFibsBelow from "./get-fibs";

it("returns 1 and 2 when given an input of 3", () => {
  const fibs = getFibsBelow(3);
  expect(fibs).toEqual([1, 2]);
});

it("returns 1, 2 and 3 for an input of 4", () => {
  const fibs = getFibsBelow(4);
  expect(fibs).toEqual([1, 2, 3]);
});

it("returns 1, 2, 3 and 5 for an input of 6", () => {
  const fibs = getFibsBelow(6);
  expect(fibs).toEqual([1, 2, 3, 5]);
});
