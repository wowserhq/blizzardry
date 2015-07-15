const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: StringRef,
  file: StringRef,
  areaEffectSize: r.floatle,
  scale: r.floatle,
  minScale: r.floatle,
  maxScale: r.floatle
});
