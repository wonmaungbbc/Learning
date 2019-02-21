const sum = require("./index");
const subTract = require("./index");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Subtract 3 - 2 to equal 1", () => {
  expect(subTract(3, 2)).toBe(1);
});
