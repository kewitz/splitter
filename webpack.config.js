const ENV = process.env.NODE_ENV || 'developer'
console.log("Webpack on %s mode.", ENV)
var path = require('path')
var webpack = require('webpack')

conf = {
  entry: [ './src/index' ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(ENV) },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/,
        include: __dirname },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src')
    ]
  }
}

if (ENV == 'developer') {
  console.log('[Webpack] Pushing dev plugins...')
  conf.entry.push('webpack-hot-middleware/client')
  conf.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin())
  conf.devtool = 'cheap-module-eval-source-map'
} else if (ENV == 'production') {
  console.log('[Webpack] Pushing production plugins...')
  conf.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = conf
