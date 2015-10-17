import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  spellItemEnchantmentIDs: new r.Array(r.uint32le, 5),
  suffix: LocalizedStringRef
});
