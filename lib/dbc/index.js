var DBC, r, xtend;

r = require('restructure');

xtend = require('xtend');

DBC = new r.Struct({
  signature: new r.String(4),
  recordCount: r.uint32le,
  fieldCount: r.uint32le,
  recordSize: r.uint32le,
  stringBlockSize: r.uint32le,
  stringBlockOffset: function() {
    return 4 * 5 + this.recordCount * this.recordSize;
  },
  records: new r.Array(new r.Buffer(function() {
    return this.recordSize;
  }), function() {
    return this.recordCount;
  }),
  stringBlock: new r.Buffer(function() {
    return this.stringBlockSize;
  })
});

DBC["for"] = function(type) {
  var fields;
  fields = xtend(this.fields, {
    records: new r.Array(type, function() {
      return this.recordCount;
    })
  });
  return new r.Struct(fields);
};

module.exports = DBC;
