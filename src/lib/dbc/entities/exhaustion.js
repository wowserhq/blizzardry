import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  xp: r.uint32le,
  factor: r.floatle,
  outdoorHours: r.floatle,
  innHours: r.floatle,
  name: LocalizedStringRef,
  threshold: r.floatle
});
