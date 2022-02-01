const { createVideo } = require('./solutions');

describe('Problem 2 - createVideo() function', function () {
  test('<video> is correct for given src and width values', function () {
    let src =
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';
    let width = 500;
    let result = createVideo(src, width);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
    );
  });

  test('<video> HTML is correct for src value that needs to be trimmed', function () {
    let src =
      '   http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4  ';
    let width = 500;
    let result = createVideo(src, width);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
    );
  });

  test('<video> HTML is correct when width is a valid number, but passed as string', function () {
    let src =
      '   http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4  ';
    let width = '1024';
    let result = createVideo(src, width);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="1024"></video>'
    );
  });

  test('<video> HTML is correct when negative numeric width is included', function () {
    let src =
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';
    let width = -300;
    let result = createVideo(src, width);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4"></video>'
    );
  });

  test('<video> HTML is correct when non-integer numeric width is included', function () {
    let src =
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';
    let width = 0.123;
    let result = createVideo(src, width);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4"></video>'
    );
  });

  test('<video> HTML is correct when controls is included', function () {
    let src =
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';
    let width = 800;
    let controls = true;
    let result = createVideo(src, width, controls);
    expect(result).toBe(
      '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="800" controls></video>'
    );
  });
});
