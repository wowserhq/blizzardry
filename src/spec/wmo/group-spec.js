const {expect, fixtures} = require('../spec-helper');

const fs = require('fs');
const r = require('restructure');

const Group = require('../../lib/wmo/group');

describe('WMO.Group', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'trolltent_000.wmo');
    const stream = new r.DecodeStream(data);
    return Group.decode(stream);
  }());

  describe('#version', function() {
    it('returns version', function() {
      expect(dummy.version).to.eq(17);
    });
  });

  describe('#flags', function() {
    it('returns flags', function() {
      expect(dummy.flags).to.eq(9);
    });
  });

});
