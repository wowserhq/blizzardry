import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  message: LocalizedStringRef,
  raidDuration: r.uint32le,
  maxPlayers: r.uint32le,
  name: StringRef
});
