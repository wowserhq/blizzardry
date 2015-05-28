const r = require('restructure')
const Entity = require('../entity')
const StringRef = require('../string-ref')

module.exports = Entity({
  id: r.uint32le,
  raceID: r.uint32le,
  gender: r.uint32le,

  skinColor: r.uint32le,
  faceType: r.uint32le,
  hairType: r.uint32le,
  hairStyle: r.uint32le,
  beardStyle: r.uint32le,

  helmID: r.uint32le,
  shoulderID: r.uint32le,
  shirtID: r.uint32le,
  cuirassID: r.uint32le,
  beltID: r.uint32le,
  legsID: r.uint32le,
  bootsID: r.uint32le,
  wristID: r.uint32le,
  glovesID: r.uint32le,
  tabardID: r.uint32le,
  capeID: r.uint32le,

  canEquip: new r.Boolean(r.uint32le),
  texture: StringRef
})
