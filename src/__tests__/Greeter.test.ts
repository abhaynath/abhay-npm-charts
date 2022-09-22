import { Greeter } from '../../src/index';
test('My Greeter', () => {
  expect(Greeter('Abhay')).toBe('Hello Abhay');
});
