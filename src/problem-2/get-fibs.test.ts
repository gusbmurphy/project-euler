import getFibsBelow from "./get-fibs";

it("returns 1 and 2 when given an input of 3", () => {
  const fibs = getFibsBelow(3);
  expect(fibs).toEqual([1, 2]);
});
