const fs = require('fs')
const path = require('path')

// 获取packages目录下的文件名，用于commitlint scope校验
const packagesName = fs.readdirSync(path.resolve(__dirname, '..') + '/packages')

module.exports = packagesName
