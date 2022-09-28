import r from 'restructure';

import Entity from '../entity';

export default Entity({
  ID: r.int32le,
  WaveAmp: r.floatle,
  WaveTimeScale: r.floatle,
  RollAmp: r.floatle,
  RollTimeScale: r.floatle,
  PitchAmp: r.floatle,
  PitchTimeScale: r.floatle,
  MaxBank: r.floatle,
  MaxBankTurnSpeed: r.floatle,
  SpeedDampThresh: r.floatle,
  SpeedDamp: r.floatle,
});
