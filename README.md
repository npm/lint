# @npmcli/lint

Lint the npmcli way

## USAGE

This package contains two executable scripts.  One for linting your code,
and the other for automatically setting up your package.json to lint code
at convenient times.

### Quick and Opinionated

```
npm exec --package @npmcli/lint -c npmcli-lint-init
```

This installs the dev dependency, removes an existing `.eslintrc.json` and
existing eslint dependencies, and forcibly sets up all your scripts
appropriately.

### Customizable Approach

```
npm i -D @npmcli/lint

# setup package.json with the linting scripts for npm run
npm exec --package @npmcli/lint -c npmcli-lint-setup

# setup package.json, clobbering any existing scripts
npm exec --package @npmcli/lint -c 'npmcli-lint-setup --force'

# just run manually, linting with our style rules
npm exec --package @npmcli/lint -- # any args to eslint go here...
```

The setup script adds the following script targets for `npm run`.  If a
script already exists in that spot, it is not modified unless `--force` is
provided.

* `npmclilint` - runs `npmcli-lint`
* `lint` - runs `npm run npmclilint -- *.js lib/**/*.js test/**/*.js`
* `lintfix` - runs `npm run lint -- --fix` to automatically fix linting
  errors if possible.
* `posttest` - runs `npm run lint --` to lint automatically after running
  tests)
* `postsnap` - runs `npm run lintfix --` to fix lint errors automatically
  when generating snapshots with `tap`.

Appropriate versions of eslint and necessary plugins are listed as peer
dependencies, so that they will be loaded in the project and found where
needed.
