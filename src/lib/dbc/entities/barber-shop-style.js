import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  type: r.uint32le,
  name: LocalizedStringRef,
  additionalName: LocalizedStringRef,
  costModifier: r.floatle,
  raceID: r.uint32le,
  gender: r.uint32le,
  hairID: r.uint32le
});
