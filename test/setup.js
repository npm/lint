const t = require('tap')
process.env.npm_config_force = 'false'

const setup = require.resolve('../lib/setup.js')
const argv = process.argv
const runSetup = (t, ...args) => {
  const { cwd } = process
  const { testdirName } = t
  process.cwd = () => testdirName
  process.argv = [process.argv[0], process.argv[1], ...args]
  t.mock(setup)
  process.argv = argv
  process.cwd = cwd
}

t.test('fresh setup', t => {
  t.testdir()
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup without scripts', t => {
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
    }),
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup with some scripts', t => {
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
      scripts: {
        foo: 'foo',
      },
    }),
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup with some scripts colliding', t => {
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
      scripts: {
        lint: 'eslint',
      },
    }),
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup with some scripts colliding, force -f', t => {
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
      scripts: {
        lint: 'eslint',
      },
    }),
  })
  runSetup(t, '-f')
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup with some scripts colliding, force --force', t => {
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
      scripts: {
        lint: 'eslint',
      },
    }),
  })
  runSetup(t, '--force')
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup with some scripts colliding, force from npm', t => {
  process.env.npm_config_force = 'true'
  t.teardown(() => process.env.npm_config_force = 'false')
  t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.2.3',
      scripts: {
        lint: 'eslint',
      },
    }),
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in lib only', t => {
  t.testdir({
    lib: {
      'foo.js': 'console.log("hello")',
    },
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in lib only', t => {
  t.testdir({
    lib: {
      'foo.js': 'console.log("hello")',
    },
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in test only', t => {
  t.testdir({
    test: {
      'foo.js': 'console.log("hello")',
    },
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in root and test', t => {
  t.testdir({
    test: {
      'foo.js': 'console.log("hello")',
    },
    'bar.js': 'console.log("asdf")',
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in lib and test', t => {
  t.testdir({
    test: {
      'foo.js': 'console.log("hello")',
    },
    lib: {
      'bar.js': 'console.log("asdf")',
    },
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})

t.test('setup files in root, lib, and test', t => {
  t.testdir({
    test: {
      'foo.js': 'console.log("hello")',
    },
    lib: {
      'bar.js': 'console.log("asdf")',
    },
    'baz.js': 'console.log("quux")',
  })
  runSetup(t)
  t.matchSnapshot(require(t.testdirName + '/package.json'))
  t.end()
})
