import { register as reg } from '../index';
import { build } from './build';

export default class Component {
  constructor(parent, rootElement, registeredFields) { // or is it stateFields? or both?
    this.parent = parent;
    this.rootElement = rootElement;
    // this.registeredFields = registeredFields;

    this.build = build;

    this.init();
  }

  init() {
    this.container = document.createElement(this.rootElement);
    this.parent.appendChild(this.container)

    // WIP...
    this.register()

    this.render();
  }

  // WIP...
  registered() {
    return [];
  }

  render() {
    console.log('This is the component base, extend it with something...'); 
  }

  // WIP...
  // ... SO call to render here is bad, but this might be the place where you reg the callbacks
  // ie: you could assign them with a dictionary/dispatch table on the specific component,
  // and then hook them into global state here
  register() {
    this.registered().forEach(e => {
      // reg(e, () => this.render());
      reg(e, () => console.log('component-registered callback:', e));
    });
  }

  reRender() {
    this.container.innerHTML = '';
    this.render();
  }
}