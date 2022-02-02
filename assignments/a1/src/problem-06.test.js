const { formatCoords } = require('./solutions');

describe('Problem 6 - formatCoords()', function () {
  test('valid lat, lng coord should be formatted correctly in a list', function () {
    let result = formatCoords('43.7955,-79.3496');
    expect(result).toBe('((43.7955, -79.3496))');
  });

  test('multiple valid lat, lng coords should be formatted correctly in a list', function () {
    let result = formatCoords('43.7955,-79.3496', '43.7955,-79.3496');
    expect(result).toBe('((43.7955, -79.3496), (43.7955, -79.3496))');
  });

  test('multiple valid lat, lng coord formats should be formatted correctly in a list', function () {
    let result = formatCoords('43.7955,-79.3496', '[-79.3496, 43.7955]');
    expect(result).toBe('((43.7955, -79.3496), (43.7955, -79.3496))');
  });

  test('invalid coords are skipped', function () {
    let result = formatCoords('43.7955,-79.3496', '9000,9000', '[-79.3496, 43.7955]');
    expect(result).toBe('((43.7955, -79.3496), (43.7955, -79.3496))');
  });

  test('if all values are invalid, an empty list is returned', function () {
    let result = formatCoords('90.01,-79.3496', '90,-181');
    expect(result).toBe('()');
  });
});
