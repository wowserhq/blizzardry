import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  faction: r.int32le,
  mapID: r.int32le,
  previousID: r.uint32le,
  name: LocalizedStringRef,
  description: LocalizedStringRef,
  categoryID: r.uint32le,
  points: r.uint32le,
  order: r.uint32le,
  flags: r.uint32le,
  spellIconID: r.uint32le,
  reward: LocalizedStringRef,
  minimumCriteria: r.uint32le,
  criteriaTreeID: r.uint32le
});
