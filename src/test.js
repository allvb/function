import life from './life';

const input = [
  { name: 'Маг', health: '60' },
  { name: 'Воин', health: '110' },
  { name: 'Лучница', health: '10' },
  { name: 'Маг', health: '20' },
];

test('getLife', () => {
  let expected = 'healthy';
  let result = life(input[0]);
  expect(result).toBe(expected);

  expected = false;
  result = life(input[1]);
  expect(result).toBe(expected);

  expected = 'critical';
  result = life(input[2]);
  expect(result).toBe(expected);

  expected = 'wounded';
  result = life(input[3]);
  expect(result).toBe(expected);
});
