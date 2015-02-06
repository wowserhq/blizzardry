{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')
r = require('restructure')

WDT = require('../../lib/wdt')

describe 'WDT', ->

  dummy = do ->
    data = fs.readFileSync fixtures + 'Azeroth.wdt'
    stream = new r.DecodeStream data
    WDT.decode stream

  describe '#version', ->
    it 'returns version identifier', ->
      expect(dummy.version).to.eq 18

  describe '#flags', ->
    it 'returns flags', ->
      expect(dummy.flags).to.eq 0

  describe '#tiles', ->
    it 'returns tiles', ->
      expect(dummy.tiles.length).to.eq 64 * 64
      expect(dummy.tiles[2000...2064]).to.deep.eq [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
      ]
