import Component from "../../lib/Component";

import "./CharOptions.scss";

export default class CharOptions extends Component {
  constructor(...args) {
    super(...args);

    this.categoriesTimeout = null;

    this.$store.stateRegister("categories", () => this.clearAndRender());
  }

  updateCategories = (e, category) => {
    if (e.detail === 1) {
      this.categoriesTimeout = setTimeout(() => {
        const newCategories = [...this.$store.state.categories];
        if (newCategories.includes(category)) {
          if (this.$store.state.categories.length === 1) return;
          const i = newCategories.findIndex((e) => e === category);
          newCategories.splice(i, 1);
        } else {
          newCategories.push(category);
        }

        this.$store.setState("categories", newCategories);
      }, 200);
    } else if (e.detail === 2) {
      clearTimeout(this.categoriesTimeout);
      const newCategories = [category];

      this.$store.setState("categories", newCategories);
    }
  };

  containerOptions() {
    return {
      id: "char-options",
      className: "char-options",
    };
  }

  render() {
    const { categories } = this.$store.state;
    const DOMCategories = this.build(this.container, "div", {
      className: "categories",
    });

    const DOMTraits = this.build(DOMCategories, "p", {
      className: !categories.includes("traits") ? "unselected" : "",
      classNames: ["category"],
      text: "Traits",
      onClick: (e) => this.updateCategories(e, "traits"),
    });

    const DOMIdeals = this.build(DOMCategories, "p", {
      className: !categories.includes("ideals") ? "unselected" : "",
      classNames: ["category"],
      text: "Ideals",
      onClick: (e) => this.updateCategories(e, "ideals"),
    });

    const DOMBonds = this.build(DOMCategories, "p", {
      className: !categories.includes("bonds") ? "unselected" : "",
      classNames: ["category"],
      text: "Bonds",
      onClick: (e) => this.updateCategories(e, "bonds"),
    });

    const DOMFlaws = this.build(DOMCategories, "p", {
      className: !categories.includes("flaws") ? "unselected" : "",
      classNames: ["category"],
      text: "Flaws",
      onClick: (e) => this.updateCategories(e, "flaws"),
    });

    const DOMTrinkets = this.build(DOMCategories, "p", {
      className: !categories.includes("trinkets") ? "unselected" : "",
      classNames: ["category"],
      // className: 'unselected',
      text: "Trinkets",
      onClick: (e) => this.updateCategories(e, "trinkets"),
    });
  }
}
