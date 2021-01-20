import { LitElement, css, html } from 'lit-element';

class NcHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        div {
          color: red;
        }
        .header {
          font-size: 16px;
        }
      </style>
      <div class="header">ncheader</div>
    `;
  }
}

// export const Header = /*#__PURE__*/ (() => {
//   if (!customElements.get('nc-header')) {
//     customElements.define('nc-header', NcHeader)
//   }
// })()

// if (!customElements.get('nc-header')) {
//   customElements.define('nc-header', NcHeader)
// }

class NcSideBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <div>side bar</div>
    `;
  }
}

// export const SideBar = /*#__PURE__*/ (() => {
//   if (!customElements.get('nc-side-bar')) {
//     customElements.define('nc-side-bar', NcSideBar)
//   }
// })()

// if (!customElements.get('nc-side-bar')) {
//   customElements.define('nc-side-bar', NcSideBar)
// }

var css_248z = ":host {\n  display: flex;\n}\n.hello2 {\n  font-size: 50px;\n  color: purple;\n  display:flex;\n}\n";

class SimpleGreeting extends LitElement {
  static get properties() {
    return { name: { type: String } }
  }

  static get styles() {
    return css([css_248z])
  }

  constructor() {
    super();
    this.name = 'Worlds';
  }

  render() {
    return html`
    <span class="hello2">Hello,${this.name}!!</span>`
  }
}

// customElements.define('simple-greeting', SimpleGreeting)

export { NcHeader, NcSideBar, SimpleGreeting };
