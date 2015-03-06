# quad-indices

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Creates the indices for a quad mesh (two triangles), ideal for sprites, 2D lines, font glyphs, billboards, and other features. 

```js
var createIndices = require('quad-indices')

//basic usage:
var quad = createIndices()
// --> new Uint16Array([0, 1, 2, 0, 2, 3])

//N quads:
var quad = createIndices(2)
// --> new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7])

//counter-clockwise
var quad = createIndices({ clockwise: false })
// --> new Uint16Array([0, 1, 2, 2, 1, 3])

//different array type
var quad = createIndices({ dtype: 'uint8' })
// --> new Uint8Array([0, 1, 2, 0, 2, 3])
```

## Usage

[![NPM](https://nodei.co/npm/quad-indices.png)](https://www.npmjs.com/package/quad-indices)

#### `quad = createIndices([opt])`

Returns the indices for a quad mesh. `opt` is optional; it can be a number (the `count` or number of quads to return), or a list of options:

- `count` the number of quads to index, default 1
- `type` (string) the [dtype](https://www.npmjs.com/package/dtype) of the returned array, default '"uint16"'
- `clockwise` (boolean) the orientation of the indices, default true

## License

MIT, see [LICENSE.md](http://github.com/Jam3/quad-indices/blob/master/LICENSE.md) for details.
