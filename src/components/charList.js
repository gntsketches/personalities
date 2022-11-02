import Component from '../lib/component';

// TODO pascal case this file name

// TEMPORARY import state directly for concept test
import { state } from '../index';

export default class CharList extends Component {

  // WIP... maybe assign this field in constructor instead
  registered() {
    return ['characteristics']
  }

  render() {
    console.log('CharList render');
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = '';

    const DOMChars = this.build(this.container, 'div', {
      className: 'characteristics-list', 
    });

    state.characteristics.forEach(characteristic => {
      const char = this.build(DOMChars, 'div', {
        className: 'char', text: characteristic.text,
      })
    });
  }
}