import './styles/style.scss'

import { traits } from './descriptors/traits';

console.log('>>> the traits...', traits);

// const thing: String = '1' // lint doesn't like it 🎉
// console.log('something...', thing);

const root = document.getElementById('root') as HTMLDListElement;

const state = {
  title: 'Personalities',
};

interface IOptions {
  className?: string,
  text?: string,
  // https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1
  onClick?(): void,
}

function build(parent: HTMLElement, el: string, options?: IOptions) {
  const element = document.createElement(el);
  if (options?.className) element.classList.add(options.className);
  if (options?.text) element.innerText = options.text;
  if (options?.onClick) element.addEventListener('click', options.onClick);
  parent.appendChild(element)

  return element;
}

const listenerTest = () => {
  console.log('listening!');
}

const main = build(root, 'div', {className: 'main'});
const header = build(main, 'h1', {className: 'header', text: state.title});
const options = build(main, 'div', {className: 'options'});
const mainInput = build(options, 'input', {className: 'main-input', onClick: listenerTest});

