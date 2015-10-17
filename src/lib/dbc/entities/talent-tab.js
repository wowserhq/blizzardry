import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import StringRef from '../string-ref';

export default Entity({
  id: r.uint32le,
  name: LocalizedStringRef,
  spellIconID: r.uint32le,
  raceMask: r.uint32le,
  classMask: r.uint32le,
  creatureFamilyMask: r.uint32le,
  order: r.uint32le,
  backgroundFile: StringRef
});
