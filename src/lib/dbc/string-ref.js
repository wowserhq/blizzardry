const r = require('restructure')

module.exports = new r.Pointer(
  r.uint32le,
  new r.String(null, 'utf8'),
  {
    type: 'global',
    relativeTo: 'parent.stringBlockOffset'
  }
)
