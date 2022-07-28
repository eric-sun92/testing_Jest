const subtract = require("./subtract");

test("properly subtracting two numbers", () => {
  expect(subtract(2, 3)).toBe(-1);
});
