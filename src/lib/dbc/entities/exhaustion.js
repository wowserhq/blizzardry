const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  xp: r.uint32le,
  factor: r.floatle,
  outdoorHours: r.floatle,
  innHours: r.floatle,
  name: LocalizedStringRef,
  threshold: r.floatle
});
