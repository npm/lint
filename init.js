#!/usr/bin/env node
const { sync: whichSync } = require('which')
const { spawnSync } = require('child_process')

const run = (cmd, ...args) => {
  cmd = whichSync(cmd)
  const result = spawnSync(cmd, args, { stdio: 'inherit' })
  if (result.exitCode)
    process.exit(result.exitCode)
}

const pkgs = [
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-standard',
]
run('npm', 'uninstall', ...pkgs)
run('npm', 'install', require('./package.json').name, '--save-dev')
const { unlinkSync } = require('fs')
try {
  unlinkSync('.eslintrc.json')
} catch (er) {
  if (er.code !== 'ENOENT')
    throw er
}
run(process.execPath, require.resolve('./setup.js'), '--force')
