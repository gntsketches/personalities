import Component from "../lib/Component";
import CharItem from "./CharItem";

// TEMPORARY import state directly for concept test
import { setState, state } from "../index";

export default class CharList extends Component {
  // WIP... maybe assign this field in constructor instead
  registered() {
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

    const foundCharItem = document.getElementById(`char-item${i}`)
    foundCharItem.remove();
  }

  render() {
    // console.log("CharList render");
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = "";

    const DOMChars = this.build(this.container, "div", {
      id: "characteristics-list",
      className: "characteristics-list",
    });
    // console.log("THE DOMCHARS ", DOMChars);
    this.DOMChars = DOMChars;

    state.characteristics.forEach((char, index) => {
      const c = new CharItem(DOMChars, "div", {
        id: `char-item${index}`,
        char,
        index,
        charInput: this.charInput,
        removeChar: (index) => this.removeChar(index),
      });
    });
  }
}
