import r from 'restructure';
import Entity from '../entity';
import LocalizedStringRef from '../localized-string-ref';
import { Vec3Float } from '../../types';

const Icon = new r.Struct({
  regular: r.uint32le,
  damaged: r.uint32le,
  destroyed: r.uint32le
});

export default Entity({
  id: r.uint32le,
  importance: r.uint32le,

  neutralIcon: Icon,
  allianceIcon: Icon,
  hordeIcon: Icon,

  factionID: r.uint32le,
  position: Vec3Float,
  mapID: r.uint32le,
  flags: r.uint32le,
  areaID: r.uint32le,

  name: LocalizedStringRef,
  description: LocalizedStringRef,

  worldStateID: r.uint32le,
  worldMapLink: r.uint32le
});
