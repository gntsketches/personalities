import Component from "../../lib/Component";

import { traits } from "../../descriptors/traits";
import "./MainOptions.scss";

export default class MainOptions extends Component {
  constructor(...args) {
    super(...args);
    // console.log('MAIN OPTIONS CONSTRUCTOR store', this.$store);
    this.$store.setState("mainInput", "TEST");

    this.$store.register("mainInput", () => {
      this.DOMMainInput.value = this.$store.state.mainInput;
    });
  }

  roll = () => {
    const trait = traits[Math.floor(Math.random() * traits.length)]
    console.log('trait', trait);
    this.$store.setState("mainInput", trait.description)
  }

  updateMainInput = (e) => {
    // console.log("updateMainInput e", e);
    const target = e.target;
    const value = target.value;
    // console.log('listening!', value);
    this.$store.setState("mainInput", value);
  };

  addMe = () => {
    // console.log('adding the current info to the list!');
    // TS define as interface
    const characteristic = {
      text: this.$store.state.mainInput,
    };
    this.$store.setState("characteristics", [
      ...this.$store.state.characteristics,
      characteristic,
    ]);
    this.$store.setState("mainInput", "");
    // console.log("addMe state", this.$store.state);
    this.$store.publish("addMe");
  };

  containerOptions() {
    return {
      id: "main-options",
      className: "main-options",
    };
  }

  render() {
    // console.log('MAIN OPTIONS RENDER store', this.$store);
    const DOMRoll = this.build(this.container, "button", {
      className: "roll",
      onClick: () => this.roll(),
    })

    // const DOMMainInput = this.build(this.container, "input", {
    const DOMMainInput = this.build(this.container, "textarea", {
      className: "main-input",
      text: this.$store.state.mainInput,
      onInput: (e) => this.updateMainInput(e),
    });
    this.DOMMainInput = DOMMainInput;

    const DOMAddMe = this.build(this.container, "button", {
      className: "add-me",
      text: "Add",
      onClick: () => this.addMe(),
    });

  }
}
