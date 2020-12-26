const { resolve, join } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  target: 'web',
  entry: ['./src/client/index.jsx'],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].js'
  },
  // Disable big warning telling that asset went over the maximum recommended size (250kb)
  performance: { hints: false },
  module: {
    rules: [
      // Remove this rule to disable automatic linter
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      // end of linter rull
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              import: false,
              modules: true
            }
          },
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
  resolve: {
    modules: ['node_modules', join('src', 'client')],
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new MiniCssExtractPlugin()]
  }
};
