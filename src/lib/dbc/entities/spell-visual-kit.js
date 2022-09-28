import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  StartAnimID: r.int32le,
  AnimID: r.int32le,
  HeadEffect: r.int32le,
  ChestEffect: r.int32le,
  BaseEffect: r.int32le,
  LeftHandEffect: r.int32le,
  RightHandEffect: r.int32le,
  BreathEffect: r.int32le,
  LeftWeaponEffect: r.int32le,
  RightWeaponEffect: r.int32le,
  SpecialEffect: new r.Array(r.int32le, 3),
  WorldEffect: r.int32le,
  SoundID: r.int32le,
  ShakeID: r.int32le,
  CharProc: new r.Array(r.int32le, 4),
  CharParamZero: new r.Array(r.floatle, 4),
  CharParamOne: new r.Array(r.floatle, 4),
  CharParamTwo: new r.Array(r.floatle, 4),
  CharParamThree: new r.Array(r.floatle, 4),
});
