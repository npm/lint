#!/usr/bin/env node

const { spawnSync } = require('child_process')
const { sync: whichSync } = require('which')
const { resolve } = require('path')
const eslintrc = resolve(__dirname, '../.eslintrc.json')
const args = ['-c', eslintrc, ...process.argv.slice(2)]
const result = spawnSync(whichSync('eslint'), args, { stdio: 'inherit' })
process.exit(result.exitCode)
