import Component from "../../lib/Component";

import { traits, ideals, bonds, flaws, trinkets } from "../../descriptors";
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
    const trait = traits[Math.floor(Math.random() * traits.length)];
    console.log("trait", trait);
    this.$store.setState("mainInput", trait.description);
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

  updateCategories = (category) => {
    console.log("updateCategories", category);
    const newCategories = [...this.$store.state.categories];
    console.log('newCategries', newCategories);
    if (newCategories.includes(category)) {
      const i = newCategories.findIndex(e => e === category);
      newCategories.splice(i, 1);
    } else {
      newCategories.push(category);
    }

    this.$store.setState('categories', newCategories);

  };

  containerOptions() {
    return {
      id: "main-options",
      className: "main-options",
    };
  }

  render() {
    // console.log('MAIN OPTIONS RENDER store', this.$store);
    const DOMTop = this.build(this.container, "div", { className: "top" });

    const DOMRoll = this.build(DOMTop, "button", {
      className: "roll",
      onClick: () => this.roll(),
    });

    const DOMMainInput = this.build(DOMTop, "textarea", {
      className: "main-input",
      text: this.$store.state.mainInput,
      onInput: (e) => this.updateMainInput(e),
    });
    this.DOMMainInput = DOMMainInput;

    const DOMAddMe = this.build(DOMTop, "button", {
      className: "add-me",
      text: "Add",
      onClick: () => this.addMe(),
    });

    const DOMCategories = this.build(this.container, "div", {
      className: "categories",
    });

      const DOMTraits = this.build(DOMCategories, "p", {
        classNames: ["category"],
        text: "Traits",
        onClick: () => this.updateCategories('traits'),
      });

      const DOMIdeals = this.build(DOMCategories, "p", {
        classNames: ["category"],
        text: "Ideals",
        onClick: () => this.updateCategories('traits'),
      });

      const DOMBonds = this.build(DOMCategories, "p", {
        classNames: ["category"],
        text: "Bonds",
        onClick: () => this.updateCategories('bonds'),
      });

      const DOMFlaws = this.build(DOMCategories, "p", {
        classNames: ["category"],
        text: "Flaws",
        onClick: () => this.updateCategories('flaws'),
      });

      const DOMTrinkets = this.build(DOMCategories, "p", {
        classNames: ["category"],
        // className: 'unselected',
        text: "Trinkets",
        onClick: () => this.updateCategories('trinkets'),
      });
  }
}
