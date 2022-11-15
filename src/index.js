import Component from "./lib/Component";

import MainOptions from "./components/MainOptions/MainOptions";
import CharList from "./components/CharList/CharList";
import "./styles/style.scss";

class App extends Component {
  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    const DOMHeader = this.build(this.container, "h1", {
      className: "header",
      text: this.$store.state.title,
    });

    const DOMMainOptions = new MainOptions(this.container, "div");

    const DOMCharList = new CharList(this.container, "div", {
      test: "CharList props test",
    });
  }
}

const DOMRoot = document.getElementById("root");
const initialState = {
  title: "Personalities 5e",
  mainInput: "",
  characteristics: [{ text: "test1" }, { text: "test2" }],
  categories: ['traits', 'ideals', 'bonds', 'flaws', 'trinkets'],
}
const app = new App(DOMRoot, "div", { initialState });
