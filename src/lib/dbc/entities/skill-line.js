import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  categoryID: r.uint32le,
  unknown: new r.Reserved(r.uint32le),
  name: LocalizedStringRef,
  description: LocalizedStringRef,
  spellIconID: r.uint32le,
  verb: LocalizedStringRef,
  canLink: new r.Boolean(r.uint32le)
});
