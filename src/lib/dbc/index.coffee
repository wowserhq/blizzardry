r = require('restructure')
{uint32le} = require('../types')
xtend = require('xtend')

DBC = new r.Struct(
  signature: new r.String(4)

  recordCount: uint32le
  fieldCount: uint32le
  recordSize: uint32le
  stringBlockSize: uint32le
  stringBlockOffset: -> 4 * 5 + @recordCount * @recordSize

  records: new r.Array(new r.Buffer(-> @recordSize), -> @recordCount)
  stringBlock: new r.Buffer(-> @stringBlockSize)
)

DBC.for = (type) ->
  fields = xtend(@fields,
    records: new r.Array(type, -> @recordCount)
  )
  new r.Struct(fields)

module.exports = DBC
