var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '/dist/'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: /node_modules/
        options: {
          // Here you should change 'env' to '@babel/preset-env'
          presets: ['@babel/preset-env']}
      },
      {
        test: /\.(png|jpg|gif|svg|.ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '/dist/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '/dist/'
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js','.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    hot: true
    //noInfo: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html"
    })
  ],
  performance: {
    hints: false
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  const CopyWebpackPlugin = require('copy-webpack-plugin')

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src', 'assets', 'favicon.ico'), to: path.join(__dirname, 'dist', 'favicon.ico') }
    ])
  ])
}
