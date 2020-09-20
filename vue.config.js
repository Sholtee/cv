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
    devtool: 'source-map'
  },
  pages: {
    index: {
      entry: 'src/scripts/main.js',
    }
  }
};