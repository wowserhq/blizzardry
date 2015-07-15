const r = require('restructure');
const Entity = require('../entity');
const LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  subClassID: r.uint32le,
  isWeapon: new r.Boolean(r.uint32le),
  name: LocalizedStringRef
});
