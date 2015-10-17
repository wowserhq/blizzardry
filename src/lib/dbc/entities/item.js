import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  classID: r.uint32le,
  subClassID: r.uint32le,
  soundOverrideSubClassID: r.int32le,
  materialID: r.uint32le,
  displayInfoID: r.uint32le,
  inventorySlotID: r.uint32le,
  sheathID: r.uint32le
});
