import Sortable from 'sortablejs';

import Component from "../lib/Component";
import CharItem from "./CharItem";

// TEMPORARY import state directly for concept test
import { register, setState, state } from "../index";

export default class CharList extends Component {
  constructor(...args) {
    super(...args);

    register('addMe', () => this.clearAndRender());
  }

  registered() {
    // WIP... maybe assign this field in constructor instead
    // return ['characteristics']
    return []; // no current use for this...
  }

  charInput(e, i) {
    // console.log("charInput evenet", e);
    // console.log("charInput e.target.value", e.target.innerText);
    const newCharacteristics = [...state.characteristics];
    newCharacteristics[i].text = e.target.innerText;
    setState("characteristics", newCharacteristics);
    // IS THERE ANY REAL NEED to then programatically set the input?
    // essentially you are keeping state updated for persistence
  }

  removeChar(i) {
    const newCharacteristics = [...state.characteristics];
    newCharacteristics.splice(i, 1);
    setState("characteristics", newCharacteristics);

    const foundCharItem = document.getElementById(`characteristic-item${i}`)
    foundCharItem.remove();
  }

  containerOptions() {
    return {
      id: "characteristics-list",
      className: "characteristics-list",
    };
  }

  handleSortEnd(e) {
    const newCharacteristics = [...state.characteristics];
    newCharacteristics.splice(e.newIndex, 0, newCharacteristics.splice(e.oldIndex, 1)[0]);
    
    setState("characteristics", newCharacteristics);
  }

  render() {
    state.characteristics.forEach((characteristic, index) => {
      const DOMCharItem = new CharItem(this.container, "div", {
        id: `characteristic-item${index}`,
        characteristic,
        index,
        charInput: this.charInput,
        removeChar: (index) => this.removeChar(index),
      });
    });

    const sortable = Sortable.create(this.container, {
      onEnd: (e) => this.handleSortEnd(e),
      handle: '.characteristic-handle',
    });
  }
}
