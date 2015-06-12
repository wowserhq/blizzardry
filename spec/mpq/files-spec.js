'use strict';

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');

var File = require('../../lib/mpq/file');
var MPQ = require('../../lib/mpq');

describe('MPQ.Files', function () {

  var dummy = memo().is(function () {
    return MPQ.open(fixtures + 'TheDeathSheep.w3m').files;
  });

  describe('#contains', function () {
    context('when archive contains given file', function () {
      it('returns true', function () {
        var presence = dummy().contains('(listfile)');
        expect(presence).to.be['true'];
      });
    });

    context('when archive does not contain given file', function () {
      it('returns false', function () {
        var presence = dummy().contains('non-existent.txt');
        expect(presence).to.be['false'];
      });
    });
  });

  describe('#get', function () {
    context('when archive contains given file', function () {
      it('returns file instance', function () {
        var file = dummy().get('(listfile)');
        expect(file).to.be.an['instanceof'](File);
      });
    });

    context('when archive does not contain given file', function () {
      it('returns null', function () {
        var result = dummy().get('non-existent.txt');
        expect(result).to.be['null'];
      });
    });
  });

  describe('#extract', function () {
    context('when archive contains given file', function () {
      it('extracts given file', function () {
        var name = '(attributes)';
        var target = fixtures + name;
        dummy().extract(name, target);
        expect(fs.existsSync(target)).to.be['true'];
        fs.unlinkSync(target);
      });
    });

    context('when archive does not contain given file', function () {
      it('throws an error', function () {
        expect(function () {
          dummy().extract('non-existent.txt');
        }).to['throw']('file could not be extracted (2)');
      });
    });
  });

  describe('#all', function () {
    it('proxies to #find with predefined pattern', function () {
      var spy = this.sandbox.spy(dummy(), 'find');
      var results = dummy().all;
      expect(spy).to.have.been.calledWith('*');
      expect(results.length).to.eq(18);
    });
  });

  describe('#find', function () {
    it('returns search results for given pattern', function () {
      var results = dummy().find('war3map.w3*');
      expect(results.length).to.eq(6);
    });
  });
});