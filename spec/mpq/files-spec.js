var MPQ, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

MPQ = require('../../lib/mpq');

describe('MPQ#files', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open(fixtures + 'dummy.w3m').files;
  });
  return describe('#contains', function() {
    context('when archive contains given file', function() {
      return it('returns true', function() {
        var presence;
        presence = dummy().contains('(listfile)');
        return expect(presence).to.be["true"];
      });
    });
    return context('when archive does not contain given file', function() {
      return it('returns false', function() {
        var presence;
        presence = dummy().contains('non-existent.txt');
        return expect(presence).to.be["false"];
      });
    });
  });
});
