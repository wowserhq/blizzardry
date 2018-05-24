import { restructure } from '../lib';

import { expect } from './spec-helper';

describe('Blizzardry', function () {
  it('exposes restructure', function () {
    expect(restructure).to.eq(require('../lib/restructure'));
    expect(restructure).to.eq(require('restructure'));
  });
});
