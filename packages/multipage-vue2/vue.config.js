const path = require('path')
module.exports = {
  transpileDependencies: [/slim/, /newchic/, /lit/],
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('css')
  //     .oneOf('normal')
  //     .use('to-string-loader')
  //     .loader('to-string-loader')
  // },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          config: path.resolve(__dirname, '.postcssrc.js'),
        },
      },
    },
  },
}
