export default class Store {
  constructor() {
    this.state = null;
    this.registered = {};
  }

  initState(initialState) {
    this.state = initialState;
  }

  setState(key, val) {
    this.state[key] = val;
    console.log("NEW STATE", this.state);

    this.publish(key);
  }

  publish(field) {
    console.log('attempt to publish ', field);
    if (this.registered[field]) this.registered[field]();
    // console.log('PUBLISHED ', field);
  }

  register(field, callback) {
    this.registered[field] = callback;
    // console.log('REGISTERED', registered);
  }
}