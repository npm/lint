/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/setup.js TAP fresh setup > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in lib and test > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in lib only > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"lib/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in lib only > must match snapshot 2`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"lib/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in root and test > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in root, lib, and test > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup files in test only > must match snapshot 1`] = `
Object {
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
}
`

exports[`test/setup.js TAP setup with some scripts > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "foo": "foo",
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`

exports[`test/setup.js TAP setup with some scripts colliding > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "lint": "eslint",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`

exports[`test/setup.js TAP setup with some scripts colliding, force --force > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`

exports[`test/setup.js TAP setup with some scripts colliding, force -f > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`

exports[`test/setup.js TAP setup with some scripts colliding, force from npm > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`

exports[`test/setup.js TAP setup without scripts > must match snapshot 1`] = `
Object {
  "name": "foo",
  "scripts": Object {
    "lint": "npm run npmclilint -- \\"*.*js\\" \\"lib/**/*.*js\\" \\"test/**/*.*js\\"",
    "lintfix": "npm run lint -- --fix",
    "npmclilint": "npmcli-lint",
    "postsnap": "npm run lintfix --",
    "posttest": "npm run lint --",
  },
  "version": "1.2.3",
}
`
