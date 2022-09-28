import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  Enchant_Id: r.int32le,
  Maxcount_Inv: r.int32le,
  Maxcount_Item: r.int32le,
  Type: r.int32le,
});
