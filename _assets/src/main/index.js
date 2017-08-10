export default class Main {
  constructor() {
    this.create();
  }

  performHotReload(...args) {
    console.log('[Class::Main] hot reload...', ...args);
    this.destroy();
    this.create();
  }

  create() {
    console.log('[Class::Main] initializing');
  }

  destroy() {
    console.log('[Class::Main] destroying');
  }
}
