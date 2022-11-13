import Component from "./lib/Component";
// import Store from "./lib/Store";

// import { traits } from "./descriptors/traits";
// import CharList from "./components/CharList/CharList";
// import MainOptions from "./components/MainOptions/MainOptions";
import "./styles/style.scss";

const DOMRoot = document.getElementById("root");
const DOMRoot2 = document.getElementById("root2");

// const state = {
//   title: "Personalities 5e",
//   mainInput: "",
//   characteristics: [{ text: "test1" }, { text: "test2" }],
// };

// const store = new Store(state);
// console.log("[[[ store ]]]", store);

class App extends Component {
  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    console.log("App render");
    // const DOMHeader = this.build(this.container, "h1", {
    //   className: "header",
    //   text: state.title,
    // });

    // const DOMMainOptions = new MainOptions(this.container, "div");

    // const DOMCharList = new CharList(this.container, "div", {
    //   test: "CharList props test",
    // });
    const thisStore = this.getThisStore();
    console.log("thisStore pre", thisStore)
    thisStore.setState('mainInput', 'APP TEST')
    console.log("thisStore post", thisStore)
    // console.log("getStore", this.getStore());
  }
}
class App2 extends Component {
  containerOptions() {
    return {
      className: "main2",
    };
  }

  render() {
    console.log("App2 render");
    console.log("getThisStore2", this.getThisStore());
    // console.log("getStore", this.getStore());
  }
}
// const app = new App(DOMRoot, "div", { store });
const app = new App(DOMRoot, "div");
const app2 = new App2(DOMRoot2, "div");

// WORKS.(app2 logs mainInput: APP TEST)
  // So they're both getting the same store

  // AND! you can use the initStore method,
  // Not to instantiate the store and create the reference,
  // but to set its initial state
