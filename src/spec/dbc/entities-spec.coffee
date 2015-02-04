{expect, fixtures, memo, sinon} = require('../spec-helper')

DBC = require('../../lib/dbc/entities')

describe 'DBC.Entities', ->

  entity = (name) ->
    require("../../lib/dbc/entities/#{name}")

  it 'exposes Achievement entity', ->
    expect(DBC.Achievement).to.eq entity('achievement')

  it 'exposes Achievement_Category entity', ->
    expect(DBC.Achievement_Category).to.eq entity('achievement-category')

  it 'exposes Achievement_Criteria entity', ->
    expect(DBC.Achievement_Criteria).to.eq entity('achievement-criteria')

  it 'exposes AnimationData entity', ->
    expect(DBC.AnimationData).to.eq entity('animation-data')

  it 'exposes ChrClasses entity', ->
    expect(DBC.ChrClasses).to.eq entity('chr-classes')

  it 'exposes ChrRaces entity', ->
    expect(DBC.ChrRaces).to.eq entity('chr-races')

  it 'exposes CreatureDisplayInfo entity', ->
    expect(DBC.CreatureDisplayInfo).to.eq entity('creature-display-info')

  it 'exposes CreatureModelData entity', ->
    expect(DBC.CreatureModelData).to.eq entity('creature-model-data')

  it 'exposes Faction entity', ->
    expect(DBC.Faction).to.eq entity('faction')

  it 'exposes Map entity', ->
    expect(DBC.Map).to.eq entity('map')
