var dtype = require('dtype')
var CW = [0, 2, 3]
var CCW = [2, 1, 3]

module.exports = function createQuadElements(opt) {
    if (typeof opt === 'number')
        opt = { count: opt }
    else
        opt = opt||{}
    var type = typeof opt.type === 'string' ? opt.type : 'uint16'
    var count = typeof opt.count === 'number' ? opt.count : 1

    var dir = opt.clockwise !== false ? CW : CCW,
        a = dir[0], 
        b = dir[1],
        c = dir[2]

    var numIndices = count * 6
    var ctor = dtype(type)
    var indices = new ctor(numIndices)
    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0
        indices[i + 1] = j + 1
        indices[i + 2] = j + 2
        indices[i + 3] = j + a
        indices[i + 4] = j + b
        indices[i + 5] = j + c
    }
    return indices
}