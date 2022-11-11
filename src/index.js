import Component from "./lib/Component";

import { traits } from "./descriptors/traits";
import CharList from "./components/CharList1";
import MainOptions from "./components/MainOptions";
import "./styles/style.scss";

const DOMRoot = document.getElementById("root");

export const state = {
  title: "Personalities 5e",
  mainInput: "",
  characteristics: [{ text: "test1" }, { text: "test2" }],
};

const registered = {};

export function setState(key, val) {
  state[key] = val;
  console.log("NEW STATE", state);

  publish(key);
}

export function publish(field) {
  // console.log('attempt to publish ', field);
  if (registered[field]) registered[field]();
  // console.log('PUBLISHED ', field);
}

export function register(field, callback) {
  registered[field] = callback;
  // console.log('REGISTERED', registered);
}

class App extends Component {
  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    const DOMHeader = this.build(this.container, "h1", {
      className: "header",
      text: state.title,
    });

    const DOMMainOptions = new MainOptions(this.container, "div");

    const DOMCharList = new CharList(this.container, "div", {
      test: "CharList props test",
    });
  }
}

const app = new App(DOMRoot, "div");
