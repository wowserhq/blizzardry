import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Description: StringRef,
  Flags: r.int32le,
  EAXEnvironmentSelection: r.int32le,
  EAXDecayTime: r.floatle,
  EAX2EnvironmentSize: r.floatle,
  EAX2EnvironmentDiffusion: r.floatle,
  EAX2Room: r.int32le,
  EAX2RoomHF: r.int32le,
  EAX2DecayHFRatio: r.floatle,
  EAX2Reflections: r.int32le,
  EAX2ReflectionsDelay: r.floatle,
  EAX2Reverb: r.int32le,
  EAX2ReverbDelay: r.floatle,
  EAX2RoomRolloff: r.floatle,
  EAX2AirAbsorption: r.floatle,
  EAX3RoomLF: r.int32le,
  EAX3DecayLFRatio: r.floatle,
  EAX3EchoTime: r.floatle,
  EAX3EchoDepth: r.floatle,
  EAX3ModulationTime: r.floatle,
  EAX3ModulationDepth: r.floatle,
  EAX3HFReference: r.floatle,
  EAX3LFReference: r.floatle,
});
