import { build } from "./build";
import Store from "./store";

const store = new Store();

export default class Component {
  constructor(parent, rootElement, props={}) {
    // console.log('COMPONENT CONSTRUCTOR');
    this.parent = parent;
    this.rootElement = rootElement;
    this.props = props;

    this.build = build;

    this.store = store;
    // console.log('this.store', this.store);
    // console.log('COMPONENT PROPS', this.props);

    if (this.props.initialState) {
      // console.log('THiS PROPS INITIALSTATE');
      // TODO only allow once?
      this.store.initState(this.props.initialState);
      // console.log('store state initialized:', this.store);
    }

    this.init();
  }

  // TODO as get store
  getStore() {
    return this.store;
  }

  init() {
    // console.log('...init... this:', this);
    const container = document.createElement(this.rootElement);
    this.container = container;
    this.parent.appendChild(container);

    this.applyContainerOptions();

    this.clearAndRender();
  }

  applyContainerOptions = () => {
    const options = this.containerOptions();
    // console.log("defineContainerOptions options", options);
    if (options?.id) this.container.id = options.id;
    if (options?.className) this.container.classList.add(options.className);
  };

  containerOptions() {
    return {}
  }


  clearAndRender() {
    // console.log('Clear and render');
    this.container.innerHTML = ''
    this.render()
  }

  render() {
    console.error("This is the component base, extend it with something...");
  }
}
