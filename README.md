# Blizzardry

[![Version](https://img.shields.io/npm/v/blizzardry.svg?style=flat)](https://www.npmjs.org/package/blizzardry)
[![Join chat](https://img.shields.io/badge/gitter-join_chat-blue.svg?style=flat)](https://gitter.im/wowserhq/blizzardry)
[![Build Status](https://img.shields.io/travis/wowserhq/blizzardry.svg?style=flat)](https://travis-ci.org/wowserhq/blizzardry)
[![Known Vulnerabilities](https://snyk.io/test/github/wowserhq/blizzardry/badge.svg)](https://snyk.io/test/github/wowserhq/blizzardry)
[![Maintainability](https://api.codeclimate.com/v1/badges/dc66eca9b4afbbf290b3/maintainability)](https://codeclimate.com/github/wowserhq/blizzardry/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dc66eca9b4afbbf290b3/test_coverage)](https://codeclimate.com/github/wowserhq/blizzardry/test_coverage)

JavaScript library for mastering the wizardry that is [Blizzard]'s game files.

Blizzardry currently focusses on [Wrath of the Lich King] game content.

Licensed under the **MIT** license, see LICENSE for more information.

## Installation

Blizzardry is available via [npm]:

```shell
npm install blizzardry
```

Or for usage in the browser, [soon™].

## Usage

### [ADT](src/lib/adt)

Map tiles containing terrain and object information.

A map tile consists of 16 by 16 map chunks.

```javascript
var r = require('blizzardry/lib/restructure');
var ADT = require('blizzardry/lib/adt');

var io = fs.readFileSync('Azeroth_31_39.adt');
var stream = new r.DecodeStream(io);

var adt = ADT.decode(stream);
adt.version // 18
adt.flags   // 0

adt.MTEX.filenames // ['Tileset\\Wetlands\\Wetlandsdirt01.blp', ...]
adt.MMDX.filenames // ['WORLD\\AZEROTH\\ELWYNN\\PASS...\\ELWYNNBUSH09.M2', ...]

adt.MCNKs.forEach(function(chunk) {
  chunk.areaID   // 2365
  chunk.position // { x: -3733.33, y: 533.33, z: -462.37 }
  chunk.indexX   // 0
  chunk.indexY   // 0
});
```

### [BLP](src/lib/blp)

Texture format holding up to 16 pre-rendered [mipmaps].

Blizzardry uses [BLPConverter] to process BLPs.

#### OSX

Install using [Homebrew]:

```shell
brew install --HEAD https://raw.githubusercontent.com/timkurvers/homebrew-games/formula/blp-converter/blp-converter.rb
```

#### Windows

Download [BLPConverter] and generate the project using [CMake]:

```shell
cmake -DWITH_LIBRARY=YES CMakeLists.txt
```

Build the DLL using Visual Studio in Release mode, rename `blp.dll`
to `libblp.dll` and ensure it ends up on the load PATH.

By default, node-gyp compiles ffi for x64 so make sure `libblp.dll`
matches this architecture.

#### Other platforms

Compile from source and ensure the library ends up on the load path.

```javascript
var BLP = require('blizzardry/lib/blp');

BLP.open('RabbitSkin.blp', function(blp) {
  blp.version     // 2
  blp.mipmapCount // 8

  blp.largest.width  // 128
  blp.largest.height // 128
  blp.largest.data   // <Buffer a2 a2 a2 dd a2 ...>

  blp.smallest.width  // 1
  blp.smallest.height // 1
  blp.smallest.data   // <Buffer 7e 98 af ee>

  // Or directly:
  blp.mipmaps[3].width  // 16
  blp.mipmaps[3].height // 16
});

// Or alternatively:
var blp = BLP.open('RabbitSkin.blp');
// ...
blp.close();
```

### CASC

Archive format, used in [recent Blizzard games]. Supersedes [MPQ](#mpq).

Blizzardry will use [CascLib] to handle CASC storage containers.

Support to be added [soon™].

### [DBC](src/lib/dbc)

Client database format, containing data on items, NPCs, environments and more.

```javascript
var r = require('blizzardry/lib/restructure');
var DBC = require('blizzardry/lib/dbc');

var io = fs.readFileSync('Faction.dbc');
var stream = new r.DecodeStream(io);

var dbc = DBC.decode(stream);
dbc.signature   // 'WDBC'
dbc.recordCount // 396
dbc.records[0]  // <Buffer 01 00 00 00 ff ff ff ff ...>
```

Use [pre-defined DBC entities](src/lib/dbc/entities) for convenience:

```javascript
var Faction = require('blizzardry/lib/dbc/entities/faction');

var dbc = Faction.dbc.decode(stream);
dbc.records.forEach(function(record) {
  record.id          // 576
  record.parentID    // 1118
  record.name        // 'Timbermaw Hold'
  record.description // 'As the last uncorrupted furbolg tribe ...'
});
```

### [M2](src/lib/m2)

3D model format for player characters, NPCs and doodads, among others.

```javascript
var r = require('blizzardry/lib/restructure');
var M2 = require('blizzardry/lib/m2');

var io = fs.readFileSync('Rabbit.m2');
var stream = new r.DecodeStream(io);

var m2 = M2.decode(stream);
m2.signature // 'MD20'
m2.name      // 'Rabbit'
m2.vertices[0].position // [ -0.2735.., -0.0035.., 0.3579.. ]
```

### [MPQ](src/lib/mpq)

Archive format, used in [most Blizzard games]. Superseded by [CASC](#casc).

Blizzardry uses [StormLib] to handle MPQ archives.

#### OSX

Install using [Homebrew]:

```shell
brew tap homebrew/games
brew install stormlib
```

#### Windows

Download [StormLib] and build the DLL in Release mode using `StormLib_dll.vcproj` (Visual Studio),
rename `StormLib.dll` to `libstorm.dll` and ensure it ends up on the load PATH.

By default, node-gyp compiles ffi for x64 so make sure `libstorm.dll`
matches this architecture.

#### Other platforms

Compile from source and ensure the library ends up on the load path.

```javascript
var MPQ = require('blizzardry/lib/mpq');

MPQ.open('common.MPQ', function(mpq) {
  mpq.files.contains('Creature\\Illidan\\Illidan.m2') // true

  // Extract to local filesystem
  mpq.files.extract('Creature\\Illidan\\Illidan.m2', '~/Illidan.m2');

  // Iterate over all entries
  mpq.files.all.forEach(function(result) {
    result.filename // 'SPELLS\\ArcaneBomb_Missle.M2'
    result.name     // 'ArcaneBomb_Missle.M2'
    result.filesize // 28928
  });

  // Search for entries (supports wildcards)
  mpq.files.find('*Illidan*');

  // Accessing file data
  var file = mpq.files.get('Creature\\Illidan\\Illidan.m2');
  file.name // 'Creature\\Illidan\\Illidan.m2'
  file.size // 1888368
  file.data // <Buffer 4d 44 32 30 08 01 00 00 ...>
});

// Or alternatively:
var mpq = MPQ.open('common.MPQ');
// ...
mpq.close();
```

### [WDT](src/lib/wdt)

World definition file specifying which map tiles are present.

A map consists of 64 by 64 [map tiles](#adt).

```javascript
var r = require('blizzardry/lib/restructure');
var WDT = require('blizzardry/lib/wdt');

var io = fs.readFileSync('Azeroth.wdt');
var stream = new r.DecodeStream(io);

var wdt = WDT.decode(stream);
wdt.version // 18
wdt.flags   // 0
wdt.tiles[30 * 64 + 24] // 0
wdt.tiles[30 * 64 + 25] // 1
```

### [WMO](src/lib/wmo)

Root world map definition file listing textures, doodads and orientation.

Actual model data is stored in [group files](#wmo-group).

```javascript
var r = require('blizzardry/lib/restructure');
var WMO = require('blizzardry/lib/wmo');

var io = fs.readFileSync('trolltent.wmo');
var stream = new r.DecodeStream(io);

var wmo = WMO.decode(stream);
wmo.version    // 17
wmo.flags      // 1
wmo.groupCount // 1

wmo.MOTX.filenames // ['DUNGEONS\\TEXTURES\\ROOF\\BM_TROLL_KOTOSKIN01.BLP', ...]
```

#### [WMO Group](src/lib/wmo/group.js)

For a root file named `trolltent.wmo`, its group files are named `trolltent_000.wmo`,
`trolltent_001.wmo` and so forth.

The amount of groups is exposed as `groupCount` in the root file (see above).

```javascript
var r = require('blizzardry/lib/restructure');
var WMOGroup = require('blizzardry/lib/wmo/group');

var io = fs.readFileSync('trolltent_000.wmo');
var stream = new r.DecodeStream(io);

var group = WMOGroup.decode(stream);
group.version // 17
group.flags   // 1
group.MOVT.vertices[0] // [ 3.1721.., 10.4109.., 5.7666.. ]
```

## Development & Contribution

Blizzardry is written in [ES2015], compiled by [Babel], developed with [Gulp]
and tested through [Mocha].

Getting this toolchain up and running, is easy and straight-forward:

1. Get the code:

   ```shell
   git clone git://github.com/wowserhq/blizzardry.git
   ```

2. Download and install [Node.js] – including `npm` – for your platform.

3. Install dependencies:

   ```shell
   npm install
   ```

4. Install [BLPConverter](#blp) and [StormLib](#mpq) as outlined above.

5. Run `npm run gulp` which will automatically build and test the project when
   source files change.

When contributing, please:

- Fork the repository
- Accompany each logical unit of operation with at least one test
- Open a pull request

[Babel]: https://babeljs.io/
[Blizzard]: http://blizzard.com
[BLPConverter]: https://github.com/Kanma/BLPConverter
[CascLib]: https://github.com/ladislav-zezula/CascLib
[CMake]: http://www.cmake.org
[ES2015]: https://babeljs.io/docs/learn-es2015/
[Gulp]: http://gulpjs.com/
[Homebrew]: http://brew.sh/
[Mocha]: http://mochajs.org/
[Node.js]: http://nodejs.org/#download
[StormLib]: https://github.com/ladislav-zezula/StormLib
[Wrath of the Lich King]: http://us.blizzard.com/en-us/games/wrath/
[mipmaps]: https://en.wikipedia.org/wiki/Mipmap
[npm]: https://www.npmjs.com/
[most Blizzard games]: http://en.wikipedia.org/wiki/MPQ#Usage_in_gaming
[recent Blizzard games]: http://en.wikipedia.org/wiki/MPQ#Replacement:_CASC
[soon™]: http://www.wowwiki.com/Soon
