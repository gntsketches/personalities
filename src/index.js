import { build } from './lib/build';

import { traits } from './descriptors/traits';
import CharList from './components/CharList';
import './styles/style.scss'

// TODO rename DOMRoot
const root = document.getElementById('root');

export const state = {
  title: 'Personalities',
  mainInput: '',
  characteristics: [
    {text: 'test1'},
    {text: 'test2'},
  ],
};

const registered = {};

export function setState(key, val) { 
  state[key] = val;
  console.log('NEW STATE', state);
  
  publish(key);
}

function publish(field) {
  console.log('attempt to publish ', field);
  if (registered[field]) registered[field]();
  console.log('PUBLISHED ', field);
}

export function register(field, callback) {
  registered[field] = callback;
  console.log('REGISTERED', registered);
}

const addMe = () => {
  // console.log('adding the current info to the list!');
  // TS define as interface
  const characteristic = {
    text: state.mainInput,
  }
  setState('characteristics', [...state.characteristics, characteristic]);
  setState('mainInput', '');
  // console.log('addMe state', state);
  publish('add-me')
}

const updateMainInput = (e) => {
  // console.log('e', e);
  const target = e.target; 
  const value = target.value;
  // console.log('listening!', value);
  setState('mainInput', value);
}

const render = () => {
  // console.log('>>> main render <<<');
  root.innerHTML = '';
  // TODO rename all these like "DOMMain"
  const main = build(root, 'div', {className: 'main'});

    const header = build(main, 'h1', {className: 'header', text: state.title});

    const options = build(main, 'div', {className: 'options'});
      const DOMAddMe = build(options, 'button', {
        className: 'add-me', text: 'Add Me', onClick: addMe
      });
      register('add-me', () => charList.render()); // can you rerender only part of this? how to component-ize for partial rerenders?

      const mainInput = build(options, 'input', {
        className: 'main-input', text: state.mainInput, onInput: updateMainInput,
      });
      // would be cool to use method chaining here: const mainInput = build(...).register(...)
      register('mainInput', () => {
        console.log('mainInput registered callback state', JSON.stringify(state));
        console.log('mainInput', mainInput);
        // mainInput.setAttribute('value', state.mainInput)
        // mainInput.setAttribute('value', 'TEST')
        mainInput.value = state.mainInput;
      });

    const charList = new CharList(main, 'div');
}

render();

// HELPERS /////////////////////////////
// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//   }
// }