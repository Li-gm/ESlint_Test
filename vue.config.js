const path = require('path')
module.exports = {
  /*baseUrl: "/",*/
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true
    },
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    //useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    //showEslintErrorsInOverlay: false,
    proxy: {
      '/api': {
        target: 'http://111.198.139.89/301RNAseq',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }, // string | Object
    before: app => {
    }
  },
}
