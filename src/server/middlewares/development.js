/* eslint-disable */

import { resolve } from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../config/webpack.config.dev'

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html')));
};
