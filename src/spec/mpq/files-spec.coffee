{expect, fixtures, memo, sinon} = require('../spec-helper')

File = require('../../lib/mpq/file')
MPQ = require('../../lib/mpq')

describe 'MPQ.Files', ->

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

  describe '#get', ->
    context 'when archive contains given file', ->
      it 'returns file instance', ->
        file = dummy().get '(listfile)'
        expect(file).to.be.an.instanceof File

    context 'when archive does not contain given file', ->
      it 'returns null', ->
        result = dummy().get 'non-existent.txt'
        expect(result).to.be.null
