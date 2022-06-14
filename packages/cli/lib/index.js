#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var debug_1 = __importDefault(require('debug'))
var yargs_1 = __importDefault(require('yargs'))
var helpers_1 = require('yargs/helpers')
var create_club_1 = require('./create-club')
var log = (0, debug_1.default)('dev:clubs:cli')
;(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
  .command('create', 'create a new Club', create_club_1.createClub)
  .command('pizza', 'make yourself a pizza', function (argv) {
    console.log('make a pizza')
  })
  .command('soda', 'pour yourself a soda', function () {
    console.log('pour yourself a soda...')
  })
  .parse()
// async function main() {
//   // console.log('hello world')
//   yargs(hideBin(process.argv))
//     .command()
// }
// main()
//   .then(() => process.exit(process.exitCode))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
