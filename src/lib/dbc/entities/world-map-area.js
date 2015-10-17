import r from 'restructure';
import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  areaID: r.uint32le,
  name: StringRef,
  position: new r.Struct({
    left: r.floatle,
    right: r.floatle,
    top: r.floatle,
    bottom: r.floatle
  }),
  displayMapID: r.int32le,
  defaultDungeonFloor: r.uint32le,
  unknown: new r.Reserved(r.uint32le)
});
