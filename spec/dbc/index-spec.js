'use strict';

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _require = require('../spec-helper');

var expect = _require.expect;
var fixtures = _require.fixtures;
var memo = _require.memo;
var sinon = _require.sinon;

var fs = require('fs');
var r = require('restructure');

var DBC = require('../../lib/dbc');
var Entity = require('../../lib/dbc/entity');
var LocalizedStringRef = require('../../lib/dbc/localized-string-ref');
var StringRef = require('../../lib/dbc/string-ref');

describe('DBC', function () {

  var Sample = Entity({
    id: r.uint32le,
    name: StringRef,
    localizedName: LocalizedStringRef,
    points: r.int32le,
    height: r.floatle
  });

  var stream = function stream() {
    var data = fs.readFileSync(fixtures + 'Sample.dbc');
    return new r.DecodeStream(data);
  };

  var dummy = (function () {
    return DBC.decode(stream());
  })();

  describe('#signature', function () {
    it('returns WDBC', function () {
      expect(dummy.signature).to.eq('WDBC');
    });
  });

  describe('#recordCount', function () {
    it('returns amount of records', function () {
      expect(dummy.recordCount).to.eq(3);
    });
  });

  describe('#fieldCount', function () {
    it('returns amount of fields', function () {
      expect(dummy.fieldCount).to.eq(21);
    });
  });

  describe('#recordSize', function () {
    it('returns size of a single record', function () {
      expect(dummy.recordSize).to.eq(84);
    });
  });

  describe('#stringBlockSize', function () {
    it('returns size of string block', function () {
      expect(dummy.stringBlockSize).to.eq(10);
    });
  });

  describe('#stringBlockOffset', function () {
    it('returns offset of string block', function () {
      expect(dummy.stringBlockOffset).to.eq(272);
    });
  });

  describe('#records', function () {
    context('when not using an entity', function () {
      it('returns raw records', function () {
        var records = dummy.records;

        var _records = _toArray(records);

        var record = _records[0];

        var rest = _records.slice(1);

        expect(records.length).to.eq(3);
        expect(record).to.be.an['instanceof'](Buffer);
        expect(record).to.have.length(dummy.recordSize);
      });
    });

    context('when using an entity', function () {
      it('returns records', function () {
        var sample = Sample.dbc.decode(stream());
        var records = sample.records;

        var _records2 = _slicedToArray(records, 3);

        var first = _records2[0];
        var second = _records2[1];
        var last = _records2[2];

        expect(records.length).to.eq(3);
        expect(first).to.deep.eq({
          id: 1,
          name: 'John',
          localizedName: 'Jon',
          points: -1,
          height: 1.7999999523162842
        });
        expect(last).to.deep.eq({
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