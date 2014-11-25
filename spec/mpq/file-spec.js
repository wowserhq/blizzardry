var MPQ, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

MPQ = require('../../lib/mpq');

describe('MPQ.File', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open(fixtures + 'dummy.w3m').files.get('(listfile)');
  });
  describe('#name', function() {
    return it('returns file name', function() {
      return expect(dummy().name).to.eq('(listfile)');
    });
  });
  return describe('#size', function() {
    return it('returns file size in bytes', function() {
      return expect(dummy().size).to.eq(214);
    });
  });
});
