{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')
r = require('restructure')
Entity = require('../../lib/dbc/entity')
LocalizedStringRef = require('../../lib/dbc/localized-string-ref')
StringRef = require('../../lib/dbc/string-ref')

describe 'DBC', ->

  Sample = Entity(
    id: r.uint32le
    name: StringRef
    localizedName: LocalizedStringRef
    points: r.int32le
    height: r.floatle
  )

  dummy = do ->
    data = fs.readFileSync fixtures + 'Sample.dbc'
    stream = new r.DecodeStream data
    Sample.dbc.decode stream

  describe '#signature', ->
    it 'returns WDBC', ->
      expect(dummy.signature).to.eq 'WDBC'

  describe '#recordCount', ->
    it 'returns amount of records', ->
      expect(dummy.recordCount).to.eq 3

  describe '#fieldCount', ->
    it 'returns amount of fields', ->
      expect(dummy.fieldCount).to.eq 21

  describe '#recordSize', ->
    it 'returns size of a single record', ->
      expect(dummy.recordSize).to.eq 84

  describe '#stringBlockSize', ->
    it 'returns size of string block', ->
      expect(dummy.stringBlockSize).to.eq 10

  describe '#stringBlockOffset', ->
    it 'returns offset of string block', ->
      expect(dummy.stringBlockOffset).to.eq 272

  describe '#records', ->
    it 'returns records', ->
      [first, ..., last] = records = dummy.records
      expect(records.length).to.eq 3
      expect(first).to.deep.eq(
        id: 1
        name: 'John'
        localizedName: 'Jon'
        points: -1
        height: 1.7999999523162842
      )
      expect(last).to.deep.eq(
        id: 3
        name: 'Brad'
        localizedName: 'Bradley'
        points: -10
        height: 1.5499999523162842
      )
