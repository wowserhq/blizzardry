import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  skillLineID: r.uint32le,
  spellID: r.uint32le,

  requiredRaces: r.uint32le,
  requiredClasses: r.uint32le,
  excludedRaces: r.uint32le,
  excludedClasses: r.uint32le,

  minRank: r.uint32le,
  parentSpellID: r.uint32le,

  acquireMethod: r.uint32le,

  greyLevel: r.uint32le,
  yellowLevel: r.uint32le,

  charactersPoints: new r.Array(r.uint32le, 2)
});
