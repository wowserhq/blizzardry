import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  flags: r.uint32le,
  factionGroup: r.uint32le,
  name: LocalizedStringRef,
  shortcut: LocalizedStringRef,
});
