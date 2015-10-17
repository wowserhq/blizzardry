import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  normal10ManSpellID: r.uint32le,
  normal25ManSpellID: r.uint32le,
  heroic10ManSpellID: r.uint32le,
  heroic25ManSpellID: r.uint32le
});
