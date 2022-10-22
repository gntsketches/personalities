import './styles/style.scss'

import { traits } from './descriptors/traits';

console.log('>>> the traits...', traits);

// const thing: String = '1' // lint doesn't like it 🎉
// console.log('something...', thing);

const root = document.getElementById('root') as HTMLDListElement;

const state = {
  title: 'Personalities',
};

function build(parent: HTMLElement, el: string, className?: string, text?: string) {
  // let html = '';
  // html +=
  //   `<${el} class="${className ? className : ''}">${text ? text : ''}</${el}>`;
  // parent.innerHTML = html;
  const element = document.createElement(el);
  if (className) element.classList.add(className);
  if (text) element.innerText = text;
  parent.appendChild(element)

  return element;
}

const main = build(root, 'div', 'main');
const header = build(main, 'h1', 'header', state.title);
const options = build(main, 'div', 'options');
const mainInput = build(options, 'input');

