import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  MapID: r.int32le,
  RangeIndex: r.int32le,
  MinLevel: r.int32le,
  MaxLevel: r.int32le,
  Difficulty: r.int32le,
});
