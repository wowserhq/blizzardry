import r from 'restructure';

import Entity from '../entity';

export default Entity({
  id: r.uint32le,
  highlightSky: new r.Boolean(r.uint32le),
  lightSkyboxID: r.uint32le,
  glow: r.floatle,
  waterShallowAlpha: r.floatle,
  waterDeepAlpha: r.floatle,
  oceanShallowAlpha: r.floatle,
  oceanDeepAlpha: r.floatle,
  flags: r.uint32le,
});
