var quad = require('./')
var test = require('tape')
var bufferEqual = require('buffer-equals')

test('creates the indices for a quad mesh (two triangles)', function(t) {
    t.deepEqual(quad({ type: 'array' }), [0, 1, 2, 0, 2, 3], 'clockwise array')
    t.deepEqual(quad({ clockwise: false, type: 'array' }), [0, 1, 2, 2, 1, 3], 'counter-clockwise')
    t.deepEqual(quad({ count: 2, type: 'array' }), 
      [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7], 
      'counter-clockwise')
    t.deepEqual(quad(), 
      new Uint16Array([0, 1, 2, 0, 2, 3]), 
      'default uint16')
    t.deepEqual(quad({ type: 'uint8' }), 
      new Uint8Array([0, 1, 2, 0, 2, 3]), 
      'dtype uint8')
    t.deepEqual(quad({ type: 'uint8_clamped' }), 
      new Uint8ClampedArray([0, 1, 2, 0, 2, 3]), 
      'dtype uint8_clamped')
    t.equal(bufferEqual(quad({ type: 'buffer' }), new Buffer([0, 1, 2, 0, 2, 3])), true, 'accepts buffer')

    var empty = []
    for (var i=0; i<12; i++)
      empty.push(0)
    var out = empty.slice()
    var ret = quad(out)
    t.equal(ret, out, 'returns input array')
    t.deepEqual(out, [ 0, 1, 2, 0, 2, 3, 0, 0, 0, 0, 0, 0 ])
  
    out = empty.slice()    
    quad(out, { start: 6 })
    t.deepEqual(out, [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 3 ])

    var buf = new Buffer(6)
    quad(buf)
    t.equal(bufferEqual(buf, new Buffer([0, 1, 2, 0, 2, 3])), true)

    //number param is no longer documented but still supported
    out = empty.slice()    
    quad(out, 2)
    t.deepEqual(out, [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ])

    t.deepEqual(quad(2), 
      new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]), 
      'accepts number')

    t.end()
})