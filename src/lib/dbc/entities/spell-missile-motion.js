import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Name: StringRef,
  ScriptBody: StringRef,
  Flags: r.int32le,
  MissileCount: r.int32le,
});
