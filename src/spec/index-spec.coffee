{expect, fixtures, memo, sinon} = require('./spec-helper')

Blizzardry = require('../lib')

describe 'Blizzardry', ->

  it 'exposes restructure', ->
    expect(Blizzardry.restructure).to.eq require('../lib/restructure')
    expect(Blizzardry.restructure).to.eq require('restructure')
