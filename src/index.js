import './styles/style.scss'

import { traits } from './descriptors/traits';

console.log('>>> the traits...', traits);

// const thing: String = '1' // lint doesn't like it 🎉
// console.log('something...', thing);

// TODO rename DOMRoot
const root = document.getElementById('root');

const state = {
  title: 'Personalities',
  mainInput: '',
  characteristics: [
    {text: 'test1'},
    {text: 'test2'},
  ],
};

const registered = {};

function setState(key, val) { 
  state[key] = val;
  console.log('state', state);
  
  publish(key);
}

function publish(stateField) {
  registered[stateField]();
}

function build(parent, el, options) {
  console.log('build options', options);
  const element = document.createElement(el);
  if (options?.className) element.classList.add(options.className);
  if (options?.text) {
    if (el === 'input') element.setAttribute('value', options.text);
    else element.innerText = options.text;
  }
  if (options?.onClick) element.addEventListener('click', options.onClick);
  if (options?.onInput) element.addEventListener('input', options.onInput);
  parent.appendChild(element)

  return element;
}

function register(stateField, callback) {
  registered[stateField] = callback;
}

const addMe = () => {
  console.log('adding the current info to the list!');
  // TS define as interface
  const characteristic = {
    text: state.mainInput,
  }
  setState('characteristics', [...state.characteristics, characteristic]);
  setState('mainInput', '');
  console.log('state', state);
}

const updateMainInput = (e) => {
  // console.log('e', e);
  const target = e.target; 
  const value = target.value;
  console.log('listening!', value);
  setState('mainInput', value);
}


const render = () => {
  console.log('rendering');
  root.innerHTML = '';
  // TODO rename all these like "DOMMain"
  const main = build(root, 'div', {className: 'main'});

    const header = build(main, 'h1', {className: 'header', text: state.title});

    const options = build(main, 'div', {className: 'options'});
      const DOMAddMe = build(options, 'button', {
        className: 'add-me', text: 'Add Me', onClick: addMe
      });
      register('characteristics', () => render()); // can you rerender only part of this? how to component-ize for partial rerenders?
      const mainInput = build(options, 'input', {
        className: 'main-input', text: state.mainInput, onInput: updateMainInput,
      });
      // would be cool to use method chaining here: const mainInput = build(...).register(...)
      register('mainInput', () => mainInput.setAttribute('value', state.mainInput));

    const DOMChars = build(main, 'div', {
      className: 'characteristics-list', 
    });

    state.characteristics.forEach(characteristic => {
      const char = build(DOMChars, 'div', {
        className: 'char', text: characteristic.text,
      })
    });
}

render();

// HELPERS /////////////////////////////
// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//   }
// }