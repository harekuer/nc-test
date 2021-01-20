const packagesName = require('./scripts/getPackagesName')

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'WIP',
      ],
    ],
    'type-case': [0],
    // scope必须为package的目录名或者root, release(只在发布版本时使用)
    'scope-enum': [2, 'always', packagesName.concat('root', 'release')],
  },
}
