{expect, fixtures, memo, sinon} = require('../spec-helper')

DBC = require('../../lib/dbc/entities')

describe 'DBC.Entities', ->

  entity = (name) ->
    require("../../lib/dbc/entities/#{name}")

  it 'exposes AnimationData entity', ->
    expect(DBC.AnimationData).to.eq entity('animation-data')

  it 'exposes CreatureDisplayInfo entity', ->
    expect(DBC.CreatureDisplayInfo).to.eq entity('creature-display-info')

  it 'exposes CreatureModelData entity', ->
    expect(DBC.CreatureModelData).to.eq entity('creature-model-data')

  it 'exposes Faction entity', ->
    expect(DBC.Faction).to.eq entity('faction')

  it 'exposes Map entity', ->
    expect(DBC.Map).to.eq entity('map')
