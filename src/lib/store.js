export default class Store {
  constructor(state) {
    this.state = state;
    this.registered = {};
  }

  setState(key, val) {
    this.state[key] = val;
    console.log("NEW STATE", state);

    this.publish(key);
  }

  publish(field) {
    // console.log('attempt to publish ', field);
    if (this.registered[field]) this.registered[field]();
    // console.log('PUBLISHED ', field);
  }

  register(field, callback) {
    this.registered[field] = callback;
    // console.log('REGISTERED', registered);
  }
}