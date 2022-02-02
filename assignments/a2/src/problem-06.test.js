const data = require('./data');
const result0 = data.results[0];
const { getTaxonPhotos } = require('./observations');

const isINaturalistPath = (pathname) =>
  /(square.jpe?g|original.jpe?g|small.jpe?g|medium.jpe?g|large.jpe?g|_s.jpe?g)$/.test(pathname);

const hasIdQueryParam = (search) => /^\?\d+$/.test(search);

const isUrl = (url) => {
  const { pathname, search } = new URL(url);

  if (!isINaturalistPath(pathname)) {
    throw new Error(`URL path doesn't look like an iNaturalist photo: ${pathname}`);
  }

  if (!hasIdQueryParam(search)) {
    throw new Error(`URL origin doesn't have expected id on query string: ${search}`);
  }

  return true;
};

describe('Problem 06 - getTaxonPhotos() function', function () {
  let sample, samples, sampleData;

  beforeEach(() => {
    sample = Object.assign({}, result0);
    samples = [sample];
    sampleData = { results: samples };
  });

  test('should return an Array of Objects with the right URLs', function () {
    let result = getTaxonPhotos(sampleData);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);

    const photos = result[0];
    expect(isUrl(photos.square)).toBe(true);
    expect(isUrl(photos.original)).toBe(true);
    expect(isUrl(photos.small)).toBe(true);
    expect(isUrl(photos.medium)).toBe(true);
    expect(isUrl(photos.large)).toBe(true);
  });

  test('should return an empty Array if missing taxon', function () {
    delete sample.taxon;

    let result = getTaxonPhotos(sampleData);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  test('real-data should produce the expected result', function () {
    let result = getTaxonPhotos(data);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(9);

    result.forEach((photos) => {
      expect(isUrl(photos.square)).toBe(true);
      expect(isUrl(photos.original)).toBe(true);
      expect(isUrl(photos.small)).toBe(true);
      expect(isUrl(photos.medium)).toBe(true);
      expect(isUrl(photos.large)).toBe(true);
    });
  });
});
