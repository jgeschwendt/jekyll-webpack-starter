const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const argv = require('minimist')(process.argv.slice(2));
const root = path.resolve(__dirname, '..');

const configFile = fs.readFileSync(path.resolve(root, '_config.yml'), 'utf8');
const config = require('js-yaml').safeLoad(configFile);

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: [
      './modules/main/index.js',
      './modules/main/index.scss',
    ],
    vendor: [
      './modules/vendor/index.js',
      './modules/vendor/index.scss',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(root, 'assets'),
    publicPath: `/assets`
  },
  devServer: {
    contentBase: path.join(root, "_site"),
    watchContentBase: true,
  },
  resolve: {
    modules: [
      'modules',
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader',
              options: {
                data: `$env: ${!argv.hot ? 'production' : 'development'};`,
                precision: 10,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      disable: (argv.hot),
      filename: '[name].css',
    }),
  ]
}
