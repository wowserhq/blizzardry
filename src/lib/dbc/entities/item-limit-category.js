import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  ID: r.int32le,
  Name_Lang: LocalizedStringRef,
  Quantity: r.int32le,
  Flags: r.int32le,
});
