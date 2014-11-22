var MPQ, expect, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, memo = _ref.memo, sinon = _ref.sinon;

MPQ = require('../../lib/mpq');

describe('MPQ', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open('spec/fixtures/dummy.mpq');
  });
  describe('#path', function() {
    return it('exposes path to this archive', function() {
      return expect(dummy().path).to.eq('spec/fixtures/dummy.mpq');
    });
  });
  describe('#close', function() {
    it('closes this archive', function() {
      return dummy().close();
    });
    return it('is idempotent', function() {
      dummy().close();
      return dummy().close();
    });
  });
  describe('#opened', function() {
    return it('returns opened state', function() {
      expect(dummy().opened).to.be["true"];
      dummy().close();
      return expect(dummy().opened).to.be["false"];
    });
  });
  describe('#patched', function() {
    return it('returns patched state', function() {
      return expect(dummy().patched).to.be["false"];
    });
  });
  describe('#has', function() {
    return xit('returns whether archive contains given file');
  });
  describe('.locale', function() {
    return it('returns default locale', function() {
      return expect(MPQ.locale).to.eq(0);
    });
  });
  describe('.open', function() {
    context('when omitting a callback', function() {
      return it('returns an MPQ instance', function() {
        var result;
        result = MPQ.open(dummy().path);
        return expect(result).to.be.an["instanceof"](MPQ);
      });
    });
    context('when given a callback', function() {
      return it('invokes callback with MPQ instance', function() {
        var callback, result;
        callback = this.sandbox.spy();
        result = MPQ.open(dummy().path, callback);
        expect(callback).to.have.been.called;
        return expect(result).to.be["true"];
      });
    });
    return context('when given a malformed or non-existent archive', function() {
      return it('throws an error', function() {
        return expect(function() {
          return MPQ.open('non-existent.mpq');
        }).to["throw"]('archive could not be found or opened');
      });
    });
  });
  return describe('.create', function() {
    return xit('creates a new archive');
  });
});
