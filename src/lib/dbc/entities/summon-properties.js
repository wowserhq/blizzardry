import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Control: r.int32le,
  Faction: r.int32le,
  Title: r.int32le,
  Slot: r.int32le,
  Flags: r.int32le,
});
