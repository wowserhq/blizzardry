{expect, fixtures, memo, sinon} = require('../spec-helper')

MPQ = require('../../lib/mpq')

describe 'MPQ#files', ->

  dummy = memo().is ->
    MPQ.open(fixtures + 'dummy.w3m').files

  describe '#contains', ->
    context 'when archive contains given file', ->
      it 'returns true', ->
        presence = dummy().contains '(listfile)'
        expect(presence).to.be.true

    context 'when archive does not contain given file', ->
      it 'returns false', ->
        presence = dummy().contains 'non-existent.txt'
        expect(presence).to.be.false
