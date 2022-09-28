import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  CombatBloodSpurtFront: new r.Array(r.int32le, 2),
  CombatBloodSpurtBack: new r.Array(r.int32le, 2),
  GroundBlood: new r.Array(StringRef, 5),
});
