import { expect } from './spec-helper';

import { restructure } from '../lib';

describe('Blizzardry', function() {

  it('exposes restructure', function() {
    expect(restructure).to.eq(require('../lib/restructure').default);
    expect(restructure).to.eq(require('restructure'));
  });

});
