import Component from "./lib/Component";
import Store from "./lib/Store";

// import { traits } from "./descriptors/traits";
// import CharList from "./components/CharList/CharList";
// import MainOptions from "./components/MainOptions/MainOptions";
import "./styles/style.scss";

const DOMRoot = document.getElementById("root");

const state ={
  title: "Personalities 5e",
  mainInput: "",
  characteristics: [{ text: "test1" }, { text: "test2" }],
}; 

const store = new Store(state);
console.log('[[[ store ]]]', store);

class App extends Component {
  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    console.log('render empty for now...');
    // const DOMHeader = this.build(this.container, "h1", {
    //   className: "header",
    //   text: state.title,
    // });

    // const DOMMainOptions = new MainOptions(this.container, "div");

    // const DOMCharList = new CharList(this.container, "div", {
    //   test: "CharList props test",
    // });
  }
}

const app = new App(DOMRoot, "div", { store });
