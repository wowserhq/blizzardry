const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  leftModelFile: StringRef,
  rightModelFile: StringRef,
  leftModelTexture: StringRef,
  rightModelTexture: StringRef,
  icon: StringRef,
  iconAlt: StringRef,
  geosetGroupIDs: new r.Array(r.uint32le, 3),
  flags: r.uint32le,
  spellVisualID: r.uint32le,
  groupSoundID: r.uint32le,
  maleHelmetGeosetVisID: r.uint32le,
  femaleHelmetGeosetVisID: r.uint32le,
  upperArmTexture: StringRef,
  lowerArmTexture: StringRef,
  handsTexture: StringRef,
  upperTorsoTexture: StringRef,
  lowerTorsoTexture: StringRef,
  upperLegTexture: StringRef,
  lowerLegTexture: StringRef,
  footTexture: StringRef,
  visualID: r.uint32le,
  particleColorID: r.uint32le
});
