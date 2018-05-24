import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: StringRef,
  weaponFlags: r.uint32le,
  bodyFlags: r.uint32le,
  flags: r.uint32le,
  fallbackID: r.uint32le,
  behaviorID: r.uint32le,
  behaviorTier: r.uint32le,
});
