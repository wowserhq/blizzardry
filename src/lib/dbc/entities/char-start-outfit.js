import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  raceID: r.uint8,
  classID: r.uint8,
  gender: r.uint8,
  outfitID: r.uint8,

  itemIDs: new r.Array(r.int32le, 24),
  displayInfoIDs: new r.Array(r.int32le, 24),
  inventoryTypes: new r.Array(r.int32le, 24)
});
