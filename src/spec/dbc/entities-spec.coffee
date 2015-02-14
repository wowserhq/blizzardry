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

  it 'exposes AreaGroup entity', ->
    expect(DBC.AreaGroup).to.eq entity('area-group')

  it 'exposes AreaPOI entity', ->
    expect(DBC.AreaPOI).to.eq entity('area-poi')

  it 'exposes AreaTable entity', ->
    expect(DBC.AreaTable).to.eq entity('area-table')

  it 'exposes AreaTrigger entity', ->
    expect(DBC.AreaTrigger).to.eq entity('area-trigger')

  it 'exposes AttackAnimKits entity', ->
    expect(DBC.AttackAnimKits).to.eq entity('attack-anim-kits')

  it 'exposes AttackAnimTypes entity', ->
    expect(DBC.AttackAnimTypes).to.eq entity('attack-anim-types')

  it 'exposes AuctionHouse entity', ->
    expect(DBC.AuctionHouse).to.eq entity('auction-house')

  it 'exposes BankBagSlotPrices entity', ->
    expect(DBC.BankBagSlotPrices).to.eq entity('bank-bag-slot-prices')

  it 'exposes BannedAddOns entity', ->
    expect(DBC.BannedAddOns).to.eq entity('banned-add-ons')

  it 'exposes BarberShopStyle entity', ->
    expect(DBC.BarberShopStyle).to.eq entity('barber-shop-style')

  it 'exposes BattlemasterList entity', ->
    expect(DBC.BattlemasterList).to.eq entity('battlemaster-list')

  it 'exposes CameraShakes entity', ->
    expect(DBC.CameraShakes).to.eq entity('camera-shakes')

  it 'exposes Cfg_Categories entity', ->
    expect(DBC.Cfg_Categories).to.eq entity('cfg-categories')

  it 'exposes Cfg_Configs entity', ->
    expect(DBC.Cfg_Configs).to.eq entity('cfg-configs')

  it 'exposes CharBaseInfo entity', ->
    expect(DBC.CharBaseInfo).to.eq entity('char-base-info')

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
