import { expect } from './spec-helper';

import Blizzardry from '../lib';

describe('Blizzardry', function() {

  it('exposes restructure', function() {
    expect(Blizzardry.restructure).to.eq(require('../lib/restructure'));
    expect(Blizzardry.restructure).to.eq(require('restructure'));
  });

});
