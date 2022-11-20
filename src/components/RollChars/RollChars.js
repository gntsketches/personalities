import { v4 as uuidv4 } from 'uuid';
import Component from "../../lib/Component";

import { traits, ideals, bonds, flaws, trinkets } from "../../descriptors";
import "./RollChars.scss";

const mapDescriptors = {
  traits,
  ideals,
  bonds,
  flaws,
  trinkets,
};

function getDescriptors(categories) {
  let descriptors = [];
  categories.forEach((category) => {
    descriptors = [...descriptors, ...mapDescriptors[category]];
  });

  return descriptors;
}

export default class RollChars extends Component {
  constructor(...args) {
    super(...args);
    this.$store.setState("mainInput", "TEST");

    this.$store.stateRegister("mainInput", () => {
      this.DOMMainInput.value = this.$store.state.mainInput;
    });
  }

  roll = () => {
    const descriptors = getDescriptors(this.$store.state.categories);
    console.log("descriptors", descriptors);
    const descriptor =
      descriptors[Math.floor(Math.random() * descriptors.length)];
    console.log("descriptor", descriptor);
    this.$store.setState("mainInput", descriptor.description);
  };

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
    if (this.$store.state.mainInput === '') return;

    const newId = uuidv4();
    console.log('newId', newId);
    const characteristic = {
      text: this.$store.state.mainInput,
      id: newId,
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
      id: "roll-chars",
      className: "roll-chars",
    };
  }

  render() {
    // const DOMTop = this.build(this.container, "div", { className: "top" });

    const DOMRoll = this.build(this.container, "button", {
      className: "roll",
      onClick: () => this.roll(),
      title: "Roll a new personality characteristic",
    });

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
