var Entity, StringRef, r;

r = require('restructure');

Entity = require('../entity');

StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  textures: new r.Array(StringRef, 3),
  models: new r.Array(StringRef, 4)
});
