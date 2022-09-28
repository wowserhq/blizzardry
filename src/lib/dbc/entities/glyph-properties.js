import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  SpellID: r.int32le,
  GlyphSlotFlags: r.int32le,
  SpellIconID: r.int32le,
});
