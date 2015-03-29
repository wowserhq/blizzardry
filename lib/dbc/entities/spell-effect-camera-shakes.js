var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  cameraShakeIDs: new r.Array(r.uint32le, 3)
});
