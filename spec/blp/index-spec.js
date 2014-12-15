var BLP, expect, fixtures, fs, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

BLP = require('../../lib/blp');

describe('BLP', function() {
  var dummy;
  dummy = memo().is(function() {
    return BLP.open(fixtures + 'RabbitSkin.blp');
  });
  describe('#close', function() {
    it('closes this image', function() {
      return dummy().close();
    });
    return it('is idempotent', function() {
      dummy().close();
      return dummy().close();
    });
  });
  describe('#opened', function() {
    context('when image is open', function() {
      return it('returns true', function() {
        return expect(dummy().opened).to.be["true"];
      });
    });
    return context('when image is closed', function() {
      return it('returns false', function() {
        dummy().close();
        return expect(dummy().opened).to.be["false"];
      });
    });
  });
  describe('#version', function() {
    return it('returns version identifier', function() {
      return expect(dummy().version).to.eq(2);
    });
  });
  return describe('.open', function() {
    context('when omitting a callback', function() {
      return it('returns a BLP instance', function() {
        var blp;
        blp = BLP.open(dummy().path);
        return expect(blp).to.be.an["instanceof"](BLP);
      });
    });
    context('when given a callback', function() {
      return it('invokes callback with BLP instance', function() {
        var callback, result;
        callback = this.sandbox.spy(function(blp) {
          return expect(blp).to.be.an["instanceof"](BLP);
        });
        result = BLP.open(dummy().path, callback);
        expect(callback).to.have.been.called;
        return expect(result).to.be["true"];
      });
    });
    return context('when given a malformed or non-existent image', function() {
      return it('throws an error', function() {
        return expect(function() {
          return BLP.open('non-existent.blp');
        }).to["throw"]('image could not be found or opened');
      });
    });
  });
});
