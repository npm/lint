#!/usr/bin/env node
const { sync: whichSync } = require('which')
const { spawnSync } = require('child_process')
const { resolve } = require('path')
const cwd = process.cwd()

const run = (cmd, ...args) => {
  cmd = whichSync(cmd)
  const result = spawnSync(cmd, args, { stdio: 'inherit' })
  if (result.exitCode)
    throw Object.assign(new Error('command failed'), result)
}

const pkgs = [
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-standard',
]
run('npm', 'uninstall', ...pkgs)
run('npm', 'install', require('../package.json').name, '--save-dev')
const { unlinkSync } = require('fs')
try {
  unlinkSync(resolve(cwd, '.eslintrc.json'))
} catch (er) {
  if (er.code !== 'ENOENT')
    throw er
}
run(process.execPath, require.resolve('./setup.js'), '--force')
