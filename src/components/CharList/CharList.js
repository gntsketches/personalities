import Sortable from "sortablejs";

import Component from "../../lib/Component";
import CharItem from "../CharItem/CharItem";
import "./CharList.scss";

export default class CharList extends Component {
  constructor(...args) {
    super(...args);

    this.store.register("addMe", () => this.clearAndRender());
  }

  charInput(e, i) {
    const newCharacteristics = [...this.store.state.characteristics];
    newCharacteristics[i].text = e.target.innerText;
    this.store.setState("characteristics", newCharacteristics);
  }

  removeChar(i) {
    const newCharacteristics = [...this.store.state.characteristics];
    newCharacteristics.splice(i, 1);
    this.store.setState("characteristics", newCharacteristics);

    const foundCharItem = document.getElementById(`characteristic-item${i}`);
    foundCharItem.remove();
  }

  containerOptions() {
    return {
      id: "characteristics-list",
      className: "char-list",
    };
  }

  handleSortEnd(e) {
    const newCharacteristics = [...this.store.state.characteristics];
    newCharacteristics.splice(
      e.newIndex,
      0,
      newCharacteristics.splice(e.oldIndex, 1)[0]
    );

    this.store.setState("characteristics", newCharacteristics);
  }

  render() {
    this.store.state.characteristics.forEach((characteristic, index) => {
      const DOMCharItem = new CharItem(this.container, "div", {
        id: `characteristic-item${index}`,
        characteristic,
        index,
        charInput: (e, i) => this.charInput(e, i),
        removeChar: (index) => this.removeChar(index),
      });
    });

    const sortable = Sortable.create(this.container, {
      onEnd: (e) => this.handleSortEnd(e),
      handle: ".char-item-drag-handle",
    });
  }
}
