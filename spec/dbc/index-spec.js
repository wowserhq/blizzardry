var Entity, StringRef, expect, fixtures, fs, memo, r, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

fs = require('fs');

r = require('restructure');

Entity = require('../../lib/dbc/entity');

StringRef = require('../../lib/dbc/string-ref');

describe('DBC', function() {
  var Sample, dummy;
  Sample = Entity({
    id: r.uint32le,
    name: StringRef,
    points: r.int32le,
    height: r.floatle,
    friend1: r.uint32le,
    friend2: r.uint32le
  });
  dummy = memo().is(function() {
    var data, stream;
    data = fs.readFileSync(fixtures + 'Sample.dbc');
    stream = new r.DecodeStream(data);
    return Sample.dbc.decode(stream);
  });
  describe('#signature', function() {
    return it('returns WDBC', function() {
      return expect(dummy().signature).to.eq('WDBC');
    });
  });
  describe('#recordCount', function() {
    return it('returns amount of records', function() {
      return expect(dummy().recordCount).to.eq(8);
    });
  });
  describe('#fieldCount', function() {
    return it('returns amount of fields', function() {
      return expect(dummy().fieldCount).to.eq(6);
    });
  });
  describe('#recordSize', function() {
    return it('returns size of a single record', function() {
      return expect(dummy().recordSize).to.eq(24);
    });
  });
  describe('#stringBlockSize', function() {
    return it('returns size of string block', function() {
      return expect(dummy().stringBlockSize).to.eq(96);
    });
  });
  describe('#stringBlockOffset', function() {
    return it('returns offset of string block', function() {
      return expect(dummy().stringBlockOffset).to.eq(212);
    });
  });
  return describe('#records', function() {
    return it('returns records', function() {
      var first, last, records, _ref1;
      _ref1 = records = dummy().records, first = _ref1[0], last = _ref1[_ref1.length - 1];
      expect(records.length).to.eq(8);
      expect(first).to.deep.eq({
        id: 1,
        name: 'John',
        points: 100,
        height: 1.7999999523162842,
        friend1: 2,
        friend2: 0
      });
      return expect(last).to.deep.eq({
        id: 10,
        name: 'Brad',
        points: -10,
        height: 1.5499999523162842,
        friend1: 0,
        friend2: 0
      });
    });
  });
});
