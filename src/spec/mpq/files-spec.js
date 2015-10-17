import { expect, fixtures, memo } from '../spec-helper';

import fs from 'fs';

import File from '../../lib/mpq/file';
import MPQ from '../../lib/mpq';

describe('MPQ.Files', function() {

  const dummy = memo().is(function() {
    return MPQ.open(fixtures + 'TheDeathSheep.w3m').files;
  });

  describe('#contains', function() {
    context('when archive contains given file', function() {
      it('returns true', function() {
        const presence = dummy().contains('(listfile)');
        expect(presence).to.be.true;
      });
    });

    context('when archive does not contain given file', function() {
      it('returns false', function() {
        const presence = dummy().contains('non-existent.txt');
        expect(presence).to.be.false;
      });
    });
  });

  describe('#get', function() {
    context('when archive contains given file', function() {
      it('returns file instance', function() {
        const file = dummy().get('(listfile)');
        expect(file).to.be.an.instanceof(File);
      });
    });

    context('when archive does not contain given file', function() {
      it('returns null', function() {
        const result = dummy().get('non-existent.txt');
        expect(result).to.be.null;
      });
    });
  });

  describe('#extract', function() {
    context('when archive contains given file', function() {
      it('extracts given file', function() {
        const name = '(attributes)';
        const target = fixtures + name;
        dummy().extract(name, target);
        expect(fs.existsSync(target)).to.be.true;
        fs.unlinkSync(target);
      });
    });

    context('when archive does not contain given file', function() {
      it('throws an error', function() {
        expect(function() {
          dummy().extract('non-existent.txt');
        }).to.throw('file could not be extracted (2)');
      });
    });
  });

  describe('#all', function() {
    it('proxies to #find with predefined pattern', function() {
      const spy = this.sandbox.spy(dummy(), 'find');
      const results = dummy().all;
      expect(spy).to.have.been.calledWith('*');
      expect(results.length).to.eq(18);
    });
  });

  describe('#find', function() {
    it('returns search results for given pattern', function() {
      const results = dummy().find('war3map.w3*');
      expect(results.length).to.eq(6);
    });
  });

});
