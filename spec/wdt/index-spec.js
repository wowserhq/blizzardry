var WDT, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

WDT = require('../../lib/wdt');

describe('WDT', function() {
  var dummy;
  return dummy = (function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Azeroth.wdt');
    stream = new r.DecodeStream(data);
    return WDT.decode(stream);
  })();
});
