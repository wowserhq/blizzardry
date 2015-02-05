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
