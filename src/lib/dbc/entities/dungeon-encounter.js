import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  mapID: r.uint32le,
  difficulty: r.uint32le,
  order: r.int32le,
  bit: r.uint32le,
  name: LocalizedStringRef,
  spellIconID: r.uint32le
});
