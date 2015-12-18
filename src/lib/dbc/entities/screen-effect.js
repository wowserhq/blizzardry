import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  type: r.uint32le,
  rgba: new r.Array(r.uint8, 4),
  edge: r.uint32le,
  bw: r.uint32le,
  unknown: new r.Reserved(r.uint32le),
  lightParamsID: r.int32le,
  soundAmbienceID: r.uint32le,
  zoneMusicID: r.uint32le
});
