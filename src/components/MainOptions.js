import Component from "../lib/Component";

// TEMPORARY import state directly for concept test
import { register, publish, setState, state } from "../index";

export default class MainOptions extends Component {
  constructor(...args) {
    super(...args);

    register('mainInput', () => {
      this.DOMMainInput.value = state.mainInput;
    });
  }

  addMe = () => {
    // console.log('adding the current info to the list!');
    // TS define as interface
    const characteristic = {
      text: state.mainInput,
    }
    setState('characteristics', [...state.characteristics, characteristic]);
    setState('mainInput', '');
    console.log('addMe state', state);
    publish('addMe')
  }

  render() {
    console.log('MainOptions this', this);
    // HMM render should somehow perform the clearing of the container automatically...
    this.container.innerHTML = "";

    const DOMOptions = this.build(this.container, "div", {
      id: "main-options",
      className: "main-options",
    });

    const DOMAddMe = this.build(DOMOptions, 'button', {
      className: 'add-me', text: 'Add Me', onClick: () => this.addMe()
    });

    const DOMMainInput = this.build(DOMOptions, 'input', {
      className: 'main-input', text: state.mainInput, onInput: this.props.updateMainInput,
    });
    this.DOMMainInput = DOMMainInput;
  }
}
