{expect, fixtures, memo, sinon} = require('../spec-helper')

DBC = require('../../lib/dbc/entities')

describe 'DBC.Entities', ->

  it 'exposes Faction entity', ->
    expect(DBC.Faction).to.eq require('../../lib/dbc/entities/faction')

  it 'exposes Map entity', ->
    expect(DBC.Map).to.eq require('../../lib/dbc/entities/map')
