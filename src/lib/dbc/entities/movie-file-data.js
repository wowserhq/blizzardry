import r from 'restructure';
import Entity from '../entity';

export default Entity({
  fileDataID: r.uint32le,
  resolution: r.uint32le
});
