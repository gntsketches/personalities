import Component from "../lib/Component";

// TEMPORARY import state directly for concept test
import { register, publish, setState, state } from "../index";

export default class MainOptions extends Component {

  addMe = () => {
    // console.log('adding the current info to the list!');
    // TS define as interface
    const characteristic = {
      text: state.mainInput,
    }
    setState('characteristics', [...state.characteristics, characteristic]);
    setState('mainInput', '');
    // console.log('addMe state', state);
    publish('add-me')
  }

  render() {
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = "";

    const DOMOptions = this.build(this.container, "div", {
      id: "main-options",
      className: "main-options",
    });

    const DOMAddMe = build(DOMOptions, 'button', {
      className: 'add-me', text: 'Add Me', onClick: addMe
    });
    register('add-me', () => charList.render()); // can you rerender only part of this? how to component-ize for partial rerenders?
  }
}
