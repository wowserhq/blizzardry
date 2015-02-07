var ADT, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

ADT = require('../../lib/adt');

describe.only('ADT', function() {
  var dummy;
  dummy = (function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Azeroth_38_46.adt');
    stream = new r.DecodeStream(data);
    return ADT.decode(stream);
  })();
  describe('#version', function() {
    return it('returns version', function() {
      return expect(dummy.version).to.eq(18);
    });
  });
  return describe('#flags', function() {
    return it('returns flags', function() {
      return expect(dummy.flags).to.eq(0);
    });
  });
});
