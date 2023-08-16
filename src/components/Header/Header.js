import Foolsgold from "foolsgold";

import { copyToClipboard, download } from "../../utils/export";
import "./Header.scss";

export default class Header extends Foolsgold {
  containerOptions() {
    return {
      className: "header",
    };
  }

  getPersonalityText() {
    let text = "";
    this.$store.state.characteristics.forEach((e) => {
      text += e.text;
      text += "\n";
      text += "\n";
    });

    return text;
  }

  copy() {
    copyToClipboard(this.getPersonalityText());
  }

  createFile() {
    const file = new File([this.getPersonalityText()], "personality.txt", {
      type: "text/plain",
    });

    download(file);
  }

  render() {
    const DOMTitle = this.build(this.container, "h1", {
      className: "title",
      text: this.$store.state.title,
    });

    const DOMRight = this.build(this.container, "div", {
      className: "right",
    });

    const DOMCopy = this.build(DOMRight, "button", {
      className: "copy",
      title: "Copy Personality Text",
      onClick: () => this.copy(),
    });

    const DOMFile = this.build(DOMRight, "button", {
      className: "file",
      title: "Download Personality Text",
      onClick: () => this.createFile(),
    });
  }
}
