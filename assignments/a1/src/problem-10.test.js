const { buildUrl } = require('./solutions');

// function buildUrl(query, order, count, license) {

describe('Problem 10 - buildUrl() function', function () {
  function assertUrl(urlString, query, order, count, license) {
    let url = new URL(urlString);
    expect(url.origin).toBe('https://api.inaturalist.org');
    expect(url.pathname).toBe('/v2/observations');
    expect(url.searchParams.get('query')).toEqual(query);
    expect(url.searchParams.get('count')).toEqual(String(count));
    expect(url.searchParams.get('order')).toEqual(order);
    expect(url.searchParams.get('license')).toEqual(license);
  }

  test('correct values produce an expected url', function () {
    let url = buildUrl('butterfly', 'ascending', 50, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 50, 'cc-by');
  });

  test('query values are properly encoded on url', function () {
    let url = buildUrl('butterfly with special characters:/\\{}<>[]}`"', 'ascending', 50, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly with special characters:/\\{}<>[]}`"', 'ascending', 50, 'cc-by');
  });

  test('count below 1 throws but 1 works', function () {
    expect(() => buildUrl('butterfly', 'ascending', 0, 'cc-by')).toThrowError();

    let url = buildUrl('butterfly', 'ascending', 1, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 1, 'cc-by');
  });

  test('count above 50 throws but 50 works', function () {
    expect(() => buildUrl('butterfly', 'ascending', 51, 'cc-by')).toThrowError();

    let url = buildUrl('butterfly', 'ascending', 50, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 50, 'cc-by');
  });

  test('order can be `ascending`', function () {
    let url = buildUrl('butterfly', 'ascending', 50, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'ascending', 50, 'cc-by');
  });

  test('order can be `descending`', function () {
    let url = buildUrl('butterfly', 'descending', 50, 'cc-by');
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 'descending', 50, 'cc-by');
  });

  test('order other than asc/desc throws', function () {
    expect(() => buildUrl('butterfly', 'desc', 50, 'cc-by')).toThrowError();
    expect(() => buildUrl('butterfly', 'asc', 50, 'cc-by')).toThrowError();
    expect(() => buildUrl('butterfly', '', 200, 'cc-by')).toThrowError();
  });

  test('license must be one of the expected values', function () {
    [
      'none',
      'any',
      'cc-by',
      'cc-by-nc',
      'cc-by-sa',
      'cc-by-nd',
      'cc-by-nc-sa',
      'cc-by-nc-nd'
    ].forEach((license) => {
      let url = buildUrl('butterfly', 'descending', 50, license);
      expect(typeof url).toEqual('string');
      assertUrl(url, 'butterfly', 'descending', 50, license);
    });
  });

  test('license other than the expected values will throw', function () {
    expect(() => buildUrl('butterfly', 'ascending', 50, '')).toThrowError();
  });
});
