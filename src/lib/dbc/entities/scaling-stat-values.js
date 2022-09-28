import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Charlevel: r.int32le,
  ShoulderBudget: r.int32le,
  TrinketBudget: r.int32le,
  WeaponBudget1H: r.int32le,
  RangedBudget: r.int32le,
  ClothShoulderArmor: r.int32le,
  LeatherShoulderArmor: r.int32le,
  MailShoulderArmor: r.int32le,
  PlateShoulderArmor: r.int32le,
  WeaponDPS1H: r.int32le,
  WeaponDPS2H: r.int32le,
  SpellcasterDPS1H: r.int32le,
  SpellcasterDPS2H: r.int32le,
  RangedDPS: r.int32le,
  WandDPS: r.int32le,
  SpellPower: r.int32le,
  PrimaryBudget: r.int32le,
  TertiaryBudget: r.int32le,
  ClothCloakArmor: r.int32le,
  ClothChestArmor: r.int32le,
  LeatherChestArmor: r.int32le,
  MailChestArmor: r.int32le,
  PlateChestArmor: r.int32le,
});
