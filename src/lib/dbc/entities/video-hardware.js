import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  VendorID: r.int32le,
  DeviceID: r.int32le,
  FarclipIdx: r.int32le,
  TerrainLODDistIdx: r.int32le,
  TerrainShadowLOD: r.int32le,
  DetailDoodadDensityIdx: r.int32le,
  DetailDoodadAlpha: r.int32le,
  AnimatingDoodadIdx: r.int32le,
  Trilinear: r.int32le,
  NumLights: r.int32le,
  Specularity: r.int32le,
  WaterLODIdx: r.int32le,
  ParticleDensityIdx: r.int32le,
  UnitDrawDistIdx: r.int32le,
  SmallCullDistIdx: r.int32le,
  ResolutionIdx: r.int32le,
  BaseMipLevel: r.int32le,
  OglOverrides: StringRef,
  D3dOverrides: StringRef,
  FixLag: r.int32le,
  Multisample: r.int32le,
  Atlasdisable: r.int32le,
});
