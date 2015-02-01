{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')

MPQ = require('../../lib/mpq')

describe 'MPQ.File', ->

  dummy = memo().is ->
    MPQ.open(fixtures + 'dummy.w3m').files.get '(listfile)'

  describe '#close', ->
    it 'closes this file', ->
      dummy().close()

    it 'is idempotent', ->
      dummy().close()
      dummy().close()

  describe '#opened', ->
    context 'when file is open', ->
      it 'returns true', ->
        expect(dummy().opened).to.be.true

    context 'when file is closed', ->
      it 'returns false', ->
        dummy().close()
        expect(dummy().opened).to.be.false

  describe '#name', ->
    it 'returns file name', ->
      expect(dummy().name).to.eq '(listfile)'

  describe '#size', ->
    it 'returns file size in bytes', ->
      expect(dummy().size).to.eq 214

  describe '#data', ->
    it 'returns file contents in a buffer', ->
      listfile = fs.readFileSync fixtures + '(listfile)'
      expect(dummy().data).to.deep.eq listfile
