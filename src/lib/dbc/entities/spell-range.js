import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  minRangeHostile: r.floatle,
  minRangeFriendly: r.floatle,
  maxRangeHostile: r.floatle,
  maxRangeFriendly: r.floatle,
  type: r.uint32le,
  description: LocalizedStringRef,
  name: LocalizedStringRef
});
