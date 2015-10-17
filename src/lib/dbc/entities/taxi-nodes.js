import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import { Vec3Float } from '../../types';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  position: Vec3Float,
  name: LocalizedStringRef,
  mountCreatureIDs: new r.Array(r.uint32le, 2)
});
