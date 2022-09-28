import r from 'restructure';

import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  ID: r.int32le,
  Question_Lang: LocalizedStringRef,
});
