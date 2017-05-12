import Main from './main'

new Main();

if (module.hot) {
  module.hot.accept('./main', () => {
    new Main();
  })
}
