import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Flags: r.int32le,
  DefaultPitchMin: r.floatle,
  DefaultPitchMax: r.floatle,
  DefaultSpeedMin: r.floatle,
  DefaultSpeedMax: r.floatle,
  RandomizeFacingMin: r.floatle,
  RandomizeFacingMax: r.floatle,
  RandomizePitchMin: r.floatle,
  RandomizePitchMax: r.floatle,
  RandomizeSpeedMin: r.floatle,
  RandomizeSpeedMax: r.floatle,
  Gravity: r.floatle,
  MaxDuration: r.floatle,
  CollisionRadius: r.floatle,
});
