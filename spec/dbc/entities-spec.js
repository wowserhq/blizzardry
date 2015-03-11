var DBC, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

DBC = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  var entity;
  entity = function(name) {
    return require("../../lib/dbc/entities/" + name);
  };
  it('exposes Achievement entity', function() {
    return expect(DBC.Achievement).to.eq(entity('achievement'));
  });
  it('exposes Achievement_Category entity', function() {
    return expect(DBC.Achievement_Category).to.eq(entity('achievement-category'));
  });
  it('exposes Achievement_Criteria entity', function() {
    return expect(DBC.Achievement_Criteria).to.eq(entity('achievement-criteria'));
  });
  it('exposes AnimationData entity', function() {
    return expect(DBC.AnimationData).to.eq(entity('animation-data'));
  });
  it('exposes AreaGroup entity', function() {
    return expect(DBC.AreaGroup).to.eq(entity('area-group'));
  });
  it('exposes AreaPOI entity', function() {
    return expect(DBC.AreaPOI).to.eq(entity('area-poi'));
  });
  it('exposes AreaTable entity', function() {
    return expect(DBC.AreaTable).to.eq(entity('area-table'));
  });
  it('exposes AreaTrigger entity', function() {
    return expect(DBC.AreaTrigger).to.eq(entity('area-trigger'));
  });
  it('exposes AttackAnimKits entity', function() {
    return expect(DBC.AttackAnimKits).to.eq(entity('attack-anim-kits'));
  });
  it('exposes AttackAnimTypes entity', function() {
    return expect(DBC.AttackAnimTypes).to.eq(entity('attack-anim-types'));
  });
  it('exposes AuctionHouse entity', function() {
    return expect(DBC.AuctionHouse).to.eq(entity('auction-house'));
  });
  it('exposes BankBagSlotPrices entity', function() {
    return expect(DBC.BankBagSlotPrices).to.eq(entity('bank-bag-slot-prices'));
  });
  it('exposes BannedAddOns entity', function() {
    return expect(DBC.BannedAddOns).to.eq(entity('banned-add-ons'));
  });
  it('exposes BarberShopStyle entity', function() {
    return expect(DBC.BarberShopStyle).to.eq(entity('barber-shop-style'));
  });
  it('exposes BattlemasterList entity', function() {
    return expect(DBC.BattlemasterList).to.eq(entity('battlemaster-list'));
  });
  it('exposes CameraShakes entity', function() {
    return expect(DBC.CameraShakes).to.eq(entity('camera-shakes'));
  });
  it('exposes Cfg_Categories entity', function() {
    return expect(DBC.Cfg_Categories).to.eq(entity('cfg-categories'));
  });
  it('exposes Cfg_Configs entity', function() {
    return expect(DBC.Cfg_Configs).to.eq(entity('cfg-configs'));
  });
  it('exposes CharBaseInfo entity', function() {
    return expect(DBC.CharBaseInfo).to.eq(entity('char-base-info'));
  });
  it('exposes CharHairGeosets entity', function() {
    return expect(DBC.CharHairGeosets).to.eq(entity('char-hair-geosets'));
  });
  it('exposes CharSections entity', function() {
    return expect(DBC.CharSections).to.eq(entity('char-sections'));
  });
  it('exposes CharStartOutfit entity', function() {
    return expect(DBC.CharStartOutfit).to.eq(entity('char-start-outfit'));
  });
  it('exposes CharTitles entity', function() {
    return expect(DBC.CharTitles).to.eq(entity('char-titles'));
  });
  it('exposes CharacterFacialHairStyles entity', function() {
    return expect(DBC.CharacterFacialHairStyles).to.eq(entity('character-facial-hair-styles'));
  });
  it('exposes ChatChannels entity', function() {
    return expect(DBC.ChatChannels).to.eq(entity('chat-channels'));
  });
  it('exposes ChatProfanity entity', function() {
    return expect(DBC.ChatProfanity).to.eq(entity('chat-profanity'));
  });
  it('exposes ChrClasses entity', function() {
    return expect(DBC.ChrClasses).to.eq(entity('chr-classes'));
  });
  it('exposes ChrRaces entity', function() {
    return expect(DBC.ChrRaces).to.eq(entity('chr-races'));
  });
  it('exposes CinematicCamera entity', function() {
    return expect(DBC.CinematicCamera).to.eq(entity('cinematic-camera'));
  });
  it('exposes CinematicSequences entity', function() {
    return expect(DBC.CinematicSequences).to.eq(entity('cinematic-sequences'));
  });
  it('exposes CreatureDisplayInfo entity', function() {
    return expect(DBC.CreatureDisplayInfo).to.eq(entity('creature-display-info'));
  });
  it('exposes CreatureDisplayInfoExtra entity', function() {
    return expect(DBC.CreatureDisplayInfoExtra).to.eq(entity('creature-display-info-extra'));
  });
  it('exposes CreatureModelData entity', function() {
    return expect(DBC.CreatureModelData).to.eq(entity('creature-model-data'));
  });
  it('exposes CreatureMovementInfo entity', function() {
    return expect(DBC.CreatureMovementInfo).to.eq(entity('creature-movement-info'));
  });
  it('exposes CreatureSpellData entity', function() {
    return expect(DBC.CreatureSpellData).to.eq(entity('creature-spell-data'));
  });
  it('exposes CreatureType entity', function() {
    return expect(DBC.CreatureType).to.eq(entity('creature-type'));
  });
  it('exposes CurrencyCategory entity', function() {
    return expect(DBC.CurrencyCategory).to.eq(entity('currency-category'));
  });
  it('exposes CurrencyTypes entity', function() {
    return expect(DBC.CurrencyTypes).to.eq(entity('currency-types'));
  });
  it('exposes DanceMoves entity', function() {
    return expect(DBC.DanceMoves).to.eq(entity('dance-moves'));
  });
  it('exposes Faction entity', function() {
    return expect(DBC.Faction).to.eq(entity('faction'));
  });
  return it('exposes Map entity', function() {
    return expect(DBC.Map).to.eq(entity('map'));
  });
});
