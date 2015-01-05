# Blizzardry

[![Version](https://img.shields.io/npm/v/blizzardry.svg?style=flat)](https://www.npmjs.org/package/blizzardry)
[![Build Status](https://img.shields.io/travis/timkurvers/blizzardry.svg?style=flat)](https://travis-ci.org/timkurvers/blizzardry)
[![Dependency Status](https://img.shields.io/gemnasium/timkurvers/blizzardry.svg?style=flat)](https://gemnasium.com/timkurvers/blizzardry)
[![Code Climate](https://img.shields.io/codeclimate/github/timkurvers/blizzardry.svg?style=flat)](https://codeclimate.com/github/timkurvers/blizzardry)

JavaScript library for mastering the wizardry that is [Blizzard](http://blizzard.com)'s game files.

Licensed under the **MIT** license, see LICENSE for more information.


## Installation

Documentation to follow shortly.


## Requirements

- [StormLib](https://github.com/ladislav-zezula/StormLib) (MPQ support)
- [BLPConverter](https://github.com/Kanma/BLPConverter) (BLP support)

### OSX

Install these libraries easily using [Homebrew](http://brew.sh/):

```
brew install https://raw.githubusercontent.com/timkurvers/homebrew-games/formula/blp-converter/blp-converter.rb
```

```
brew install https://raw.githubusercontent.com/timkurvers/homebrew-games/formula/storm-lib/storm-lib.rb
```

### Other platforms

Compile these libraries from source and ensure they end up on the load path.


## Usage

### [ADT](src/lib/adt)

Usage coming soon.

### [BLP](src/lib/blp)

Texture format holding up to 16 pre-rendered [mipmaps](https://en.wikipedia.org/wiki/Mipmap).

Blizzardry uses [BLPConverter](https://github.com/Kanma/BLPConverter) to process BLPs.

```javascript
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

blp = BLP.open('RabbitSkin.blp')
// ...
blp.close()
```

### [DBC](src/lib/dbc)

Usage coming soon.

### [M2](src/lib/m2)

Usage coming soon.

### [MPQ](src/lib/mpq)

Usage coming soon.

### [WDT](src/lib/wdt)

Usage coming soon.
