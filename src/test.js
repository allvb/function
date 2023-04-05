import life from './life';

const input = [
  { name: 'Маг', health: '60' },
  // { name; 'Воин', health: '90' },
  // { name; 'Лучница', health: '10' },
  // { name; 'Маг', health: '20' }
];

test.('getLife', () => {
  const expected = 'healthy';
  const result = life(input[0]);

  expect(result).toBe(expected);
});
