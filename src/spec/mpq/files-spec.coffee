{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')

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

  describe '#extract', ->
    context 'when archive contains given file', ->
      it 'extracts given file', ->
        name = '(attributes)'
        target = fixtures + name
        dummy().extract name, target
        expect(fs.existsSync(target)).to.be.true
        fs.unlinkSync(target)

    context 'when archive does not contain given file', ->
      it 'throws an error', ->
        expect ->
          dummy().extract 'non-existent.txt'
        .to.throw 'file could not be extracted'

  describe '#all', ->
    it 'proxies to #find with predefined pattern', ->
      spy = @sandbox.spy dummy(), 'find'
      results = dummy().all
      expect(spy).to.have.been.calledWith('*')
      expect(results.length).to.eq 18

  describe '#find', ->
    it 'returns search results for given pattern', ->
      results = dummy().find 'war3map.w3*'
      expect(results.length).to.eq 6
