# Changelog

### v0.3.3 - December 25, 2015

- Corrects decoding of `ADT#MCAL` alpha maps.

### v0.3.2 - December 23, 2015

- Renamed `renderFlags` to `renderFlagsIndex` on texture units.

### v0.3.1 - December 22, 2015

- Incomplete support for decoding `ADT#MCAL` alpha maps.
- Corrects `ADT#MCSE` sound emitters detection.
- Decodes `WMO#MODD` doodads.
- Decodes `M2#textureUnits`.

### v0.3.0 - December 4, 2015

- Use ES7's export syntax across the board.
- Decodes `M2#animations`.

### v0.2.7 - November 15, 2015

- Corrects `MCLY#flags` and `MCLY#effectID`.
- Exposes `MCLY#compressed`.
- Node 4+ support by updating `ffi` dependency.

### v0.2.6 - September 26, 2015

- Supports floats compressed in 16 bits as `Quat16Float`.
- Corrects `M2.Bone#rotation` decoding as `Quat16Float`s.
- Exposes following on `M2.Skin`:

  - `boneCount`
  - `boneIndices`
  - `signature`
  - `submeshes`
  - `textureUnits`

- `M2.Bone#subMeshID` is now `M2.Bone#submeshID`.
- `ADT#soundEmittersCount` is now `ADT#soundEmitterCount`.
- Deals with incorrect `MCAL` and `MCSH` sizes in `ADT`.
- Decodes `MCSE` only when sound emitters are present in `ADT`.
- Exposes `ADT#MDDF`.
- Exposes `M2#textures` and `M2#renderFlags`.

### v0.2.5 - September 3, 2015

- Exposes `WMO.Group#MOBA`'s render batches.

### v0.2.4 - September 1, 2015

- Correctly index `WMO#MOTX`'s padded strings.

### v0.2.3 - August 30, 2015

- Corrects `WMO#MOMT`'s `materials` property.

### v0.2.2 - August 26, 2015

- WMO support.
- MODF chunk support.
- Optimizes `M2.Skin#triangles` decoding.

### v0.2.1 - August 7, 2015

- Windows support for BLPs, thanks [@petersandor](https://github.com/petersandor)!
- Closes BLP file handle on failure.
- Exposes `DBC#entity` for convenience.

### v0.2.0 - June 28, 2015

- Exposes `restructure`.
- Adds plenty DBC entities.
- Corrects ADT chunk parsing.
- `ADT#flags`.
- `M2#bones` and `M2#keyBoneLookups`.
- `MPQ.File#opened` and `MPQ.File#close`.
- `MPQ.Files#all` is now a getter.
- `WDT#flags` and `WDT#tiles`.
- Normalizes string encoding and decoding.

### v0.1.0 - January 7, 2015

- `MPQ.Files#extract` allows extracting files easily.
- Newly supported formats: ADT, BLP, DBC, M2 and WDT.

### v0.0.1 - November 30, 2014

- Initial release with MPQ support.
