import r from 'restructure';
import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  bloodRuneCost: r.uint32le,
  unholyRuneCost: r.uint32le,
  frostRuneCost: r.uint32le,
  runePowerGain: r.uint32le
});
