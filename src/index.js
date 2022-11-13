import Component from "./lib/Component";
// import Store from "./lib/Store";

// import { traits } from "./descriptors/traits";
// import CharList from "./components/CharList/CharList";
import MainOptions from "./components/MainOptions/MainOptions";
import "./styles/style.scss";

const DOMRoot = document.getElementById("root");


console.log('INDEX 1');
class App extends Component {
  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    console.log("App render");
    const DOMHeader = this.build(this.container, "h1", {
      className: "header",
      // text: 'HEADER TEXT'
      text: this.store.state.title,
    });

    const DOMMainOptions = new MainOptions(this.container, "div");
    console.log('DOMMAINOPTIONS', DOMMainOptions);

    // const DOMCharList = new CharList(this.container, "div", {
    //   test: "CharList props test",
    // });

    // const thisStore = this.getThisStore();
    // console.log("thisStore pre", thisStore)
    // thisStore.setState('mainInput', 'APP TEST')
    // console.log("thisStore post", thisStore)
    // console.log("getStore", this.getStore());
  }
}

const initialState = {
  title: "Personalities 5e",
  mainInput: "",
  characteristics: [{ text: "test1" }, { text: "test2" }],
}

console.log('INDEX 2');
const app = new App(DOMRoot, "div", { initialState });
console.log('INDEX 3');






// WORKS.(app2 logs mainInput: APP TEST)
  // So they're both getting the same store
  // AND! you can use the initStore method,
  // Not to instantiate the store and create the reference,
  // but to set its initial state
// const DOMRoot2 = document.getElementById("root2");
// class App2 extends Component {
//   containerOptions() {
//     return {
//       className: "main2",
//     };
//   }

//   render() {
//     console.log("App2 render");
//     console.log("getThisStore2", this.getThisStore());
//     // console.log("getStore", this.getStore());
//   }
// }
// const app2 = new App2(DOMRoot2, "div");