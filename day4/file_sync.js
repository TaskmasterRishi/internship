const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync("read.txt")
console.log(first.toString())

writeFileSync("write.txt","Hello",{flag:'a'})