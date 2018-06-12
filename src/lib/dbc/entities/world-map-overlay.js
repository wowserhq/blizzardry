import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  mapAreaID: r.uint32le,
  areaIDs: new r.Array(r.uint32le, 4),
  mapPointX: r.uint32le,
  mapPointY: r.uint32le,
  textureName: StringRef,
  textureWidth: r.uint32le,
  textureHeight: r.uint32le,
  offsetX: r.uint32le,
  offsetY: r.uint32le,
  bounds: new r.Struct({
    top: r.uint32le,
    left: r.uint32le,
    bottom: r.uint32le,
    right: r.uint32le,
  }),
});
