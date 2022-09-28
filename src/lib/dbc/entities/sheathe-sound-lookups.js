import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  ItemClass: r.int32le,
  ItemSubclass: r.int32le,
  ItemEnvTypes: r.int32le,
  IsShield: r.int32le,
  SheathSoundID: r.int32le,
  UnsheathSoundID: r.int32le,
});
