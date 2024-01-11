var path = require('path');
module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    publicPath: '/static/'
  },

  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use:['style-loader','css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  },

  devServer: {
    hot: true,
    port: 4000,
    // Proxy everything besides the bundle to Shiny
    proxy: {
      '/': {
        target: 'http://localhost:7219'
      },
      '/websocket': {
        target: 'ws://localhost:7219',
        ws: true
      },
      '/autoreload': {
        target: 'ws://localhost:7219',
        ws: true
      }
    }
  }
};
