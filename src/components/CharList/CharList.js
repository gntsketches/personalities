import Sortable from "sortablejs";
// import Component from "../../lib/Component";
import Foolsgold from "foolsgold";

import CharItem from "../CharItem/CharItem";
import "./CharList.scss";

export default class CharList extends Foolsgold {
  constructor(...args) {
    super(...args);

    this.$store.register("addMe", () => this.clearAndRender());
  }

  charInput(e, key) {
    console.log('charInput key', key);

    const index = this.$store.state.characteristics.findIndex(e => e.id === key);
    console.log('index', index);
    const newCharacteristics = [...this.$store.state.characteristics];
    newCharacteristics[index].text = e.target.innerText;
    this.$store.setState("characteristics", newCharacteristics);
  }

  removeChar(key) {
    const index = this.$store.state.characteristics.findIndex(e => e.id === key);
    console.log('index', index);
    const newCharacteristics = [...this.$store.state.characteristics];
    newCharacteristics.splice(index, 1);
    this.$store.setState("characteristics", newCharacteristics);

    const foundCharItem = document.getElementById(`characteristic-item${key}`);
    foundCharItem.remove();

    if (newCharacteristics.length === 0) {
      console.log('char length is 0');
      this.clearAndRender();
    }
  }

  containerOptions() {
    return {
      id: "characteristics-list",
      className: "char-list",
    };
  }

  handleSortEnd(e) {
    // TODO check for state compatability with use of key
    const newCharacteristics = [...this.$store.state.characteristics];
    newCharacteristics.splice(
      e.newIndex,
      0,
      newCharacteristics.splice(e.oldIndex, 1)[0]
    );

    this.$store.setState("characteristics", newCharacteristics);
  }

  render() {
    if (this.$store.state.characteristics.length === 0) {
      console.log('CharList char length', this.$store.state.characteristics.length);
      this.build(this.container, "div", {
        className: "no-characteristics-text",
        text: "No characteristics yet...",
      });

      return;
    }

    this.$store.state.characteristics.forEach((characteristic, index) => {
      const key =  characteristic.id;
      const DOMCharItem = new CharItem(this.container, "div", {
        id: `characteristic-item${key}`,
        characteristic,
        key,
        charInput: (e, i) => this.charInput(e, i),
        removeChar: (key) => this.removeChar(key),
      });
    });

    const sortable = Sortable.create(this.container, {
      onEnd: (e) => this.handleSortEnd(e),
      handle: ".char-item-drag-handle",
    });
  }
}
