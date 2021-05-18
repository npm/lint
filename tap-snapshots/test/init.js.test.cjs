/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/init.js TAP basic init > must match snapshot 1`] = `
Array [
  Array [
    "/which/npm",
    Array [
      "uninstall",
      "eslint",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-promise",
      "eslint-plugin-standard",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
  Array [
    "/which/npm",
    Array [
      "install",
      "@npmcli/lint",
      "--save-dev",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
  Array [
    "execPath",
    Array [
      "{CWD}/lib/setup.js",
      "--force",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
]
`

exports[`test/init.js TAP init with a .eslintrc already present > must match snapshot 1`] = `
Array [
  Array [
    "/which/npm",
    Array [
      "uninstall",
      "eslint",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-promise",
      "eslint-plugin-standard",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
  Array [
    "/which/npm",
    Array [
      "install",
      "@npmcli/lint",
      "--save-dev",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
  Array [
    "execPath",
    Array [
      "{CWD}/lib/setup.js",
      "--force",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
]
`

exports[`test/init.js TAP throw any spawn fails > must match snapshot 1`] = `
Array [
  Array [
    "/which/npm",
    Array [
      "uninstall",
      "eslint",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-promise",
      "eslint-plugin-standard",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
]
`

exports[`test/init.js TAP throw if fail to remove .eslintrc.json > must match snapshot 1`] = `
Array [
  Array [
    "/which/npm",
    Array [
      "uninstall",
      "eslint",
      "eslint-plugin-import",
      "eslint-plugin-node",
      "eslint-plugin-promise",
      "eslint-plugin-standard",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
  Array [
    "/which/npm",
    Array [
      "install",
      "@npmcli/lint",
      "--save-dev",
    ],
    Object {
      "stdio": "inherit",
    },
  ],
]
`
