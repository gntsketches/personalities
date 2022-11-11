import Component from "../lib/Component";

// TEMPORARY import state directly for concept test
import { register, publish, setState, state } from "../index";

export default class MainOptions extends Component {
  constructor(...args) {
    super(...args);

    register("mainInput", () => {
      this.DOMMainInput.value = state.mainInput;
    });
  }

  updateMainInput = (e) => {
    // console.log("updateMainInput e", e);
    const target = e.target;
    const value = target.value;
    // console.log('listening!', value);
    setState("mainInput", value);
  };

  addMe = () => {
    // console.log('adding the current info to the list!');
    // TS define as interface
    const characteristic = {
      text: state.mainInput,
    };
    setState("characteristics", [...state.characteristics, characteristic]);
    setState("mainInput", "");
    console.log("addMe state", state);
    publish("addMe");
  };

  containerOptions() {
    return {
      id: "main-options",
      className: "main-options",
    };
  }

  render() {
    const DOMAddMe = this.build(this.container, "button", {
      className: "add-me",
      text: "Add Me",
      onClick: () => this.addMe(),
    });

    // const DOMMainInput = this.build(DOMOptions, 'input', {
    const DOMMainInput = this.build(this.container, "input", {
      className: "main-input",
      text: state.mainInput,
      onInput: (e) => this.updateMainInput(e),
    });
    this.DOMMainInput = DOMMainInput;
  }
}
