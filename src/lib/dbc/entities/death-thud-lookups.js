import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  SizeClass: r.int32le,
  TerraintypeSoundID: r.int32le,
  SoundEntryID: r.int32le,
  SoundEntryIDWater: r.int32le,
});
