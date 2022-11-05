import Component from '../lib/Component';

// TEMPORARY import state directly for concept test
import { setState, state } from '../index';

export default class CharList extends Component {

  // WIP... maybe assign this field in constructor instead
  registered() {
    // return ['characteristics']
    return []; // no current use for this...
  }

  charInput(e, i) {
    console.log('charInput evenet', e);
    console.log('charInput e.target.value', e.target.innerText);
    const newCharacteristics = [...state.characteristics];
    newCharacteristics[i].text = e.target.innerText;
    setState('characteristics', newCharacteristics)
    // IS THERE ANY REAL NEED to then programatically set the input?
    // essentially you are keeping state updated for persistence
  }

  render() {
    console.log('CharList render');
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = '';

    const DOMChars = this.build(this.container, 'div', {
      className: 'characteristics-list', 
    });

    state.characteristics.forEach((characteristic, index) => {
      const char = this.build(DOMChars, 'div', {
        className: 'char', text: characteristic.text, contentEditable: true,
        onInput: (e) => this.charInput(e, index),
      })
    });
  }
}