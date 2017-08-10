import Main from './main';

var main = new Main();

if (module.hot) {
  module.hot.accept('./main', (...args) => main.performHotReload(...args));
}

// This should run last
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
