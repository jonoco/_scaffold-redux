var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        exclude: /node_modules/, test: /\.js?$/, loader: 'babel' 
      },{ 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel'], 
        include: path.join(__dirname,'src')
      },{
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ],
    query: { presets: ['es2015', 'react', 'stage-2'] }
  },
  postcss: function() {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
