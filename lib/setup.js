#!/usr/bin/env node

const { resolve } = require('path')
const { readdirSync, writeFileSync, existsSync } = require('fs')
const pjFile = resolve(process.cwd(), 'package.json')
const getPkg = () => {
  try {
    return require(pjFile)
  } catch (er) {
    return {}
  }
}
const pkg = getPkg()
const force = process.argv.includes('--force') ||
  process.argv.includes('-f') ||
  process.env.npm_config_force === 'true'

pkg.scripts = pkg.scripts || {}
const { scripts } = pkg
const lintFiles = []
const entries = readdirSync('.')
if (entries.some(f => /\.[cm]?js$/.test(f)))
  lintFiles.push('*.*js')
if (existsSync('lib'))
  lintFiles.push('lib/**/*.*js')
if (existsSync('test') && lintFiles.length)
  lintFiles.push('test/**/*.*js')
if (!lintFiles.length)
  lintFiles.push('*.*js lib/**/*.*js test/**/*.*js')

const additions = {
  npmclilint: 'npmcli-lint',
  lint: `npm run npmclilint -- ${lintFiles.join(' ')}`,
  lintfix: 'npm run lint -- --fix',
  posttest: 'npm run lint --',
  postsnap: 'npm run lintfix --',
}

if (force)
  Object.assign(scripts, additions)
else
  pkg.scripts = Object.assign(additions, scripts)

writeFileSync(pjFile, JSON.stringify(pkg, null, 2) + '\n')
