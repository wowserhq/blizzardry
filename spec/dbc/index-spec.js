var DBC, Entity, LocalizedStringRef, StringRef, expect, fixtures, fs, memo, r, ref, sinon;

ref = require('../spec-helper'), expect = ref.expect, fixtures = ref.fixtures, memo = ref.memo, sinon = ref.sinon;

fs = require('fs');

r = require('restructure');

DBC = require('../../lib/dbc');

Entity = require('../../lib/dbc/entity');

LocalizedStringRef = require('../../lib/dbc/localized-string-ref');

StringRef = require('../../lib/dbc/string-ref');

describe('DBC', function() {
  var Sample, dummy, stream;
  Sample = Entity({
    id: r.uint32le,
    name: StringRef,
    localizedName: LocalizedStringRef,
    points: r.int32le,
    height: r.floatle
  });
  stream = function() {
    var data;
    data = fs.readFileSync(fixtures + 'Sample.dbc');
    return new r.DecodeStream(data);
  };
  dummy = (function() {
    return DBC.decode(stream());
  })();
  describe('#signature', function() {
    return it('returns WDBC', function() {
      return expect(dummy.signature).to.eq('WDBC');
    });
  });
  describe('#recordCount', function() {
    return it('returns amount of records', function() {
      return expect(dummy.recordCount).to.eq(3);
    });
  });
  describe('#fieldCount', function() {
    return it('returns amount of fields', function() {
      return expect(dummy.fieldCount).to.eq(21);
    });
  });
  describe('#recordSize', function() {
    return it('returns size of a single record', function() {
      return expect(dummy.recordSize).to.eq(84);
    });
  });
  describe('#stringBlockSize', function() {
    return it('returns size of string block', function() {
      return expect(dummy.stringBlockSize).to.eq(10);
    });
  });
  describe('#stringBlockOffset', function() {
    return it('returns offset of string block', function() {
      return expect(dummy.stringBlockOffset).to.eq(272);
    });
  });
  return describe('#records', function() {
    context('when not using an entity', function() {
      return it('returns raw records', function() {
        var record, records, ref1;
        ref1 = records = dummy.records, record = ref1[0];
        expect(records.length).to.eq(3);
        expect(record).to.be.an["instanceof"](Buffer);
        return expect(record).to.have.length(dummy.recordSize);
      });
    });
    return context('when using an entity', function() {
      return it('returns records', function() {
        var first, last, records, ref1, sample;
        sample = Sample.dbc.decode(stream());
        ref1 = records = sample.records, first = ref1[0], last = ref1[ref1.length - 1];
        expect(records.length).to.eq(3);
        expect(first).to.deep.eq({
          id: 1,
          name: 'John',
          localizedName: 'Jon',
          points: -1,
          height: 1.7999999523162842
        });
        return expect(last).to.deep.eq({
          id: 3,
          name: 'Brad',
          localizedName: 'Bradley',
          points: -10,
          height: 1.5499999523162842
        });
      });
    });
  });
});
