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
    this.render();
  }

  render() {
    console.log('This is the component base, extend it with something...'); 
  }

  /* 
    HOW to subscribe to any registered field?
      (is there a way to do it automatically?)
      ... such as to call reRender...
  */

  reRender() {
    this.container.innerHTML = '';
    this.render();
  }
}