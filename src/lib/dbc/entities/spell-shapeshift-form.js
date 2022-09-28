import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  ID: r.int32le,
  BonusActionBar: r.int32le,
  Name_Lang: LocalizedStringRef,
  Flags: r.int32le,
  CreatureType: r.int32le,
  AttackIconID: r.int32le,
  CombatRoundTime: r.int32le,
  CreatureDisplayID: new r.Array(r.int32le, 4),
  PresetSpellID: new r.Array(r.int32le, 8),
});
