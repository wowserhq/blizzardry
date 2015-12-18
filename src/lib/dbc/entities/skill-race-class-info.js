import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  skillLineID: r.uint32le,
  raceMask: r.uint32le,
  classMask: r.uint32le,
  flags: r.uint32le,
  requiredLevel: r.uint32le,
  skillTierID: r.uint32le,
  skillCostID: r.uint32le
});
