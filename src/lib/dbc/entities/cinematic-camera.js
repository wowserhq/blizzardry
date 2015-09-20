const r = require('restructure');
const Entity = require('../entity');
const StringRef = require('../string-ref');
const { Vec3Float } = require('../../types');

module.exports = Entity({
  id: r.uint32le,
  file: StringRef,
  voiceoverID: r.uint32le,
  position: Vec3Float,
  rotation: r.floatle
});
