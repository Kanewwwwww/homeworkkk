const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api': {
        target: 'https://localhost:15593',
        secure: false, 
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
