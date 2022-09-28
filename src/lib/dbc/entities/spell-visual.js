import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  PrecastKit: r.int32le,
  CastKit: r.int32le,
  ImpactKit: r.int32le,
  StateKit: r.int32le,
  StateDoneKit: r.int32le,
  ChannelKit: r.int32le,
  HasMissile: r.int32le,
  MissileModel: r.int32le,
  MissilePathType: r.int32le,
  MissileDestinationAttachment: r.int32le,
  MissileSound: r.int32le,
  AnimEventSoundID: r.int32le,
  Flags: r.int32le,
  CasterImpactKit: r.int32le,
  TargetImpactKit: r.int32le,
  MissileAttachment: r.int32le,
  MissileFollowGroundHeight: r.int32le,
  MissileFollowGroundDropSpeed: r.int32le,
  MissileFollowGroundApproach: r.int32le,
  MissileFollowGroundFlags: r.int32le,
  MissileMotion: r.int32le,
  MissileTargetingKit: r.int32le,
  InstantAreaKit: r.int32le,
  ImpactAreaKit: r.int32le,
  PersistentAreaKit: r.int32le,
  MissileCastOffsetX: r.floatle,
  MissileCastOffsetY: r.floatle,
  MissileCastOffsetZ: r.floatle,
  MissileImpactOffsetX: r.floatle,
  MissileImpactOffsetY: r.floatle,
  MissileImpactOffsetZ: r.floatle,
});
