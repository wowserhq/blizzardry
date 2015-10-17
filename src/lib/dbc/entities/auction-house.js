import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';

export default Entity({
  id: r.uint32le,
  factionID: r.uint32le,
  auctionFee: r.uint32le,
  despositTax: r.uint32le,
  name: LocalizedStringRef
});
