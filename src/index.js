import { v4 as uuidv4 } from "uuid";
// import Component from "./lib/Component";
import Foolsgold from "foolsgold";

import Header from "./components/Header/Header";
import RollChars from "./components/RollChars/RollChars";
import CharOptions from "./components/CharOptions/CharOptions";
import CharList from "./components/CharList/CharList";
import "./styles/style.scss";

class App extends Foolsgold {
  constructor(...args) {
    super(...args);

    const storedCharacteristics = localStorage.getItem("chars");
    if (storedCharacteristics) {
      const parsedCharacteristics = JSON.parse(storedCharacteristics);
      this.$store.setState("characteristics", parsedCharacteristics);
    }

    this.$store.stateRegister("characteristics", () => {
      const characteristicsString = JSON.stringify(
        this.$store.state.characteristics
      );
      localStorage.setItem("chars", characteristicsString);
    });

    this.clearAndRender();
  }

  containerOptions() {
    return {
      className: "main",
    };
  }

  render() {
    const DOMHeader = new Header(this.container, "div");

    const DOMRollChars = new RollChars(this.container, "div");

    const DOMCharOptions = new CharOptions(this.container, "div");

    const DOMCharList = new CharList(this.container, "div", {
      test: "CharList props test",
    });
  }
}

const DOMRoot = document.getElementById("root");
const initialState = {
  title: "Personalities 5e",
  mainInput: "",
  characteristics: [
    // { text: "test1", id: uuidv4() },
    // { text: "test2", id: uuidv4() },
  ],
  categories: ["traits", "ideals", "bonds", "flaws"],
};
const app = new App(DOMRoot, "div", { initialState });
