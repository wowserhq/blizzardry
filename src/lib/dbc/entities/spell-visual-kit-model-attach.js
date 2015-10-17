import r from 'restructure';
import Entity from '../entity';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  parentKitID: r.uint32le,
  effectID: r.uint32le,
  attachmentID: r.uint32le,
  offset: Vec3Float,
  yaw: r.floatle,
  pitch: r.floatle,
  roll: r.floatle
});
