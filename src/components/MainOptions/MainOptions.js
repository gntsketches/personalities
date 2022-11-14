import Component from "../../lib/Component";

import "./MainOptions.scss";

export default class MainOptions extends Component {
  constructor(...args) {
    super(...args);
    // console.log('MAIN OPTIONS CONSTRUCTOR store', this.store);
    this.store.setState('mainInput', 'TEST')

    this.store.register("mainInput", () => {
      this.DOMMainInput.value = this.store.state.mainInput;
    });
  }

  updateMainInput = (e) => {
    // console.log("updateMainInput e", e);
    const target = e.target;
    const value = target.value;
    // console.log('listening!', value);
    this.store.setState("mainInput", value);
  };

  addMe = () => {
    // console.log('adding the current info to the list!');
    // TS define as interface
    const characteristic = {
      text: this.store.state.mainInput,
    };
    this.store.setState("characteristics", [...this.store.state.characteristics, characteristic]);
    this.store.setState("mainInput", "");
    // console.log("addMe state", this.store.state);
    this.store.publish("addMe");
  };

  containerOptions() {
    return {
      id: "main-options",
      className: "main-options",
    };
  }

  render() {
    // console.log('MAIN OPTIONS RENDER store', this.store);

    const DOMAddMe = this.build(this.container, "button", {
      className: "add-me",
      text: "Add Me",
      onClick: () => this.addMe(),
    });

    const DOMMainInput = this.build(this.container, "input", {
      className: "main-input",
      text: this.store.state.mainInput,
      onInput: (e) => this.updateMainInput(e),
    });
    this.DOMMainInput = DOMMainInput;
  }
}
