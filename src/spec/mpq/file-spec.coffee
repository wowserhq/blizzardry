{expect, fixtures, memo, sinon} = require('../spec-helper')

MPQ = require('../../lib/mpq')

describe 'MPQ.File', ->

  dummy = memo().is ->
    MPQ.open(fixtures + 'dummy.w3m').files.get '(listfile)'

  describe '#name', ->
    it 'returns file name', ->
      expect(dummy().name).to.eq '(listfile)'

  describe '#size', ->
    it 'returns file size in bytes', ->
      expect(dummy().size).to.eq 214
