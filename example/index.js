import {deepCopy } from '../src/index.js'
 // deepClone
const x = {a: {b: 11}}
let y = x

y =deepCopy(x)
y.a.b = 33

console.log(x,y, 'x', 'y')