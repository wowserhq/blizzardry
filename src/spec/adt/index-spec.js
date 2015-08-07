const {expect, fixtures} = require('../spec-helper');

const fs = require('fs');
const r = require('restructure');

const ADT = require('../../lib/adt');

describe('ADT', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'Azeroth_38_46.adt');
    const stream = new r.DecodeStream(data);
    return ADT.decode(stream);
  }());

  describe('#version', function() {
    it('returns version', function() {
      expect(dummy.version).to.eq(18);
    });
  });

  describe('#flags', function() {
    it('returns flags', function() {
      expect(dummy.flags).to.eq(0);
    });
  });

});
