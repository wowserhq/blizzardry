import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Field01: r.int32le,
  ItemExtendedCost: r.int32le,
  Field03: r.int32le,
});
