var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  type: r.uint32le,
  rgba: new r.Array(r.uint8, 4),
  edge: r.uint32le,
  bw: r.uint32le,
  unknown: new r.Reserved(r.uint32le),
  lightParamsID: r.int32le,
  soundAmbienceID: r.uint32le,
  zoneMusicID: r.uint32le
});
