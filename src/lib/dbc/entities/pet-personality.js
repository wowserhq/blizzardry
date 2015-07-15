const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  thresholds: new r.Array(r.uint32le, 3),
  damageModifiers: new r.Array(r.floatle, 3)
});
