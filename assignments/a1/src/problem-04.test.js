const { toDateString, parseDateString } = require('./solutions');

// Returns true if two dates have same year, month, day (ignoring time)
function compareDates(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

describe('Problem 4 - toDateString() function', function () {
  test('a date is correctly converted to a date string', function () {
    let date = new Date('December 10, 2021');
    let result = toDateString(date);
    expect(result).toBe('2021-12-10');
  });

  test('a date is correctly converted to a date string with expected month and day', function () {
    let date = new Date('December 17, 2021');
    let result = toDateString(date);
    expect(result).toBe('2021-12-17');
  });

  test('a date is correctly converted to a date string, with padded month', function () {
    let date = new Date('January 10, 2021');
    let result = toDateString(date);
    expect(result).toBe('2021-01-10');
  });

  test('a date is correctly converted to a date string, with padded day', function () {
    let date = new Date('December 01, 2021');
    let result = toDateString(date);
    expect(result).toBe('2021-12-01');
  });

  test('toDateString and parseDateString are reversible', function () {
    let date = new Date('December 01, 2021');
    let dateString = '2021-01-12';

    expect(compareDates(parseDateString(toDateString(date)), date)).toBe(true);
    expect(toDateString(parseDateString(dateString))).toBe(dateString);
  });

  test('an invalid date causes an error to be thrown', function () {
    expect(() => toDateString('invalid date')).toThrow();
  });
});
