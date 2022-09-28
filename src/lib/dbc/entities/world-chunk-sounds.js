import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  WorldMapContinentID: r.int32le,
  ChunkX: r.int32le,
  ChunkY: r.int32le,
  SubchunkX: r.int32le,
  SubchunkY: r.int32le,
  ZoneintroMusicID: r.int32le,
  ZoneMusicID: r.int32le,
  SoundAmbienceID: r.int32le,
  SoundProviderPreferencesID: r.int32le,
});
