class Store {
  constructor() {
    this.state = null;
    this.stateRegistered = {};
    this.registered = {};
  }

  initState(initialState) {
    this.state = initialState;
  }

  setState(key, val) {
    this.state[key] = val;
    console.log("NEW STATE", this.state);

    this.statePublish(key);
  }

  stateRegister(field, callback) {
    this.stateRegistered[field] = callback;
    // console.log('STATE REGISTERED', this.stateRegistered);
  }

  statePublish(field) {
    // console.log('attempt to statePublish ', field);
    if (this.stateRegistered[field]) this.stateRegistered[field]();
    // console.log('STATE PUBLISHED ', field);
  }

  register(field, callback) {
    this.registered[field] = callback;
    // console.log('REGISTERED', registered);
  }

  publish(field) {
    // console.log('attempt to publish ', field);
    if (this.registered[field]) this.registered[field]();
    // console.log('PUBLISHED ', field);
  }
}

const store = new Store();
export default store;
