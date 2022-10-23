import './styles/style.scss'

import { traits } from './descriptors/traits';

console.log('>>> the traits...', traits);

// const thing: String = '1' // lint doesn't like it 🎉
// console.log('something...', thing);

const root = document.getElementById('root') as HTMLDListElement;

const state = {
  title: 'Personalities',
  mainInput: '',
};

// function updateState(keyVal: 'title' | string[]) { // ['title', 'new personality'] // nerp
// function updateState(keyVal: string[]) { // ['title', 'new personality']
function setState(key: keyof typeof state, val: string) { // ['title', 'new personality']
  state[key] = val;
  render();
}


interface IOptions {
  className?: string,
  text?: string,
  onClick?(arg0: Event): void,
  onInput?: (arg0: Event) => void,
}

function build(parent: HTMLElement, el: string, options?: IOptions) {
  const element = document.createElement(el);
  if (options?.className) element.classList.add(options.className);
  if (options?.text) element.innerText = options.text;
  if (options?.onClick) element.addEventListener('click', options.onClick);
  if (options?.onInput) element.addEventListener('input', options.onInput);
  parent.appendChild(element)

  return element;
}

const updateMainInput = (e: Event) => {
  // console.log('e', e);
  const target = e.target as HTMLInputElement; 
  const value = target.value;
  console.log('listening!', value);
  setState('mainInput', value);
}


const render = () => {
  console.log('rendering');
  const main = build(root, 'div', {className: 'main'});
  const header = build(main, 'h1', {className: 'header', text: state.title});
  const options = build(main, 'div', {className: 'options'});
  const mainInput = build(options, 'input', {className: 'main-input', onInput: updateMainInput});
}

render();

// HELPERS /////////////////////////////
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}