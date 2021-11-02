const t = require('tap')

const cwd = require('path').resolve(__dirname, '..')
t.formatSnapshot = obj => {
  if (Array.isArray(obj)) {
    return obj.map(o => t.formatSnapshot(o))
  }
  if (typeof obj === 'string') {
    return obj.split(cwd).join('{CWD}')
      .replace(/\\/g, '/')
      .replace(/\.cmd$/i, '')
  }
  if (obj && typeof obj === 'object') {
    return Object.entries(obj)
      .map(([k, v]) => [k, t.formatSnapshot(v)])
      .reduce((o, [k, v]) => {
        o[k] = v
        return o
      }, {})
  }
  return obj
}

let SPAWN_CALLED = null
let SPAWN_EXITCODE = 0

const runIndex = (t, ...args) => {
  process.argv = [process.argv[0], process.argv[1], ...args]
  const { exitCode } = process
  t.teardown(() => {
    if (t.passing()) {
      process.exitCode = exitCode
    } else {
      process.exitCode = 1
    }
  })
  t.mock('../lib/index.js', {
    child_process: {
      spawnSync: (cmd, args, options) => {
        SPAWN_CALLED = [cmd, args, options]
        return { exitCode: SPAWN_EXITCODE }
      },
    },
  })
}

t.test('test linting', t => {
  runIndex(t)
  t.matchSnapshot(SPAWN_CALLED, 'called spawn')
  t.equal(process.exitCode, 0, 'exited with 0 status code')
  t.end()
})

t.test('test linting with args', t => {
  runIndex(t, '--fix')
  t.matchSnapshot(SPAWN_CALLED, 'called spawn')
  t.equal(process.exitCode, 0, 'exited with 0 status code')
  t.end()
})

t.test('test linting with exit code', t => {
  SPAWN_EXITCODE = 1
  runIndex(t)
  t.matchSnapshot(SPAWN_CALLED, 'called spawn')
  t.equal(process.exitCode, 1, 'exited with 1 status code')
  t.end()
})
