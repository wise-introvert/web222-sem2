const { normalizeCoord } = require('./solutions');

/**
 *  * 1. "43.7955,-79.3496" NOTE: no space
 * 4. "[-79.3496, 43.7955]" NOTE: the space, as well as lat/lng values are reversed
 */

describe('Problem 5 - normalizeCoord() function', function () {
  test('valid lat, lng coord returns proper format', function () {
    let coord = '43.7955,-79.3496';
    expect(normalizeCoord(coord)).toBe('(43.7955, -79.3496)');
  });

  describe('lat validation', function () {
    test('coord with lat at 90 returns proper format', function () {
      let coord = '90,-79.3496';
      expect(normalizeCoord(coord)).toBe('(90, -79.3496)');
    });

    test('coord with lat at -90 returns proper format', function () {
      let coord = '-90,-79.3496';
      expect(normalizeCoord(coord)).toBe('(-90, -79.3496)');
    });

    test('coord with invalid lat < -90 throws', function () {
      let coord = '-90.01,-79.3496';
      expect(() => normalizeCoord(coord)).toThrow();
    });

    test('coord with invalid lat > 90 throws', function () {
      let coord = '90.01,-79.3496';
      expect(() => normalizeCoord(coord)).toThrow();
    });
  });

  describe('lng validation', function () {
    test('coord with valid lng at 180 returns proper format', function () {
      let coord = '43.7955,180';
      expect(normalizeCoord(coord)).toBe('(43.7955, 180)');
    });

    test('coord with valid lng at -180 returns proper format', function () {
      let coord = '43.7955,-180';
      expect(normalizeCoord(coord)).toBe('(43.7955, -180)');
    });

    test('coord with invalid lng < -180 throws', function () {
      let coord = '43.7955,-180.00001';
      expect(() => normalizeCoord(coord)).toThrow();
    });

    test('coord with invalid lng > 180 throws', function () {
      let coord = '43.7955,180.00001';
      expect(() => normalizeCoord(coord)).toThrow();
    });
  });

  describe('alternate [lat, lng] format', function () {
    test('coord with alternate layout format can be parsed correctly', function () {
      let coord = '[-79.3496, 43.7955]';
      expect(normalizeCoord(coord)).toBe('(43.7955, -79.3496)');
    });

    test('coord with alternate layout validates lng correctly', function () {
      let coord = '[-181, 43.7955]';
      expect(() => normalizeCoord(coord)).toThrow();
    });

    test('coord with alternate layout validates lat correctly', function () {
      let coord = '[-79.3496, 91]';
      expect(() => normalizeCoord(coord)).toThrow();
    });
  });
});
