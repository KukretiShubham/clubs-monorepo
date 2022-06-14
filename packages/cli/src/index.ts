#!/usr/bin/env node

import chalk from 'chalk'
import debug from 'debug'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { createClub } from './create-club'

const log = debug('dev:clubs:cli')

yargs(hideBin(process.argv))
  .command('create', 'create a new Club', createClub)
  .command('pizza', 'make yourself a pizza', (argv) => {
    console.log('make a pizza')
  })
  .command('soda', 'pour yourself a soda', () => {
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
