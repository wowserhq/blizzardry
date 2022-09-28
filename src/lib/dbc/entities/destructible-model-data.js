import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  State0Wmo: r.int32le,
  State0DestructionDoodadSet: r.int32le,
  State0ImpactEffectDoodadSet: r.int32le,
  State0AmbientDoodadSet: r.int32le,
  State1Wmo: r.int32le,
  State1DestructionDoodadSet: r.int32le,
  State1ImpactEffectDoodadSet: r.int32le,
  State1AmbientDoodadSet: r.int32le,
  State2Wmo: r.int32le,
  State2DestructionDoodadSet: r.int32le,
  State2ImpactEffectDoodadSet: r.int32le,
  State2AmbientDoodadSet: r.int32le,
  State3Wmo: r.int32le,
  State3DestructionDoodadSet: r.int32le,
  State3ImpactEffectDoodadSet: r.int32le,
  State3AmbientDoodadSet: r.int32le,
  Field17: r.int32le,
  Field18: r.int32le,
});
