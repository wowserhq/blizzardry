import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  flags: r.uint32le,
  type: r.uint32le,
  soundEntryID: r.uint32le,
  spellID: r.uint32le,
  maxDarkenDepth: r.floatle,
  fogDarkenIntensity: r.floatle,
  ambDarkenIntensity: r.floatle,
  dirDarkenIntensity: r.floatle,
  lightID: r.uint32le,
  particleScale: r.floatle,
  particleMovement: r.uint32le,
  particleTexSlots: r.uint32le,
  liquidMaterialID: r.uint32le,
  textures: new r.Array(StringRef, 6),
  colors: new r.Array(r.uint32le, 2),
  shaderFloatAttributes: new r.Array(r.floatle, 18),
  shaderIntAttributes: new r.Array(r.uint32le, 4)
});
