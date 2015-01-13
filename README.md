# Blizzardry

[![Version](https://img.shields.io/npm/v/blizzardry.svg?style=flat)](https://www.npmjs.org/package/blizzardry)
[![Build Status](https://img.shields.io/travis/timkurvers/blizzardry.svg?style=flat)](https://travis-ci.org/timkurvers/blizzardry)
[![Dependency Status](https://img.shields.io/gemnasium/timkurvers/blizzardry.svg?style=flat)](https://gemnasium.com/timkurvers/blizzardry)
[![Code Climate](https://img.shields.io/codeclimate/github/timkurvers/blizzardry.svg?style=flat)](https://codeclimate.com/github/timkurvers/blizzardry)
[![Coverage](https://img.shields.io/codeclimate/coverage/github/timkurvers/blizzardry.svg?style=flat)](https://codeclimate.com/github/timkurvers/blizzardry)

JavaScript library for mastering the wizardry that is [Blizzard](http://blizzard.com)'s game files.

Licensed under the **MIT** license, see LICENSE for more information.


## Installation

Blizzardry is available via [npm](https://www.npmjs.org/package/blizzardry):

```shell
npm install blizzardry
```

Or for usage in the browser, [soon™](http://www.wowwiki.com/Soon).


## Usage

### [ADT](src/lib/adt)

Usage coming soon.

### [BLP](src/lib/blp)

Texture format holding up to 16 pre-rendered [mipmaps](https://en.wikipedia.org/wiki/Mipmap).

Blizzardry uses [BLPConverter](https://github.com/Kanma/BLPConverter) to process BLPs, which on OSX can be installed using [Homebrew](http://brew.sh/):

````
brew install https://raw.githubusercontent.com/timkurvers/homebrew-games/formula/blp-converter/blp-converter.rb
````

For all other platforms, compile from source and ensure the library ends up on the load path.


```javascript
BLP = require('blizzardry/lib/blp');

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

### [DBC](src/lib/dbc)

Client database format, containing data on items, NPCs, environments and more.

```javascript
r = require('blizzardry/lib/restructure');
DBC = require('blizzardry/lib/dbc');

io = fs.fileReadSync('Faction.dbc');
stream = new r.DecodeStream(io);

dbc = DBC.decode(stream);
dbc.signature   // 'WDBC'
dbc.recordCount // 396
dbc.records[0]  // <Buffer 01 00 00 00 ff ff ff ff ...>
```

To avoid parsing records manually, use one of the [pre-defined DBC entities](src/lib/dbc/entities):

```javascript
Faction = require('blizzardry/lib/dbc/entities/faction');

dbc = Faction.dbc.decode(stream);
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
r = require('blizzardry/lib/restructure');
M2 = require('blizzardry/lib/m2');

io = fs.readFileSync('Rabbit.m2');
stream = new r.DecodeStream(io);

m2 = M2.decode(stream);
m2.signature // 'MD20'
m2.name      // 'Rabbit'
m2.vertices[0].position // [ -0.2735.., -0.0035.., 0.3579.. ]
```

### [MPQ](src/lib/mpq)

Generic archive format, used in [most](http://en.wikipedia.org/wiki/MPQ#Usage_in_gaming) Blizzard games.

Blizzardry uses [StormLib](https://github.com/ladislav-zezula/StormLib) to handle MPQ archives, which on OSX can be installed using [Homebrew](http://brew.sh/):

```
brew install https://raw.githubusercontent.com/timkurvers/homebrew-games/formula/storm-lib/storm-lib.rb
```

For all other platforms, compile from source and ensure the library ends up on the load path.

```javascript
MPQ = require('blizzardry/lib/mpq');

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
  file = mpq.files.get('Creature\\Illidan\\Illidan.m2');
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

Usage coming soon.
