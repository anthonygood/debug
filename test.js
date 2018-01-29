const execSync = require('child_process').execSync
const { debug } = require('./index')

const foo = { a: 1 }
const boo = { b: false }

eval(debug)()

console.log('fin')
