// Singleton.js

class Singleton {
  static instance = null;
  data = [];

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // Métodos de la instancia
  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Exportamos la única instancia del Singleton
export default new Singleton();