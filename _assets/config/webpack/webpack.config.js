const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const argv = require('minimist')(process.argv.slice(2));
const root = path.resolve(__dirname, '..', '..', '..');

const configFile = fs.readFileSync(path.resolve(root, '_config.yml'), 'utf8');
const config = require('js-yaml').safeLoad(configFile);

const WEBPACK_CONFIG = {
  context: path.resolve(root, '_assets'),
  devtool: 'source-map',
  entry: {
    main: [
      './src/index.js',
      './src/index.scss',
    ],
    vendor: [
      './src/vendor/bootstrap/bootstrap.js',
      './src/vendor/bootstrap/bootstrap.scss',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(root, 'assets'),
    publicPath: `/assets`
  },
  devServer: {
    contentBase: path.resolve(root, "_site"),
    watchContentBase: true,
  },
  resolve: {
    modules: [
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
            { loader: 'cache-loader' },
            { loader: 'css-loader' },
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     config: {
            //       path: path.resolve(root, 'assets'),
            //       ctx: config
            //     },
            //     sourceMap: true,
            //   },
            // },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader',
              options: {
                data: `$env: ${argv.hot ? 'development' : 'production'};`,
                precision: 10,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: 'popper.js',
    }),
    new ExtractTextPlugin({
      allChunks: true,
      disable: (argv.hot),
      filename: '[name].css',
    }),
  ]
}

if (argv.p) {
  console.log('Adding ServiceWorker Plugin');
  WEBPACK_CONFIG.plugins.push(new OfflinePlugin({
    AppCache: false,
    ServiceWorker: {
      output: 'scripts/sw.js',
    },
    caches: {
      main: [':rest:'],
    },
    publicPath: '/assets',
    relativePaths: false,
    safeToUseOptionalCaches: true,
  }));
}

module.exports = WEBPACK_CONFIG;
