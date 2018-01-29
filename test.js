const { execSync } = require('child_process')
const debug = require('./index')
const bugger = eval(debug)

const foo = { a: 1 }
const boo = { b: false }

bugger()

const zoo = 9

bugger()

foo.a = 22

bugger()

console.log('fin')
