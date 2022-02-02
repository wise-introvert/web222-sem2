const { snake } = require('./solutions');

describe('Problem 1 - snake() function', function () {
  test('returns string unmodified if it needs no changes', function () {
    let result = snake('abc');
    expect(result).toBe('abc');
  });

  test('returns string with leading whitespace removed', function () {
    let result = snake(' abc');
    expect(result).toBe('abc');
  });

  test('returns string with trailing whitespace removed', function () {
    let result = snake('abc ');
    expect(result).toBe('abc');
  });

  test('returns string with all lowercase letters', function () {
    let result = snake('AbC');
    expect(result).toBe('abc');
  });

  test('returns string with internal spaces removed', function () {
    let result = snake('A B       C');
    expect(result).toBe('a_b_c');
  });

  test('returns string with internal tabs removed', function () {
    let result = snake('A\tB\tC');
    expect(result).toBe('a_b_c');
  });

  test('returns string with mixed internal tabs and spaces removed', function () {
    let result = snake('A  B\t\t C');
    expect(result).toBe('a_b_c');
  });

  test('returns string with periods removed', function () {
    let result = snake('A.B..............................C');
    expect(result).toBe('a_b_c');
  });

  test('returns string with periods, tabs, and spaces removed', function () {
    let result = snake(' A. b. . . . . . . \t\t\t  ....\t. . . . .   ......c..     ....d ');
    expect(result).toBe('a_b_c_d');
  });
});
