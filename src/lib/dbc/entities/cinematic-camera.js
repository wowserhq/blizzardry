import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  file: StringRef,
  voiceoverID: r.uint32le,
  position: Vec3Float,
  rotation: r.floatle,
});
