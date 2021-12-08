const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
                                                                                                                                                                
          use: ["style-loader", "css-loader", "sass-loader"], 
      },
      {
        test: /\.sass$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phaser Game',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
            from: path.resolve(__dirname, 'index.html'),
            to: path.resolve(__dirname, 'build'),
          },
          {
            from: path.resolve(__dirname, 'static'),
            to: path.resolve(__dirname, 'build'),
          },
      ]
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'build/static'),
    hot: true,
    port: 3000,
    compress: true,
  },
}