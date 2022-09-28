import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  WeaponSubClassID: r.int32le,
  ParrySoundType: r.int32le,
  ImpactSoundID: new r.Array(r.int32le, 1),
  CritImpactSoundID: new r.Array(r.int32le, 1),
});
