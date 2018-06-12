import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  conditionID: r.uint32le,
  male: LocalizedStringRef,
  female: LocalizedStringRef,
  titleMask: r.uint32le,
});
