var DBC, r, uint32le, xtend;

r = require('restructure');

uint32le = require('../types').uint32le;

xtend = require('xtend');

DBC = new r.Struct({
  signature: new r.String(4),
  recordCount: uint32le,
  fieldCount: uint32le,
  recordSize: uint32le,
  stringBlockSize: uint32le,
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

DBC.Entry = function(fields) {
  var type;
  type = new r.Struct(fields);
  type.dbc = DBC["for"](type);
  return type;
};

module.exports = DBC;
