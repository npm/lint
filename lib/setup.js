#!/usr/bin/env node

const { resolve } = require('path')
const { writeFileSync } = require('fs')
const pjFile = resolve(process.cwd(), 'package.json')
const pkg = require(pjFile)
const force = process.argv.includes('--force') ||
  process.argv.includes('-f') ||
  process.env.npm_config_force === 'true'

pkg.scripts = pkg.scripts || {}
const { scripts } = pkg
const additions = {
  npmclilint: 'npmcli-lint',
  lint: 'npm run npmclilint -- *.js lib/**/*.js test/**/*.js',
  lintfix: 'npm run lint -- --fix',
  posttest: 'npm run lint --',
  postsnap: 'npm run lintfix --',
}

if (force)
  Object.assign(scripts, additions)
else
  pkg.scripts = Object.assign(additions, scripts)

writeFileSync(pjFile, JSON.stringify(pkg, null, 2) + '\n')
