import { register as reg } from "../index";
import { build } from "./build";

export default class Component {
  constructor(parent, rootElement, props) {
    // console.log('Component constructor'); // no log here, though it seems to be working...
    this.parent = parent;
    this.rootElement = rootElement;
    this.props = props;
    // this.registeredFields = registeredFields; // don't think so...

    this.build = build;

    this.init();
  }

  init() {
    // console.log('...init... this:', this);
    const container = document.createElement(this.rootElement);
    this.container = container;
    this.parent.appendChild(container);

    this.applyContainerOptions();

    // WIP...?
    this.register();

    this.render();
  }

  applyContainerOptions = () => {
    const options = this.containerOptions();
    console.log("defineContainerOptions options", options);
    if (options?.id) this.container.id = options.id;
    if (options?.className) this.container.classList.add(options.className);
  };

  containerOptions() {
    return {}
  }

  // WIP...
  registered() {
    return [];
  }

  render() {
    console.error("This is the component base, extend it with something...");
  }

  // WIP...
  // ... SO call to render here is bad, but this might be the place where you reg the callbacks
  // ie: you could assign them with a dictionary/dispatch table on the specific component,
  // and then hook them into global state here
  register() {
    this.registered().forEach((e) => {
      // reg(e, () => this.render());
      reg(e, () => console.info("component-registered callback:", e));
    });
  }

  reRender() {
    this.container.innerHTML = "";
    this.render();
  }
}
