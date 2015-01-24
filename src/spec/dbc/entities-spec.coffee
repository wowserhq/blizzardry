{expect, fixtures, memo, sinon} = require('../spec-helper')

DBC = require('../../lib/dbc/entities')

describe 'DBC.Entities', ->

  it 'exposes AnimationData entity', ->
    expect(DBC.AnimationData).to.eq require('../../lib/dbc/entities/animation-data')

  it 'exposes Faction entity', ->
    expect(DBC.Faction).to.eq require('../../lib/dbc/entities/faction')

  it 'exposes Map entity', ->
    expect(DBC.Map).to.eq require('../../lib/dbc/entities/map')
