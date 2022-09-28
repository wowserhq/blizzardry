import r from 'restructure';

import Entity from '../entity';
import StringRef from '../string-ref';

export default Entity({
  ID: r.int32le,
  Flags: r.int32le,
  TurnSpeed: r.floatle,
  PitchSpeed: r.floatle,
  PitchMin: r.floatle,
  PitchMax: r.floatle,
  SeatID: new r.Array(r.int32le, 8),
  MouseLookOffsetPitch: r.floatle,
  CameraFadeDistScalarMin: r.floatle,
  CameraFadeDistScalarMax: r.floatle,
  CameraPitchOffset: r.floatle,
  FacingLimitRight: r.floatle,
  FacingLimitLeft: r.floatle,
  MsslTrgtTurnLingering: r.floatle,
  MsslTrgtPitchLingering: r.floatle,
  MsslTrgtMouseLingering: r.floatle,
  MsslTrgtEndOpacity: r.floatle,
  MsslTrgtArcSpeed: r.floatle,
  MsslTrgtArcRepeat: r.floatle,
  MsslTrgtArcWidth: r.floatle,
  MsslTrgtImpactRadius: new r.Array(r.floatle, 2),
  MsslTrgtArcTexture: StringRef,
  MsslTrgtImpactTexture: StringRef,
  MsslTrgtImpactModel: new r.Array(StringRef, 2),
  CameraYawOffset: r.floatle,
  UilocomotionType: r.int32le,
  MsslTrgtImpactTexRadius: r.floatle,
  VehicleUIIndicatorID: r.int32le,
  PowerDisplayID: new r.Array(r.int32le, 3),
});
