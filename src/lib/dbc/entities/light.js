import r from 'restructure';

import Entity from '../entity';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  fallOffStart: r.floatle,
  fallOffEnd: r.floatle,
  skyFogID: r.uint32le,
  waterID: r.uint32le,
  sunsetID: r.uint32le,
  otherID: r.uint32le,
  deathID: r.uint32le,
  unknowns: new r.Reserved(r.uint32le, 3)
});
