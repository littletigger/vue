module.exports = {
    devServer: {
      proxy: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
          target: 'http://localhost:8888',   //代理接口
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''    //代理的路径
          }
        }
      },
      
      host: '127.0.0.1',
      port: 8081,
      https: false,
      hotOnly: false,
      // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
      proxy: null, // string | Object
      before: app => {
          // `app` 是一个 express 实例
      }

    }
  }
