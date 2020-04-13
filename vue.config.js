const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
// 移除 debugger console
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  publicPath: process.env.VUE_APP_BASE_PATH,
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: config => {
    // 关闭 webpack 的性能提示
    config.performance = {
      hints: false
    }
    // 排除打包模块 // 可采用cdn加载
    config.externals = {
      // vue: 'Vue',
      // axios: 'axios',
      // vuex: 'Vuex',
      // 'vue-router': 'VueRouter'
    }
    // 加载处理
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.css', '.ts'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    }
    const plugins = []
    // 发布模式
    if (process.env.NODE_ENV === 'production') {
      // 启用GZIP压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      // 移除 debugger console
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
    }
    config.plugins = [
      ...config.plugins,
      ...plugins,
      new webpack.ProvidePlugin({
        lodash: 'lodash',
        moment: 'moment'
      })
    ]
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 默认svg 配置处理
    config.module.rules.delete('svg')
    // 新增 svg 处理配置
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  devServer: {
    open: true, // 配置自动启动浏览器
    port: 6688, // 端口号
    https: false,
    hotOnly: false, // https:{type:Boolean}
    proxy: null, // 设置代理
    before: app => {}
  }
}
