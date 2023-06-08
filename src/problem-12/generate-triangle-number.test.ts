import generateTriangleNumber from "./generate-triangle-number";

it("returns 1 as the first triangle number", () => {
  expect(generateTriangleNumber(1)).toBe(1);
});

it("returns 3 as the second triangle number", () => {
  expect(generateTriangleNumber(2)).toBe(3);
});

it("returns 6 as the third triangle number", () => {
  expect(generateTriangleNumber(3)).toBe(6);
});
