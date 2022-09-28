import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  SoundEntryID: r.int32le,
  InnerRadius2D: r.floatle,
  TimeA: r.int32le,
  TimeB: r.int32le,
  TimeC: r.int32le,
  TimeD: r.int32le,
  RandomOffsetRange: r.int32le,
  Usage: r.int32le,
  TimeintervalMin: r.int32le,
  TimeintervalMax: r.int32le,
  VolumeSliderCategory: r.int32le,
  DuckToSFX: r.floatle,
  DuckToMusic: r.floatle,
  DuckToAmbience: r.floatle,
  InnerRadiusOfInfluence: r.floatle,
  OuterRadiusOfInfluence: r.floatle,
  TimeToDuck: r.int32le,
  TimeToUnduck: r.int32le,
  InsideAngle: r.floatle,
  OutsideAngle: r.floatle,
  OutsideVolume: r.floatle,
  OuterRadius2D: r.floatle,
  Name: StringRef,
});
