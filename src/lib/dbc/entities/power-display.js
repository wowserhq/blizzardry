import r from 'restructure';
import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  type: r.uint32le,
  name: StringRef,
  rgb: new r.Array(r.uint8, 3)
});
