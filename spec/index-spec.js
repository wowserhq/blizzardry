'use strict';

var _require = require('./spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var Blizzardry = require('../lib');

describe('Blizzardry', function () {

  it('exposes restructure', function () {
    expect(Blizzardry.restructure).to.eq(require('../lib/restructure'));
    expect(Blizzardry.restructure).to.eq(require('restructure'));
  });
});