import { getDiscount } from './getDiscount'; // import the function to be tested

test('cost less than or equal to 1000', () => {
  expect(getDiscount(800)).toBe(800);
});

test('cost greater than 1000 and less than or equal to 5000', () => {
  expect(getDiscount(4000)).toBe(0.97 * 4000);
});

test('cost greater than 5000 and less than or equal to 7000', () => {
  expect(getDiscount(6000)).toBe(0.95 * 6000);
});

test('cost greater than 7000 and less than or equal to 10000', () => {
  expect(getDiscount(8000)).toBe(0.93 * 8000);
});

test('cost greater than 10000 and less than or equal to 50000', () => {
  expect(getDiscount(20000)).toBe(0.9 * 20000);
});

test('cost greater than 50000', () => {
  expect(getDiscount(60000)).toBe(0.85 * 60000);
});