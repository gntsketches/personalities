import Component from "../lib/Component";

export default class CharItem extends Component {
  containerOptions() {
    return {
      id: this.props.id,
      className: "characteristic-item",
    }
  }

  render() {
    const DOMCharItemLeft = this.build(this.container, "div", {
      className: "characteristic-item-left",
    });

      this.build(DOMCharItemLeft, "div", {
        className: "characteristic-handle",
        text: "="
      });

      this.build(DOMCharItemLeft, "div", {
        className: "characteristic-text",
        text: this.props.characteristic.text,
        contentEditable: true,
        onInput: (e) => this.props.charInput(e, this.props.index),
      });

    this.build(this.container, "div", {
      className: "characteristic-remove",
      text: 'X',
      onClick: () => this.props.removeChar(this.props.index),
    });
  }
}
