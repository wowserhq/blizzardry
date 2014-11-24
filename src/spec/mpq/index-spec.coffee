{expect, fixtures, memo, sinon} = require('../spec-helper')

fs = require('fs')

Files = require('../../lib/mpq/files')
MPQ = require('../../lib/mpq')

describe 'MPQ', ->

  dummy = memo().is ->
    MPQ.open fixtures + 'dummy.w3m'

  describe '#files', ->
    it 'exposes files object', ->
      expect(dummy().files).to.be.an.instanceof Files

  describe '#path', ->
    it 'exposes path to this archive', ->
      expect(dummy().path).to.eq fixtures + 'dummy.w3m'

  describe '#close', ->
    it 'closes this archive', ->
      dummy().close()

    it 'is idempotent', ->
      dummy().close()
      dummy().close()

  describe '#opened', ->
    context 'when archive is open', ->
      it 'returns true', ->
        expect(dummy().opened).to.be.true

    context 'when archive is closed', ->
      it 'returns false', ->
        dummy().close()
        expect(dummy().opened).to.be.false

  describe '#patched', ->
    it 'returns patched state', ->
      expect(dummy().patched).to.be.false

  describe '.locale', ->
    it 'returns default locale', ->
      expect(MPQ.locale).to.eq 0

  describe '.open', ->
    context 'when omitting a callback', ->
      it 'returns an MPQ instance', ->
        mpq = MPQ.open dummy().path
        expect(mpq).to.be.an.instanceof MPQ

    context 'when given a callback', ->
      it 'invokes callback with MPQ instance', ->
        callback = @sandbox.spy()
        result = MPQ.open dummy().path, callback
        expect(callback).to.have.been.called
        expect(result).to.be.true

    context 'when given a malformed or non-existent archive', ->
      it 'throws an error', ->
        expect ->
          MPQ.open 'non-existent.mpq'
        .to.throw 'archive could not be found or opened'

  describe '.create', ->
    context 'when archive does not yet exist', ->
      it 'creates a new archive', ->
        path = fixtures + 'new.mpq'
        mpq = MPQ.create path
        expect(mpq).to.be.an.instanceof MPQ
        fs.unlinkSync path

    context 'when archive already exists', ->
      it 'throws an error', ->
        expect ->
          MPQ.create dummy().path
        .to.throw 'archive could not be created'
