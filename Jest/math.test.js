const { sum, mul, sub, div, sayHi, remainderZero } = require("./math");

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2);
});
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1);
});
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0);
});
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1);
});

test("Say Hello Won", () => {
  expect(sayHi("Hello", "Won")).toBe("Hello Won");
});

test("If remainder is zero, it should return true", () => {
  expect(remainderZero(3, 3)).toBeTruthy();
});

test('if remainder is not zero, it should return remainder is not zero',()=>{
  expect(remainderZero(3,2)).toBeFalsy();
})