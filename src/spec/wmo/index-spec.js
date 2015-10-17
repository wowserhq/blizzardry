import { expect, fixtures } from '../spec-helper';

import fs from 'fs';
import r from 'restructure';

import WMO from '../../lib/wmo';

describe('WMO', function() {

  const dummy = (function() {
    const data = fs.readFileSync(fixtures + 'trolltent.wmo');
    const stream = new r.DecodeStream(data);
    return WMO.decode(stream);
  }());

  describe('#version', function() {
    it('returns version', function() {
      expect(dummy.version).to.eq(17);
    });
  });

  describe('#flags', function() {
    it('returns flags', function() {
      expect(dummy.flags).to.eq(1);
    });
  });

});
