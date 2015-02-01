var MPQ, expect, fixtures, fs, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

MPQ = require('../../lib/mpq');

describe('MPQ.File', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open(fixtures + 'dummy.w3m').files.get('(listfile)');
  });
  describe('#close', function() {
    it('closes this file', function() {
      return dummy().close();
    });
    return it('is idempotent', function() {
      dummy().close();
      return dummy().close();
    });
  });
  describe('#opened', function() {
    context('when file is open', function() {
      return it('returns true', function() {
        return expect(dummy().opened).to.be["true"];
      });
    });
    return context('when file is closed', function() {
      return it('returns false', function() {
        dummy().close();
        return expect(dummy().opened).to.be["false"];
      });
    });
  });
  describe('#name', function() {
    return it('returns file name', function() {
      return expect(dummy().name).to.eq('(listfile)');
    });
  });
  describe('#size', function() {
    return it('returns file size in bytes', function() {
      return expect(dummy().size).to.eq(214);
    });
  });
  return describe('#data', function() {
    return it('returns file contents in a buffer', function() {
      var listfile;
      listfile = fs.readFileSync(fixtures + '(listfile)');
      return expect(dummy().data).to.deep.eq(listfile);
    });
  });
});
