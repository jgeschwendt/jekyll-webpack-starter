import Main from './main';

var main = new Main();

if (module.hot) {
  module.hot.accept('./main', (...args) => main.hotReload(...args));
}
