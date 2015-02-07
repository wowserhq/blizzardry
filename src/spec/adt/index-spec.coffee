{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')
r = require('restructure')

ADT = require('../../lib/adt')

describe.only 'ADT', ->

  dummy = do ->
    data = fs.readFileSync fixtures + 'Azeroth_38_46.adt'
    stream = new r.DecodeStream data
    ADT.decode stream

  describe '#version', ->
    it 'returns version', ->
      expect(dummy.version).to.eq 18

  describe '#flags', ->
    it 'returns flags', ->
      expect(dummy.flags).to.eq 0
