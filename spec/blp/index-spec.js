var BLP, Mipmap, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

BLP = require('../../lib/blp');

Mipmap = require('../../lib/blp/mipmap');

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
  describe('#mipmapCount', function() {
    return it('returns amount of mipmaps', function() {
      return expect(dummy().mipmapCount).to.eq(8);
    });
  });
  describe('#mipmaps', function() {
    return it('contains mipmaps', function() {
      var i, mipmaps, _i, _results;
      mipmaps = dummy().mipmaps;
      _results = [];
      for (i = _i = 0; _i < 8; i = ++_i) {
        _results.push(expect(mipmaps[i]).to.be.an["instanceof"](Mipmap));
      }
      return _results;
    });
  });
  describe('#smallest', function() {
    return it('returns smallest mipmap', function() {
      var blp;
      blp = dummy();
      expect(blp.smallest).to.eq(blp.mipmaps[7]);
      expect(blp.smallest.width).to.eq(1);
      return expect(blp.smallest.height).to.eq(1);
    });
  });
  describe('#largest', function() {
    return it('returns largest mipmap', function() {
      var blp;
      blp = dummy();
      expect(blp.largest).to.eq(blp.mipmaps[0]);
      expect(blp.largest.width).to.eq(128);
      return expect(blp.largest.height).to.eq(128);
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
    context('when given a malformed image', function() {
      return it('throws an error', function() {
        return expect(function() {
          return BLP.open(__filename);
        }).to["throw"]('image could not be opened');
      });
    });
    return context('when given a non-existent image', function() {
      return it('throws an error', function() {
        return expect(function() {
          return BLP.open('non-existent.blp');
        }).to["throw"]('image could not be found');
      });
    });
  });
});
