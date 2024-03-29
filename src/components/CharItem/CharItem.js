import Foolsgold from "foolsgold";

import "./CharItem.scss";

export default class CharItem extends Foolsgold {
  containerOptions() {
    return {
      id: this.props.id,
      className: "char-item",
    };
  }

  render() {
    const DOMLeft = this.build(this.container, "div", {
      className: "left",
    });

    this.build(DOMLeft, "div", {
      className: "char-item-drag-handle",
      title: "Drag to reorder",
    });

    this.build(DOMLeft, "span", {
      className: "text",
      text: this.props.characteristic.text,
      contentEditable: true,
      onInput: (e) => this.props.charInput(e, this.props.key),
    });

    this.build(this.container, "div", {
      className: "remove",
      onClick: () => this.props.removeChar(this.props.key),
      title: "Remove",
    });
  }
}
