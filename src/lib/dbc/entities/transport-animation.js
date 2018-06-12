import r from 'restructure';

import Entity from '../entity';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  transportID: r.uint32le,
  timeIndex: r.uint32le,
  position: Vec3Float,
  sequenceID: r.uint32le,
});
