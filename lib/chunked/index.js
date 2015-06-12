'use strict';

var r = require('restructure');
var xtend = require('xtend');

module.exports = function (fields) {
  fields = xtend({
    MVER: require('./mver'),
    version: function version() {
      return this.MVER.version;
    }
  }, fields);
  return new r.Struct(fields);
};