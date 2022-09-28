import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  WeaponSubClassCost: new r.Array(r.int32le, 2),
  ArmorSubClassCost: new r.Array(r.int32le, 8),
});
