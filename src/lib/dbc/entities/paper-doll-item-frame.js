import r from 'restructure';
import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  name: StringRef,
  slotIcon: StringRef,
  slotNumber: r.uint32le
});
