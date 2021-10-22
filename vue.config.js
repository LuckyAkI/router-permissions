module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: 'http://localhost:8888',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}