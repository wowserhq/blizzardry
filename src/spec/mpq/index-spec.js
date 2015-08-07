const {expect, fixtures, memo} = require('../spec-helper');

const fs = require('fs');

const Files = require('../../lib/mpq/files');
const MPQ = require('../../lib/mpq');

describe('MPQ', function() {

  const dummy = memo().is(function() {
    return MPQ.open(fixtures + 'TheDeathSheep.w3m');
  });

  describe('#flags', function() {
    it('exposes flags', function() {
      expect(dummy().flags).to.eq(0);
    });
  });

  describe('#files', function() {
    it('exposes files object', function() {
      expect(dummy().files).to.be.an.instanceof(Files);
    });
  });

  describe('#path', function() {
    it('exposes path to this archive', function() {
      expect(dummy().path).to.eq(fixtures + 'TheDeathSheep.w3m');
    });
  });

  describe('#close', function() {
    it('closes this archive', function() {
      dummy().close();
    });

    it('is idempotent', function() {
      dummy().close();
      dummy().close();
    });
  });

  describe('#opened', function() {
    context('when archive is open', function() {
      it('returns true', function() {
        expect(dummy().opened).to.be.true;
      });
    });

    context('when archive is closed', function() {
      it('returns false', function() {
        dummy().close();
        expect(dummy().opened).to.be.false;
      });
    });
  });

  describe('#patch', function() {
    context('when archive is writable', function() {
      it('throws an error', function() {
        expect(function() {
          dummy().patch(fixtures + 'TheDeathSheep.w3m');
        }).to.throw('archive must be read-only');
      });
    });

    context('when archive is read-only', function() {
      it('patches archive', function() {
        const mpq = MPQ.open(fixtures + 'TheDeathSheep.w3m', MPQ.OPEN.READ_ONLY);
        mpq.patch(fixtures + 'TheDeathSheep.w3m');
        expect(mpq.patched).to.be.true;
      });
    });
  });

  describe('#patched', function() {
    it('returns patched state', function() {
      expect(dummy().patched).to.be.false;
    });
  });

  describe('.locale', function() {
    it('returns default locale', function() {
      expect(MPQ.locale).to.eq(0);
    });
  });

  describe('.locale=', function() {
    it('sets default locale', function() {
      MPQ.locale = 1;
      expect(MPQ.locale).to.eq(1);
      MPQ.locale = 0;
    });
  });

  describe('.open', function() {
    context('when omitting a callback', function() {
      it('returns an MPQ instance', function() {
        const mpq = MPQ.open(dummy().path);
        expect(mpq).to.be.an.instanceof(MPQ);
      });
    });

    context('when given a callback', function() {
      it('invokes callback with MPQ instance', function() {
        const callback = this.sandbox.spy(function(mpq) {
          expect(mpq).to.be.an.instanceof(MPQ);
        });
        const result = MPQ.open(dummy().path, callback);
        expect(callback).to.have.been.called;
        expect(result).to.be.true;
      });
    });

    context('when given flags and omitting a callback', function() {
      it('returns an MPQ instance and honors flags', function() {
        const mpq = MPQ.open(dummy().path, MPQ.OPEN.READ_ONLY);
        expect(mpq).to.be.an.instanceof(MPQ);
        expect(mpq.flags & MPQ.OPEN.READ_ONLY).to.be.above(0);
      });
    });

    context('when given flags and a callback', function() {
      it('invokes callback with MPQ instance and honors flag', function() {
        const callback = this.sandbox.spy(function(mpq) {
          expect(mpq).to.be.an.instanceof(MPQ);
          expect(mpq.flags & MPQ.OPEN.READ_ONLY).to.be.above(0);
        });
        const result = MPQ.open(dummy().path, MPQ.OPEN.READ_ONLY, callback);
        expect(callback).to.have.been.called;
        expect(result).to.be.true;
      });
    });

    context('when given a malformed or non-existent archive', function() {
      it('throws an error', function() {
        expect(function() {
          MPQ.open('non-existent.mpq');
        }).to.throw('archive could not be found or opened (2)');
      });
    });
  });

  describe('.create', function() {
    context('when archive does not yet exist', function() {
      it('creates a new archive', function() {
        const path = fixtures + 'new.mpq';
        const mpq = MPQ.create(path);
        expect(mpq).to.be.an.instanceof(MPQ);
        fs.unlinkSync(path);
      });
    });

    context('when archive already exists', function() {
      it('throws an error', function() {
        expect(function() {
          MPQ.create(dummy().path);
        }).to.throw('archive could not be created (17)');
      });
    });
  });

});
