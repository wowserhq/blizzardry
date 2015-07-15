const r = require('restructure');
const Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  cameraShakeIDs: new r.Array(r.uint32le, 3)
});
