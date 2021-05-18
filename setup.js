#!/usr/bin/env node

const { resolve } = require('path')
const { writeFileSync } = require('fs')
const pjFile = resolve(process.cwd(), 'package.json')
const pkg = require(pjFile)

pkg.scripts = pkg.scripts || {}
const { scripts } = pkg
scripts.npmclilint = 'npmcli-lint'
scripts.lint = scripts.lint || 'npm run npmclilint -- *.js lib/**/*.js test/**/*.js'
scripts.lintfix = scripts.lintfix || 'npm run lint -- --fix'
scripts.posttest = scripts.posttest || 'npm run lint --'
scripts.postsnap = scripts.postsnap || 'npm run lintfix --'

writeFileSync(pjFile, JSON.stringify(pkg, null, 2) + '\n')
