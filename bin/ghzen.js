#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
  , help ='prints one of The Zen of GitHub (https://api.github.com/zen) or all with -a flag'
  , version = require('../package.json').version
  , zen = require('../lib/zen')

if (argv.h || argv.help) console.log(help)
else if (argv.v || argv.version) console.log(version)
else if (argv.a || argv.all) zen.forEach(function(zen){ console.log(zen) })
else console.log(zen.random())

