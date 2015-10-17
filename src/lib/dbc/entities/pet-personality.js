import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  thresholds: new r.Array(r.uint32le, 3),
  damageModifiers: new r.Array(r.floatle, 3)
});
