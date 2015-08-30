# Changelog

### v0.2.3 - August 30, 2015

- Correct `WMO#MOMT`'s `materials` property.


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
