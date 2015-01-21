r = require('restructure')
xtend = require('xtend')

DBC = new r.Struct(
  signature: new r.String(4)

  recordCount: r.uint32le
  fieldCount: r.uint32le
  recordSize: r.uint32le
  stringBlockSize: r.uint32le
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
