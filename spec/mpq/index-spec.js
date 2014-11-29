var Files, MPQ, expect, fixtures, fs, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

Files = require('../../lib/mpq/files');

MPQ = require('../../lib/mpq');

describe('MPQ', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open(fixtures + 'dummy.w3m');
  });
  describe('#flags', function() {
    return it('exposes flags', function() {
      return expect(dummy().flags).to.eq(0);
    });
  });
  describe('#files', function() {
    return it('exposes files object', function() {
      return expect(dummy().files).to.be.an["instanceof"](Files);
    });
  });
  describe('#path', function() {
    return it('exposes path to this archive', function() {
      return expect(dummy().path).to.eq(fixtures + 'dummy.w3m');
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
    context('when archive is open', function() {
      return it('returns true', function() {
        return expect(dummy().opened).to.be["true"];
      });
    });
    return context('when archive is closed', function() {
      return it('returns false', function() {
        dummy().close();
        return expect(dummy().opened).to.be["false"];
      });
    });
  });
  describe('#patched', function() {
    return it('returns patched state', function() {
      return expect(dummy().patched).to.be["false"];
    });
  });
  describe('.locale', function() {
    return it('returns default locale', function() {
      return expect(MPQ.locale).to.eq(0);
    });
  });
  describe('.locale=', function() {
    return it('sets default locale', function() {
      MPQ.locale = 1;
      expect(MPQ.locale).to.eq(1);
      return MPQ.locale = 0;
    });
  });
  describe('.open', function() {
    context('when omitting a callback', function() {
      return it('returns an MPQ instance', function() {
        var mpq;
        mpq = MPQ.open(dummy().path);
        return expect(mpq).to.be.an["instanceof"](MPQ);
      });
    });
    context('when given a callback', function() {
      return it('invokes callback with MPQ instance', function() {
        var callback, result;
        callback = this.sandbox.spy(function(mpq) {
          return expect(mpq).to.be.an["instanceof"](MPQ);
        });
        result = MPQ.open(dummy().path, callback);
        expect(callback).to.have.been.called;
        return expect(result).to.be["true"];
      });
    });
    context('when given flags and omitting a callback', function() {
      return it('returns an MPQ instance and honors flags', function() {
        var mpq;
        mpq = MPQ.open(dummy().path, MPQ.OPEN.READ_ONLY);
        expect(mpq).to.be.an["instanceof"](MPQ);
        return expect(mpq.flags & MPQ.OPEN.READ_ONLY).to.be.above(0);
      });
    });
    context('when given flags and a callback', function() {
      return it('invokes callback with MPQ instance and honors flag', function() {
        var callback, result;
        callback = this.sandbox.spy(function(mpq) {
          expect(mpq).to.be.an["instanceof"](MPQ);
          return expect(mpq.flags & MPQ.OPEN.READ_ONLY).to.be.above(0);
        });
        result = MPQ.open(dummy().path, MPQ.OPEN.READ_ONLY, callback);
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
    context('when archive does not yet exist', function() {
      return it('creates a new archive', function() {
        var mpq, path;
        path = fixtures + 'new.mpq';
        mpq = MPQ.create(path);
        expect(mpq).to.be.an["instanceof"](MPQ);
        return fs.unlinkSync(path);
      });
    });
    return context('when archive already exists', function() {
      return it('throws an error', function() {
        return expect(function() {
          return MPQ.create(dummy().path);
        }).to["throw"]('archive could not be created');
      });
    });
  });
});
