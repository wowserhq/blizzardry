import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.int32le,
  sizeClass: r.int32le,
  terraintypeSoundId: r.int32le,
  soundEntryId: r.int32le,
  soundEntryIdWater: r.int32le,
});
