var ADT, expect, fixtures, fs, memo, r, ref, sinon;

ref = require('../spec-helper'), expect = ref.expect, fixtures = ref.fixtures, memo = ref.memo, sinon = ref.sinon;

fs = require('fs');

r = require('restructure');

ADT = require('../../lib/adt');

describe('ADT', function() {
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
