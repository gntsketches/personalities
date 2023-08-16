import { v4 as uuidv4 } from 'uuid';
import Foolsgold from "foolsgold";

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

export default class RollChars extends Foolsgold {
  constructor(...args) {
    super(...args);

    this.$store.stateRegister("mainInput", () => {
      this.DOMMainInput.value = this.$store.state.mainInput;
    });
  }

  roll = () => {
    const descriptors = getDescriptors(this.$store.state.categories);
    const descriptor =
      descriptors[Math.floor(Math.random() * descriptors.length)];
    this.$store.setState("mainInput", descriptor.description);
  };

  updateMainInput = (e) => {
    const target = e.target;
    const value = target.value;
    this.$store.setState("mainInput", value);
  };

  addMe = () => {
    if (this.$store.state.mainInput === '') return;

    const newId = uuidv4();
    const characteristic = {
      text: this.$store.state.mainInput,
      id: newId,
    };
    this.$store.setState("characteristics", [
      ...this.$store.state.characteristics,
      characteristic,
    ]);
    this.$store.setState("mainInput", "");
    this.$store.publish("addMe");
  };

  containerOptions() {
    return {
      id: "roll-chars",
      className: "roll-chars",
    };
  }

  render() {
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
