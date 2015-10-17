import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  wmoAreaID: r.uint32le,
  dungeonMapID: r.uint32le,
  minZ: r.floatle
});
