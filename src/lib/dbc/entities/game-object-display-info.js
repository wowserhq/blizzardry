import r from 'restructure';
import Entity from '../entity';
import StringRef from '../string-ref';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  file: StringRef,
  soundIDs: new r.Array(r.uint32le, 10),
  minBoundingBox: Vec3Float,
  maxBoundingBox: Vec3Float,
  objectEffectPackageID: r.uint32le
});
