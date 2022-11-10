import Component from "../lib/Component";

export default class CharItem extends Component {
  containerOptions() {
    return {
      id: this.props.id,
      className: "characteristic-item",
    }
  }

  render() {
    // console.log("CharItem render props", this.props);
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = "";

    this.build(this.container, "div", {
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
