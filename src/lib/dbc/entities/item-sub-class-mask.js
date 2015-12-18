import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  classID: r.uint32le,
  subClassID: r.uint32le,
  name: LocalizedStringRef
});
