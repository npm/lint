const t = require('tap')
const { existsSync } = require('fs')

const cwd = require('path').resolve(__dirname, '..')
t.formatSnapshot = obj => {
  if (Array.isArray(obj))
    return obj.map(o => t.formatSnapshot(o))
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

const SPAWN_CALLS = []
let SPAWN_EXITCODE = 0
t.afterEach(() => SPAWN_CALLS.length = 0)

const fsMock = { ...require('fs') }
const init = require.resolve('../lib/init.js')
const which = require.resolve('which')
const runInit = t => {
  const { cwd } = process
  const { testdirName } = t
  process.cwd = () => testdirName
  t.mock(init, {
    [which]: {
      sync: cmd => cmd === process.execPath ? 'execPath' : `/which/${cmd}`,
    },
    fs: fsMock,
    child_process: {
      spawnSync: (cmd, args, options) => {
        SPAWN_CALLS.push([cmd, args, options])
        return { exitCode: SPAWN_EXITCODE }
      },
    },
  })
  process.cwd = cwd
}

t.test('basic init', t => {
  t.testdir()
  runInit(t)
  t.matchSnapshot(SPAWN_CALLS)
  t.end()
})

t.test('init with a .eslintrc already present', t => {
  t.testdir({
    '.eslintrc.json': JSON.stringify({}),
  })
  runInit(t)
  t.matchSnapshot(SPAWN_CALLS)
  t.notOk(existsSync(t.testdirName + '/.eslintrc.json'), 'unlink elintrc json')
  t.end()
})

t.test('throw if fail to remove .eslintrc.json', t => {
  t.testdir()
  const { unlinkSync } = fsMock
  t.teardown(() => fsMock.unlinkSync = unlinkSync)
  fsMock.unlinkSync = () => {
    throw Object.assign(new Error('foo'), { code: 'wtf' })
  }
  t.throws(() => {
    runInit(t)
  }, { code: 'wtf' })
  t.matchSnapshot(SPAWN_CALLS)
  t.end()
})

t.test('throw any spawn fails', t => {
  t.testdir()
  SPAWN_EXITCODE = 99
  t.teardown(() => SPAWN_EXITCODE = 0)
  t.throws(() => {
    runInit(t)
  }, { message: 'command failed', exitCode: 99 })
  t.matchSnapshot(SPAWN_CALLS)
  t.end()
})
