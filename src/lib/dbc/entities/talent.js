import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  tabID: r.uint32le,
  tierID: r.uint32le,
  columnIndex: r.uint32le,
  spellRankIDs: new r.Array(r.uint32le, 9),
  preqreqTalentIDs: new r.Array(r.uint32le, 3),
  preqreqRanks: new r.Array(r.uint32le, 3),
  flags: r.uint32le,
  requiredSpellID: r.uint32le,
  unknowns: new r.Reserved(r.uint32le, 2)
});
