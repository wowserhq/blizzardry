import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  position: Vec3Float,
  direction: Vec3Float,
  soundID: r.uint32le,
  mapID: r.uint32le,
  name: StringRef,
});
