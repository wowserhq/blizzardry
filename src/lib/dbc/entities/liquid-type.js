import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Name: StringRef,
  Flags: r.int32le,
  Type: r.int32le,
  SoundID: r.int32le,
  SpellID: r.int32le,
  MaxDarkenDepth: r.floatle,
  FogDarkenintensity: r.floatle,
  AmbDarkenintensity: r.floatle,
  DirDarkenintensity: r.floatle,
  LightID: r.int32le,
  ParticleScale: r.floatle,
  ParticleMovement: r.int32le,
  ParticleTexSlots: r.int32le,
  MaterialID: r.int32le,
  Texture: new r.Array(StringRef, 6),
  Color: new r.Array(r.int32le, 2),
  Float: new r.Array(r.floatle, 18),
  Int32le: new r.Array(r.int32le, 4),
});
