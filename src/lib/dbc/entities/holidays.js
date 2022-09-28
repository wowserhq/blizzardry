import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Duration: new r.Array(r.int32le, 1),
  Date: new r.Array(r.int32le, 2),
  Region: r.int32le,
  Looping: r.int32le,
  CalendarFlags: new r.Array(r.int32le, 1),
  HolidayNameID: r.int32le,
  HolidayDescriptionID: r.int32le,
  TextureFilename: StringRef,
  Priority: r.int32le,
  CalendarFilterType: r.int32le,
  Flags: r.int32le,
});
