const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'galactic-age',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'mercury.html',
      template: './src/html/mercury.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'venus.html',
      template: './src/html/venus.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'mars.html',
      template: './src/html/mars.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'jupiter.html',
      template: './src/html/jupiter.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
