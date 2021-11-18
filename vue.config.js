module.exports = {
  configureWebpack: {
    devtool: 'source-map'
    
  },
  devServer: {
    proxy: {
      ///api是后端数据接口的上下文路径
      '/api': {
          //这里的地址是后端数据接口的地址
          target: 'http://111.229.37.167/',
          //允许跨域
          changeOrigin: true,
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
  // productionSourceMap: false
}