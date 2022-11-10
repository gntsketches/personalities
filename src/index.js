import { build } from "./lib/build";

import { traits } from "./descriptors/traits";
import CharList from "./components/CharList1";
import MainOptions from "./components/MainOptions";
import "./styles/style.scss";

const DOMRoot = document.getElementById("root");

export const state = {
  title: "Personalities",
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

const render = () => {
  // console.log('>>> main render <<<');
  DOMRoot.innerHTML = "";
  const main = build(DOMRoot, "div", { className: "main" });

  const DOMHeader = build(main, "h1", {
    className: "header",
    text: state.title,
  });

  const DOMMainOptions = new MainOptions(main, "div");

  const DOMCharList = new CharList(main, "div", {
    test: "CharList props test",
  });
};

render();
