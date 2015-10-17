import r from 'restructure';
import Entity from '../entity';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  radius: r.floatle,
  box: new r.Struct({
    length: r.floatle,
    width: r.floatle,
    height: r.floatle,
    yaw: r.floatle
  })
});
