/********************************************************************************
*  vue.config.js                                                                *
*  Author: Denes Solti                                                          *
********************************************************************************/
module.exports = {
  outputDir: 'dist',
  publicPath: '',
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
          options: {
            data: {
              package: require('./package.json')
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
  },
  pages: {
    index: {
      entry: 'src/scripts/index.js',
      template: 'src/index.pug'
    },
    error: {
      entry: 'src/scripts/error.js',
      template: 'src/error.pug'
    }
  }
};