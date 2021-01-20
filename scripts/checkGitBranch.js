/**
 * 校验当前分支
 * 如果当前是master 或 develop分支
 * 则必须使用npm run commit命令提交代码
 */
const getRepoInfo = require('git-repo-info')
const { execSync } = require('child_process')

const gitInfo = getRepoInfo()

if (['master', 'develop'].includes(gitInfo.branch)) {
  try {
    execSync('commitlint -E HUSKY_GIT_PARAMS')
  } catch (err) {
    console.error(
      '\x1B[31m%s\x1B[0m',
      'error: master或develop分支提交时请使用yarn commit命令提交!'
    )
    throw new Error('')
  }
}
