const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
////testear div
test('Divide ', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test('Divide ', () => {
  expect(calculator.divide(5, 0)).toContain("No se puede")
});
////testear mult
test('Divide ', () => {
  expect(calculator.multiply(7, 7)).toBe(49);
});
test('Divide ', () => {
  expect(calculator.multiply(5, -6)).toBe(-30)
});
