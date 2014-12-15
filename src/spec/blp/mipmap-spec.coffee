{expect, fixtures, memo, sinon} = require('../spec-helper')

BLP = require('../../lib/blp')
Mipmap = require('../../lib/blp/mipmap')

describe 'BLP.Mipmap', ->

  dummy = memo().is ->
    BLP.open(fixtures + 'RabbitSkin.blp').largest

  describe '#level', ->
    it 'returns mipmap level', ->
      expect(dummy().level).to.eq 0

  describe '#width', ->
    it 'returns texture width', ->
      expect(dummy().width).to.eq 128

  describe '#height', ->
    it 'returns texture height', ->
      expect(dummy().height).to.eq 128

  describe '#data', ->
    it 'returns pixel data', ->
      expect(dummy().data.length).to.eq 65536
