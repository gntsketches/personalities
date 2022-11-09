import Component from "../lib/Component";

export default class CharItem extends Component {
  render() {
    // console.log("CharItem render props", this.props);
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = "";

    const DOMChar = this.build(this.container, "div", {
      id: this.props.id,
      className: "characteristic-item",
    });

    this.build(DOMChar, "div", {
      className: "characteristic-text",
      text: this.props.char.text,
      contentEditable: true,
      onInput: (e) => this.props.charInput(e, this.props.index),
    });

    this.build(DOMChar, "div", {
      className: "characteristic-remove",
      text: 'X',
      onClick: () => this.props.removeChar(this.props.index),
    });
  }
}
